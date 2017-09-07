
goodshow.component.Select = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            selected : false
        }, options || {}));
    },
    
    install : function(entity) {
        
        goodshow.component.Component.prototype.install.call(this);
		entity.interactive = true;
		entity.on('mousedown', function(event) {
            this.selected = ! this.selected;
            if (true) {
                entity.parent.children.forEach(function(each) {
                    entity.options.selected = false;
                });
                window.setTimeout(function() {
                    if (this.selected) {
                        entity.options.background.wrap(0x4444FF);
                        entity.options.foreground.wrap('white');
                    } else {
                        entity.options.background.unwrap();
                        entity.options.foreground.unwrap();
                    }
                    entity.draw();
                }.bind(this), 500);
            } else {
                entity.options.alpha = 0.5;
                entity.options.background = 0x4444FF;
    			goodshow.tween.alpha({
    				entity : this,
    				alpha : 0,
    				duration : 300,
    			});
            }
		}.bind(this));
    },
    
    draw : function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this);
    },
    
    toggle : function() {
        
        
    }
});
