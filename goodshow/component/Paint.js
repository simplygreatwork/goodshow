
goodshow.component.Paint = goodshow.component.Root.extend({
    
    initialize: function(options) {
        
        goodshow.component.Root.prototype.initialize.call(this, options);
    },

    install: function(entity) {

        goodshow.component.Root.prototype.install.call(this, entity);
    },

    draw: function(entity) {

        goodshow.component.Root.prototype.draw.call(this, entity);
        if (this.painters) {
            this.painters.forEach(function(painter) {
                if ((painter.visible === undefined) || (painter.visible)) painter.paint(entity);
            }.bind(this));
        }
    }
});
