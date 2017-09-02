
goodshow.Card = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, options);
		this.graphics = new PIXI.Graphics();
		this.addChild(this.graphics);
		this.panel = new goodshow.Panel(Object.assign({
			orientation: 'horizontal'
		}, options || {}));
		this.addChild(this.panel);
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
