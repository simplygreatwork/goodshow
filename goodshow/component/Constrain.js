goodshow.component.Constrain = goodshow.component.Component.extend({

    initialize: function(options) {

        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            extent: 'flex',
            margin: {},
            padding: {}
        }, options || {}));
    },
    
    install: function(entity) {
        
        if (this.extent !== undefined) {
            if (typeof this.extent === 'number') {
                this.extent = {
                    kind: 'fixed',
                    value: this.extent
                };
            }
            else if (typeof this.extent === 'string') {
                if (this.extent == 'flow') {
                    this.extent = {
                        kind: 'flow'
                    };
                }
                else if (this.extent === 'inherit') {
                    this.extent = {
                        kind: 'inherit'
                    };
                }
                else if (this.extent === 'flex') {
                    this.extent = {
                        kind: 'flex',
                        value: 1
                    };
                }
            }
        }
        if (false) this.extent = new goodshow.Extent(entity, this.extent);
        goodshow.component.Component.prototype.install.call(this, entity);
    },
    
    proxy : function(entity) {
        
        if ((entity) && (entity.options) && (entity.options.constrain) && (entity.options.constrain.extent)) {
            var extent = entity.options.constrain.extent;
            if (extent.kind == 'flow') {
                console.log('kind of flow');
        		delete extent.value;
            }
        }
        return entity.proxy(this, entity);
    },
    
    draw: function(entity) {

        goodshow.component.Component.prototype.draw.call(this, entity);
    }
});
