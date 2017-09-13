
goodshow.TextArea = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		options = Object.assign({
			text: '',
			background: 0xFFFFFF,
			foreground: 'black',
			font: '1.5em Roboto',
			fill: 'black',
		}, options || {});
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger : new goodshow.arranger.Stack(),
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
		
		goodshow.Panel.prototype.draw.call(this);
		this.text.x = this.options.bounds.x;
		this.text.y = this.options.bounds.y;
		this.text.style.wordWrapWidth = this.options.bounds.width;
		if ((this.options.constrain.extent.kind == 'flow') && (this.options.constrain.extent.value === undefined)) {
			this.options.constrain.extent.value = this.text.height + this.options.constrain.margin.top + this.options.constrain.margin.bottom;
			this.parent.options.contain.invalidate();
			this.text.style = this.text.style;
		}
	}
});
