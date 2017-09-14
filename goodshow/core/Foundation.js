goodshow.defaults = function(options) {

	goodshow.Broadcast.publish('entity-defaults', options || {});
	return options;
};

goodshow.enhance = function(options) {

	goodshow.Broadcast.publish('entity-enhance', options || {});
	return options;
};

goodshow.tween = {

	alpha: function(options) {

		var entity = options.entity;
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: {
				alpha: entity.alpha
			},
			to: {
				alpha: options.alpha
			},
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				entity.alpha = state.alpha;
			}.bind(this),
			finish: function() {
				console.log('Tweenable.finish');
			}
		}, options || {}));
	},

	position: function(options) {

		var entity = options.entity;
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: {
				x: entity.position.x,
				y: entity.position.y
			},
			to: {
				x: options.position.x,
				y: options.position.y
			},
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				console.log('Tweenable.step');
			}.bind(this),
			finish: function() {
				console.log('Tweenable.finish');
			}
		}, options || {}));
	},

	pivot: function(options) {

		var entity = options.entity;
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: {
				x: entity.pivot.x,
				y: entity.pivot.y
			},
			to: {
				x: options.pivot.x,
				y: options.pivot.y
			},
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				entity.pivot.x = state.x;
				entity.pivot.y = state.y;
			}.bind(this),
			finish: function() {
				console.log('Tweenable.finish');
			}
		}, options || {}));
	}
};
