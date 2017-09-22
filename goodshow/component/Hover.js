
goodshow.component.Hover = goodshow.component.Root.extend({

	initialize: function(options) {

		goodshow.component.Root.prototype.initialize.call(this, options);
	},

	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
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
	},
	
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
	}
});
