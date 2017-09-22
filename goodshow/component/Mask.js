
goodshow.component.Mask = goodshow.component.Root.extend({
    
    initialize : function(options) {
        
        goodshow.component.Root.prototype.initialize.call(this, Object.assign({
			painters : [
				new goodshow.painter.Background({
				    color : 0x000000
				})
			],
        }, options || {}));
    },
    
    install : function(entity) {
        
        goodshow.component.Root.prototype.install.call(this, entity);
        this.mask = new PIXI.Graphics();
        entity.addChild(this.mask);
    },
    
    proxy : function(entity) {
    	
    	return this;
    },
    
    draw : function(entity) {
        
        goodshow.component.Root.prototype.draw.call(this, entity);
        this.mask.clear();
        this.mask.bounds = {
            x : 0,
            y : 0,
            width : entity.options.bounds.width,
            height : entity.options.bounds.height
        };
        this.mask.options = {
            bounds : {
                x : 0,
                y : 0,
                width : entity.options.bounds.width,
                height : entity.options.bounds.height
            },
        };
		if (this.painters) {
			this.painters.forEach(function(painter) {
				painter.paint(this.mask);
			}.bind(this));
		}
    	entity.mask = this.mask;
    }
});
