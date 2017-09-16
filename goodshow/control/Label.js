goodshow.Label = goodshow.entity.Graphics.extend({

	initialize: function(options) {
		
		options = Object.assign({
			fontFamily: 'Roboto',
			fontSize: '20px',
			foreground: new goodshow.Value(0x000000),
			align: 'center'
		}, goodshow.enhance(options) || {});
		if (options.background) {
			options.paint = options.paint || {
				painters: []
			};
			options.paint.painters.unshift(new goodshow.painter.Background({
				color: options.background,
			}));
		}
		goodshow.entity.Graphics.prototype.initialize.call(this, Object.assign({
			contain: {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					this.text = new goodshow.entity.Text({
						text: options.text,
						fontFamily: options.fontFamily,
						fontSize: options.fontSize,
						fill: options.foreground,
						constrain: {
							extent: 'flex'
						}
					})
				]
			}
		}, options || {}));
	},

	draw: function() {

		goodshow.entity.Graphics.prototype.draw.call(this);
		this.text.style.fill = this.options.foreground.valueOf(); // shouldn't need to do this
		this.text.style = this.text.style; // shouldn't need to do this
		if (this.options.align == 'center') {
			this.text.x = this.options.bounds.x + (this.options.bounds.width / 2);
			this.text.pivot.x = this.text.width / 2;
			this.text.y = this.options.bounds.y + (this.options.bounds.height / 2);
			this.text.pivot.y = (this.text.height / 2);
		}
		else if (this.options.align == 'left') {
			this.text.x = this.options.bounds.x;
			this.text.pivot.x = 0;
			this.text.y = this.options.bounds.y + (this.options.bounds.height / 2);
			this.text.pivot.y = (this.text.height / 2);
		}
		else if (this.options.align == 'right') {
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
		if ((this.options.constrain.extent.kind == 'flow') && (this.options.constrain.extent.value === undefined)) {
			this.options.constrain.extent.value = this.text.height + this.options.constrain.margin.top + this.options.constrain.margin.bottom + this.options.constrain.padding.top + this.options.constrain.padding.bottom;;
			this.parent.options.contain.invalidate();
			this.text.style = this.text.style;
		}
	}
});
