
goodshow.Card = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background : 0x0000FF,
			contain : new goodshow.arranger.Stack(),
			constrain : {
				margin : {
					top : 20,
					bottom : 20,
					left : 20,
					right : 20
				}
			},
			children : [
				this.graphics = new goodshow.Panel({
					background : 0xFF0000,
					constrain : {
						margin : {
							top : 20,
							bottom : 20,
							left : 20,
							right : 20
						}
					},
				}),
				this.panel = new goodshow.Panel(Object.assign({
					background : 0x00FF00,
					constrain : {
						margin : {
							top : 20,
							bottom : 20,
							left : 20,
							right : 20
						}
					},
				}, options || {})),
			]
		}, options || {}));
	},
	
	draw: function() {
		
		goodshow.Panel.prototype.draw.call(this);
		this.graphics.clear();
		this.graphics.beginFill(0xFFFFFF);
		var rectangle = goodshow.Utility.inset(this.options.bounds, this.options.constrain.margin);
		rectangle = this.options.bounds;
		this.graphics.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
		this.graphics.filters = [Object.assign(new PIXI.filters.DropShadowFilter(), {
			color : 0x888888,
			alpha : 0.4,
			blur : 4,
			distance : 5
		})];
		this.panel.draw();
	}
});
