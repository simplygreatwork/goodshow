goodshow.component.Ripple = goodshow.component.Component.extend({

	initialize: function(options) {

		goodshow.component.Component.prototype.initialize.call(this, Object.assign({
			maximum: 10,
			events: [],
			color: 0x999999
		}, options || {}));
	},

	install: function(entity) {

		if (entity.options.paint === undefined) {
			entity.options.paint = new goodshow.component.Paint({
				painters: []
			});
		}
		entity.options.paint.painters.push(new goodshow.painter.Ripple({
			color: this.color
		}));
		entity.interactive = true;
		entity.on('mousedown', function(event) {
			var timeStamp = event.data.originalEvent.timeStamp; // unexpected behavior
			timeStamp = Date.now();
			this.events.push({
				timeStamp: timeStamp,
				position: JSON.parse(JSON.stringify(event.data.getLocalPosition(entity)))
			});
			if (this.events.length > 5) {
				this.events.splice(0, this.events.length - 5);
			}
			if (this.interval === undefined) {
				this.interval = window.setInterval(function() {
					entity.draw(); // review: using requestAnimFrame instead
				}.bind(this), 1); // also need to stop interval when empty
			}
			if (this.timeout) {
				window.clearTimeout(this.timeout);
			}
			this.timeout = window.setTimeout(function() {
				if (this.interval) {
					window.clearInterval(this.interval);
					delete this.interval;
				}
			}.bind(this), 1000);
		}.bind(this));
	}
});
