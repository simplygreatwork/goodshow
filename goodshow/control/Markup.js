
goodshow.Markup = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFFFFF,
			contain: {
				arranger: new goodshow.arranger.Vertical(),
				children: []
			},
			markup: {
				url : options.url || null,
				clip : options.clip || null
			}
		}, options || {}));
	},
	
	draw: function() {
		
		goodshow.Panel.prototype.draw.call(this);
	}
});
