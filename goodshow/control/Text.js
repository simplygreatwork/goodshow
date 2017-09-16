goodshow.Text = goodshow.Component.extend({

	initialize: function(options) {

		goodshow.Component.prototype.initialize.call(this);
		Object.assign(this.options, {
			text: '',
			background: 0xFFFFFF,
			foreground: 'black',
			fontFamily: 'Roboto',
			fontSize: '20px',
			fill: 'black',
		});
		Object.assign(this.options, options);
		this.text = new PIXI.Text(this.options.text, {
			fontFamily: this.options.fontFamily,
			fontSize: this.options.fontSize,
			fill: this.options.foreground,
		}, 2);
		this.addChild(this.text);
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
		this.text.pivot.x = this.text.width / 2;
		this.text.pivot.y = this.text.height / 2;
		goodshow.Utility.middle(this.text);
	}
});
