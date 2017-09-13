
goodshow.Panel = goodshow.entity.Graphics.extend({
	
	initialize: function(options) {
		
		options = options || {};
		if (options.arranger === undefined) {
			if (false) console.warn('Arranger was not specified.');
			options.arranger = new goodshow.arranger.Vertical();
		}
		if (options.background) {
			options.paint = options.paint || {
				painters : []
			};
			options.paint.painters.unshift(new goodshow.painter.Background({
				color : options.background
			}));
		}
		goodshow.entity.Graphics.prototype.initialize.call(this, options);
	},
	
	draw: function() {
		
		goodshow.entity.Graphics.prototype.draw.call(this);
		if ((this.options.constrain.extent.kind == 'inherit') && (this.options.constrain.extent.value === undefined)) {
			if (this.options.constrain.extent.inherited) {
				// need to account for padding?
				this.options.constrain.extent.value = this.options.constrain.extent.inherited;
				this.parent.options.contain.invalidate();
			}
		}
	}
});
