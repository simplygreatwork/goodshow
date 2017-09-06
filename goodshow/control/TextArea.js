
goodshow.TextArea = goodshow.entity.Graphics.extend({
	
	initialize: function(options) {
		
		options = Object.assign({
			text: '',
			background: 0xFFFFFF,
			foreground: 'black',
			font: '1.5em Roboto',
			fill: 'black',
		}, options || {});
		goodshow.entity.Graphics.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger : goodshow.arranger.Vertical(),
				children : [
					this.text = new PIXI.Text(options.text, {
						font: options.font,
						fill: options.foreground,
						wordWrap : true
					}, 2)
				]
			},
			mask : {}
		}, options || {}));
	},
	
	draw: function() {
		
		goodshow.entity.Graphics.prototype.draw.call(this);
		this.text.x = this.options.bounds.x;
		this.text.y = this.options.bounds.y;
		this.text.style.wordWrapWidth = this.options.bounds.width;
	}
});
