
goodshow.component.Constrain = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            flex : 1,
            margin : {},
            padding : {}
        }, options || {}));
    },
    
    install : function(entity) {
        
		if (this.width || this.height) {
			delete this.flex;
		}
    },
    
    draw : function(entity) {
        
        
    }
});
