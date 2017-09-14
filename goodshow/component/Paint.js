goodshow.component.Paint = goodshow.component.Component.extend({

    initialize: function(options) {

        goodshow.component.Component.prototype.initialize.call(this, options);
    },

    install: function(entity) {

        goodshow.component.Component.prototype.install.call(this, entity);
    },

    draw: function(entity) {

        goodshow.component.Component.prototype.draw.call(this, entity);
        if (this.painters) {
            this.painters.forEach(function(painter) {
                if ((painter.visible === undefined) || (painter.visible)) painter.paint(entity);
            }.bind(this));
        }
    }
});
