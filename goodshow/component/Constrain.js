
goodshow.component.Constrain = goodshow.component.Root.extend({

    initialize: function(options) {
        
        goodshow.component.Root.prototype.initialize.call(this, Object.assign({
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
        goodshow.component.Root.prototype.install.call(this, entity);
    },
    
    draw: function(entity) {
        
        goodshow.component.Root.prototype.draw.call(this, entity);
    }
});
