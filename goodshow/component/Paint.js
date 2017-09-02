
goodshow.component.Paint = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, options);
    },
    
    install : function(entity) {
		
		
    },
    
    draw : function(entity) {
        
		if (this.painters) {
			this.painters.forEach(function(painter) {
				painter.paint(entity);
			}.bind(this));
		}
    }
});
