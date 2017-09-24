
goodshow.component.Markup = goodshow.component.Root.extend({
    
    initialize: function(options) {

        goodshow.component.Root.prototype.initialize.call(this, Object.assign({
            
        }, options || {}));
        this.entered = false;
        this.loaded = false;
    },
    
    install: function(entity) {
        
        goodshow.component.Root.prototype.install.call(this, entity);
        this.element = document.createElement('div');
        this.element.className = 'element';
        document.body.appendChild(this.element);
        goodshow.Utility.loadText({
            url: '../assets/templates/index.html',
            callback: function(html) {
                console.log('loaded');
                this.html = html;
                this.loaded = true;
    		    this.present();
            }.bind(this)
        });
        entity.on('removed', function() {
            if (false) console.log('removed');
            this.element.style.display = 'none';
            entity.shown = false;
        }.bind(this));
        if (true) {
            entity.on('shown', function() {
                if (false) console.log('shown');
                var miller = goodshow.Utility.ancestor.find(entity, goodshow.Miller);
                if (miller) {
            		miller.on('has-entered', function() {
            			if (false) console.log('entered');
        			    this.entered = true;
                        this.present();
            		}.bind(this));
                }
            }.bind(this));
        } else {
    		goodshow.Broadcast.subscribe('entity-has-entered', function(options) {
    			if (goodshow.Utility.ancestor.has(entity, options.entity)) {
    			    this.entered = true;
                    this.present();
    			}
    		}.bind(this));
        }
    },
    
    present : function() {
        
        if (false) console.log('present');
    	if (this.loaded & this.entered) {
            this.element.innerHTML = this.html;
    	}
    },
    
    draw: function(entity) {
        
        goodshow.component.Root.prototype.draw.call(this, entity);
        Object.assign(this.element.style, {
            top: entity.options.bounds.y,
            left: entity.options.bounds.x,
            width: entity.options.bounds.width,
            height: entity.options.bounds.height
        });
    }
});
