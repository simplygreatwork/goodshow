
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
		
		options = Object.assign({
			from : {
				alpha : options.entity.alpha
			}
		}, options || {});
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: options.from,
			to: options.to,
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				options.entity.alpha = state.alpha;
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
			}
		}, options || {}));
	},
	
	pivot: function(options) {
		
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: options.from,
			to: options.to,
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				options.entity.pivot.x = state.x;
				options.entity.pivot.y = state.y;
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
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
				if (false) console.log('Tweenable.step');
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
			}
		}, options || {}));
	},

	extent: function(options) {
		
		var entity = options.entity;
		var tweenable = new Tweenable();
		tweenable.tween(Object.assign({
			from: {
				extent : entity.options.constrain.extent.value
			},
			to: {
				extent : options.extent
			},
			duration: 300,
			easing: 'easeInOutCubic',
			step: function(state) {
				entity.options.constrain.extent.value = state.extent;
				entity.options.constrain.extent = entity.options.constrain.extent;
			}.bind(this),
			finish: function() {
				if (false) console.log('Tweenable.finish');
			}
		}, options || {}));
	}
};
