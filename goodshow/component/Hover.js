goodshow.component.Hover = goodshow.component.Component.extend({

	initialize: function(options) {

		goodshow.component.Component.prototype.initialize.call(this, options);
	},

	install: function(entity) {

		if (entity.options.paint === undefined) {
			entity.options.paint = new goodshow.component.Paint({
				painters: []
			});
		}
		entity.options.paint.painters.push(this.painter = new goodshow.painter.Hover({
			color: 0x000000,
			alpha: 0
		}));
		entity.interactive = true;
		entity.on('mouseover', function(event) {
			this.painter.alpha = 0.1;
			entity.draw();
		}.bind(this));
		entity.on('mouseout', function(event) {
			this.painter.alpha = 0;
			entity.draw();
		}.bind(this));
	}
});
