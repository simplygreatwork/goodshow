
goodshow.component.Filter = goodshow.component.Root.extend({

    initialize: function(options) {
        
        goodshow.component.Root.prototype.initialize.call(this, options);
    },

    install: function(entity) {
        
        goodshow.component.Root.prototype.install.call(this, entity);
        if (this.filters && this.filters.length > 0) {
            entity.filters = this.filters;
        }
    },
    
    draw: function(entity) {
        
        goodshow.component.Root.prototype.draw.call(this, entity);
    }
});
