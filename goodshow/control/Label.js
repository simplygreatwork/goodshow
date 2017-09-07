
goodshow.Label = goodshow.entity.Graphics.extend({
	
	initialize: function(options) {
		
		options = Object.assign({
			font : '20px Roboto',
			foreground : new goodshow.Value(0x000000),
			align : 'center'
		}, goodshow.enhance(options) || {});
		if (options.background) {
			options.paint = options.paint || {
				painters : []
			};
			options.paint.painters.unshift(new goodshow.painter.Background({
				color : options.background,
			}));
		}
		goodshow.entity.Graphics.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger : new goodshow.arranger.Vertical(),
				children : [
					this.text = new goodshow.entity.Text({
						text : options.text,
						font: options.font,
						fill: options.foreground,
						constrain : {
							flex : 1
						}
					})
				]
			}
		}, options || {}));
	},
	
	draw: function() {
		
		goodshow.entity.Graphics.prototype.draw.call(this);
		this.text.style.fill = this.options.foreground.valueOf();   	// shouldn't need to do this
		this.text.style = this.text.style;                      		// shouldn't need to do this
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
		} else if (this.options.align == 'right') {
			this.text.x = this.options.bounds.x + this.options.bounds.width;
			this.text.pivot.x = this.text.width;
			this.text.y = this.options.bounds.y + (this.options.bounds.height / 2);
			this.text.pivot.y = (this.text.height / 2);
		}
		if (this.options.pivot && this.options.pivot.x) {
			this.text.pivot.x = this.text.pivot.x + this.options.pivot.x;
		}
		if (this.options.pivot && this.options.pivot.y) {
			this.text.pivot.y = this.text.pivot.y + this.options.pivot.y;
		}
	}
});
