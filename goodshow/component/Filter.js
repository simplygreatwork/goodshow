goodshow.component.Filter = goodshow.component.Component.extend({

    initialize: function(options) {

        goodshow.component.Component.prototype.initialize.call(this, options);
    },

    install: function(entity) {

        if (this.filters && this.filters.length > 0) {
            entity.filters = this.filters;
        }
    }
});
