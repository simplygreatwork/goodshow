
goodshow.component.Selection = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            selection : []
        }, options || {}));
    },
    
    install : function(entity) {
        
        goodshow.component.Component.prototype.install.call(this);
        goodshow.Broadcast.subscribe('select', function(options) {
            this.selection.forEach(function(entity) {
                entity.options.select.select(false)
            });
            this.selection.splice(0, this.selection.length);
            this.selection.push(options.entity);
        }.bind(this));
        entity.draw();
    },
    
    draw : function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this);
    },
    
    clear : function() {
        
        
    }
});
