
goodshow.component.Constrain = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            flex : 1,
            margin : {},
            padding : {}
        }, options || {}));
    },
    
    install : function(entity) {
        
        if (false) {
            if (this.extent !== undefined) {
                if (typeof this.extent == 'number') {
                    this.extent = {
                        kind : 'fixed',
                        value : this.extent
                    };
                } else if (typeof this.extent == 'string') {
                    if (this.extent == 'inherit') {
                        this.extent = {
                            kind : 'inherit'
                        };
                    } else if (this.extent == 'flex') {
                        this.extent = {
                            kind : 'flex',
                            value : 1
                        };
                    }
                }
            }
        }
		if (this.extent !== undefined) {
			delete this.flex;
		}
        if (false) this.extent = new goodshow.Extent(entity, this.extent);
		goodshow.component.Component.prototype.install.call(this, entity);
    },
    
    draw : function(entity) {
        
		goodshow.component.Component.prototype.draw.call(this, entity);
    }
});
