
goodshow.component.Contain = goodshow.component.Component.extend({
    
    initialize : function(options) {
		
		goodshow.component.Component.prototype.initialize.call(this, options);
    },
    
    install : function(entity) {
		
		entity.removeChildren();
		this.children = this.children || [];
		this.children.forEach(function(child, index) {
			entity.addChild(child);
		}.bind(this));
    },
	
    draw : function(entity) {
		
		if (this.arranger) {
			this.arranger.arrange(entity);
		}
		entity.children.forEach(function(child, index) {
			if (child.draw) {
				child.draw();
			}
		}.bind(this));
    }
});
