
goodshow.Floater = goodshow.Label.extend({
	
	initialize: function(options) {
		
		goodshow.Label.prototype.initialize.call(this, Object.assign({
			foreground: 0x000000,
			background: 0xDDDDDD,
			paint : {
				painters : [
					this.painter = new goodshow.painter.Circular({
						color : options.background,
					}),
					new goodshow.painter.Ripple({
						color : 0xFFFFFF
					})
				]
			},
			mask : {
				painters : [
					this.painter
				],
			},
			ripple : {
				maximum : 10
			}
		}, options || {}));
		this.filters = [Object.assign(new PIXI.filters.DropShadowFilter(), {
			color : 0x888888,
			alpha : 0.4,
			blur : 4,
			distance : 5
		})];
	}
});
