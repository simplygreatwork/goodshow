
goodshow.Button = goodshow.Label.extend({
	
	initialize: function(options) {
		
		goodshow.Label.prototype.initialize.call(this, Object.assign({}, options));
	},
	
	draw: function() {
		
		goodshow.Label.prototype.draw.call(this);
	}
});
