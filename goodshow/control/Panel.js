
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
				color : options.background,
			}));
		}
		goodshow.entity.Graphics.prototype.initialize.call(this, options);
	}
});
