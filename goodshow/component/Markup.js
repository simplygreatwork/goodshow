
goodshow.component.Markup = goodshow.component.Component.extend({
    
    initialize: function(options) {

        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            
        }, options || {}));
        this.entered = false;
        this.loaded = false;
    },
    
    install: function(entity) {
        
        goodshow.component.Component.prototype.install.call(this, entity);
        this.element = document.createElement('div');
        this.element.className = 'element';
        document.body.appendChild(this.element);
        goodshow.Utility.loadText({
            url: '../assets/templates/index.html',
            callback: function(html) {
                this.html = html;
                this.loaded = true;
    		    this.present();
            }.bind(this)
        });
        entity.on('removed', function() {
            this.element.style.display = 'none';
        }.bind(this));
		goodshow.Broadcast.subscribe('entity-has-entered', function(options) {
			if (goodshow.Utility.hasAncestor(entity, options.entity)) {
			    this.entered = true;
                this.present();
			}
		}.bind(this));
    },
    
    present : function() {
        
    	if (this.loaded & this.entered) {
            this.element.innerHTML = this.html;
    	}
    },
    
    draw: function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this, entity);
        Object.assign(this.element.style, {
            top: entity.options.bounds.y,
            left: entity.options.bounds.x,
            width: entity.options.bounds.width,
            height: entity.options.bounds.height
        });
    }
});
