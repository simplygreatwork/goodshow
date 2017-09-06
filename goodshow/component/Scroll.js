
goodshow.component.Scroll = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            axis : 'y',
            bounds : [0, 0]
        }, options || {}));
    },
    
    install : function(entity) {
        
        goodshow.component.Component.prototype.install.call(this);
        var delta = (this.axis == 'y') ? 'deltaY' : 'deltaX';
        document.addEventListener('mousewheel', function(event) {
            if (entity.options.bounds.contains(event.x, event.y)) {
                entity.children.forEach(function(child) {
                    if (child.options && child.options.constrain) {
                        child.pivot[this.axis] = child.pivot[this.axis] + event[delta];
                    }
                }.bind(this));
            }
        }.bind(this), false);
    },
    
    draw : function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this);
    }
});
