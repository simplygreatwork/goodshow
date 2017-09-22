
goodshow.component.Select = goodshow.component.Root.extend({

	initialize: function(options) {

		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
			selected: false,
			foreground: 0xFFFFFF,
			background: 0x4444FF
		}, options || {}));
	},

	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		this.entity = entity;
		this.entity.interactive = true;
		this.entity.on('mousedown', function(event) {
			window.setTimeout(function() {
				goodshow.Broadcast.publish('select', {
					entity: this.entity
				});
			}.bind(this), 500);
		}.bind(this));
	},
	
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
	},
	
	select: function(selected) {
		
		this.selected = selected;
		if (this.selected) {
			this.entity.options.background.wrap(this.background);
			this.entity.options.foreground.wrap(this.foreground);
			this.entity.options.invoke.enabled.wrap(false);
		} else {
			this.entity.options.background.unwrap();
			this.entity.options.foreground.unwrap();
			this.entity.options.invoke.enabled.unwrap();
		}
		this.entity.draw();
	}
});
