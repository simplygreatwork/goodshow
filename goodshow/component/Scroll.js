
goodshow.component.Scroll = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            axis : 'y',
            bounds : [0, 0],
            delta : {
               x : 'deltaX',
               y : 'deltaY'
            }
        }, options || {}));
    },
    
    install : function(entity) {
        
        goodshow.component.Component.prototype.install.call(this);
        document.addEventListener('mousewheel', function(event) {
            if (entity.options.bounds.contains(event.x, event.y)) {
                entity.children.forEach(function(child) {
                    if (child.options && child.options.constrain) {
                        child.pivot[this.axis] = child.pivot[this.axis] + event[this.delta[this.axis]];
                    }
                }.bind(this));
            }
        }.bind(this), false);
    },
    
    draw : function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this);
    }
});
