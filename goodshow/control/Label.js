
goodshow.Label = goodshow.entity.Graphics.extend({
	
	initialize: function(options) {
		
		options.font = options.font || '20px Roboto';
		options.foreground = options.foreground || 0x000000;
		options.align = options.align || 'center';
		goodshow.entity.Graphics.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger : new goodshow.arranger.Vertical(),
				children : [
					this.text = new PIXI.Text(options.text, {
						font: options.font,
						fill: options.foreground,
					}, 2)
				]
			}
		}, options));
	},
	
	draw: function() {
		
		goodshow.entity.Graphics.prototype.draw.call(this);
		if (this.options.align == 'center') {
			this.text.x = this.options.bounds.x + (this.options.bounds.width / 2);
			this.text.pivot.x = this.text.width / 2;
			this.text.y = this.options.bounds.y + (this.options.bounds.height / 2);
			this.text.pivot.y = (this.text.height / 2);
		} else if (this.options.align == 'left') {
			this.text.x = this.options.bounds.x;
			this.text.pivot.x = 0;
			this.text.y = this.options.bounds.y + (this.options.bounds.height / 2);
			this.text.pivot.y = (this.text.height / 2);
		}
		if (this.options.pivot && this.options.pivot.x) {
			this.text.pivot.x = this.text.pivot.x + this.options.pivot.x;
		}
		if (this.options.pivot && this.options.pivot.y) {
			this.text.pivot.y = this.text.pivot.y + this.options.pivot.y;
		}
		goodshow.entity.Graphics.prototype.draw.call(this);
	}
});
