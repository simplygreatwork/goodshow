
goodshow.Button = goodshow.Component.extend({
	
	initialize: function(options) {
		
		goodshow.Component.prototype.initialize.call(this);
		goodshow.Utility.merge(options, this.options);
		this.draw();
	},
	
	draw: function() {
		
		if (this.options.background) this.beginFill(0x39AC39);
		if (this.options.foreground) this.lineStyle(5, 0x509550);
		if (this.options.painter) this.drawRectangle(new PIXI.Rectangle(0, 0, 100, 100), 20);
		this.drawRectangle(new PIXI.Rectangle(0, 0, 100, 100), 20);
	}
});
