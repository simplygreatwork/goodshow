
goodshow.Component = Class.extend({
	
	initialize: function(options) {
		
		PIXI.Graphics.call(this);
		this.options = {
			bounds: new PIXI.Rectangle(0, 0, 0, 0),
			margin: {
				top: 0,
				left: 0,
				bottom: 0,
				right: 0
			},
			weight: 1,
			wrap: 3,
			spacing: 0,
			background: 0xFFFFFF,
			alpha: 1,
			dimensions: {
				width: 100,
				height: 100
			}
		};
		Object.assign(this.options, options);
		if (this.options.alpha) {
			this.alpha = this.options.alpha;
		}
	},
	
	draw: function() {
		
		this.clear();
		if (this.options.painters) {
			this.options.painters.forEach(function(painter) {
				painter.call(this, this);
			}.bind(this));
		}
	},
	
	drawRectangle: function(rectangle, corner) {
		
		if (corner) {
			this.drawRoundedRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height, corner);
		} else {
			this.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
		}
	}
	
}, PIXI.Graphics);
