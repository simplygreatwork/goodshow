
window.goodshow = window.goodshow || {};
goodshow.revealer = goodshow.revealer || {};

goodshow.revealer.Extent = Class.extend({
   
	initialize: function(options) {
		
		Object.assign(this, options);
	},
   
	reveal: function(entity, direction) {
		
		if (true) {
			if (direction == 'in') {
				goodshow.tween.extent({
					entity : entity,
					extent : 100
				});
			} else if (direction == 'out') {
				goodshow.tween.extent({
					entity : entity,
					extent : 0
				});
			}
		} else {
			if (direction == 'in') {
				entity.options.constrain.extent = {
					kind : 'fixed',
					value : 100
				};
			} else if (direction == 'out') {
				entity.options.constrain.extent = {
					kind : 'fixed',
					value : 0
				};
			}
		}
	}
});

goodshow.revealer.Pivot = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
	},
	
	reveal: function(entity, direction) {
		
		
	}
});

goodshow.revealer.Alpha = Class.extend({
   
	initialize: function(options) {
      
		Object.assign(this, options);
	},
   
	reveal: function(entity, direction) {
      
      
	}
});
