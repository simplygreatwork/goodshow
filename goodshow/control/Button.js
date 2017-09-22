
goodshow.Button = goodshow.Label.extend({
	
	initialize: function(options) {

		goodshow.Label.prototype.initialize.call(this, Object.assign({
			hover: {},
			mask: {},
			ripple: {
				color: 0x999999,
				maximum: 10
			}
		}, options || {}));
	},
	
	install: function(entity) {
		
		goodshow.Label.prototype.install.call(this, entity);
	},
	
	draw: function(entity) {
		
		goodshow.Label.prototype.draw.call(this, entity);
	}
});
