
goodshow.List = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFFFFF,
			contain : {
				arranger : new goodshow.arranger.Vertical(),
				children : []
			},
			scroll : {},
			mask : {
				painters : [
					new goodshow.painter.Background({
						color : 0xFFFFFF
					})
				]
			},
			selection : {}
		}, options || {}));
	},
	
	draw : function() {
		
	    goodshow.Panel.prototype.draw.call(this);
	}
});
