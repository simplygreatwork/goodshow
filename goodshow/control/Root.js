
goodshow.Root = goodshow.entity.Graphics.extend({
	
	initialize: function(options) {
      
		goodshow.entity.Graphics.prototype.initialize.call(this, options || {}));
	},
	
	install: function(entity) {
		
		goodshow.entity.Graphics.prototype.install.call(this, entity);
	},
	
	draw: function(entity) {
		
		goodshow.entity.Graphics.prototype.draw.call(this, entity);
	}
});
