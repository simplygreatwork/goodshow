
goodshow.TextArea = goodshow.Component.extend({
	
	initialize: function(options) {
		
		this.masking = true;
		goodshow.Component.prototype.initialize.call(this);
		Object.assign(this.options, {
			text: '',
			background: 0xFFFFFF,
			foreground: 'black',
			font: '1.5em Roboto',
			fill: 'black',
		});
		Object.assign(this.options, options);
		this.text = new PIXI.Text(this.options.text, {
			font: this.options.font,
			fill: this.options.foreground,
			wordWrap : false
		}, 2);
		this.addChild(this.text);
		if (this.masking) {
			this.mask = new PIXI.Graphics();
			this.addChild(this.mask);
		}
	},
	
	draw: function() {
		
		goodshow.Broadcast.publish('component-will-draw', {
			component: this
		});
		this.clear();
		var rectangle = goodshow.Utility.inset(this.options.bounds, this.options.margin);
		this.drawRectangle(rectangle);
		this.text.x = this.getLocalBounds().x;
		this.text.y = this.getLocalBounds().y;
		this.text.style.wordWrap = true;
		this.text.style.wordWrapWidth = rectangle.width;
		this.text.dirty = true;
		this.text.filters = null;
		if (this.masking) {
			this.mask.clear();
			this.mask.beginFill(0xFFFFFF);
			this.mask.lineStyle(0, 0x000000);
			this.mask.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height, 1);
			this.text.mask = this.mask;
		}
	}
});
