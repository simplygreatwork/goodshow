goodshow.Utility = {

	assign: function(to, from) {

		Object.keys(from).forEach(function(key) {
			if (to.hasOwnProperty(key)) {
				from[key].__prior = to[key];
			}
		});
		return Object.assign(to, from);
	},

	remove: function(array, element) {

		var index = array.indexOf(element);
		if (index > -1) {
			array.splice(index, 1);
		}
	},

	validate: function(inset) {

		inset = inset || {};
		inset.top = inset.top || 0;
		inset.bottom = inset.bottom || 0;
		inset.left = inset.left || 0;
		inset.right = inset.right || 0;
		return inset;
	},

	inset: function(rectangle, margin) {

		margin = goodshow.Utility.validate(margin);
		rectangle.x = rectangle.x + margin.left;
		rectangle.y = rectangle.y + margin.top;
		rectangle.width = rectangle.width - (margin.left + margin.right);
		rectangle.height = rectangle.height - (margin.top + margin.bottom);

		return rectangle;
	},

	random: function(begin, end) {

		return begin + Math.floor(Math.random() * (end - begin));
	},

	ancestor: function(entity, clazz) {
		
		var result = null;
		while (entity.parent) {
			if (entity.parent instanceof clazz) {
				result = entity.parent;
				break;
			}
			else {
				component = entity.parent;
			}
		}
		
		return result;
	},
	
	hasAncestor: function(entity, ancestor) {
		
		var result = null;
		while (entity.parent) {
			if (entity.parent == ancestor) {
				result = ancestor;
				break;
			}
			else {
				entity = entity.parent;
			}
		}
		
		return result;
	},
	
	related: function(lower, upper) {

		var result = false;
		while (lower.parent) {
			if (lower.parent == upper) {
				result = true;
				break;
			}
			else {
				lower = lower.parent;
			}
		}
		return result;
	},

	children: {

		first: function(entity) {

			var i;
			for (i = 0; i < entity.children.length; i++) {
				var child = entity.children[i];
				if (child.options && child.options.constrain) {
					return child;
					break;
				}
			}
		},

		last: function(entity) {

			var i;
			for (i = entity.children.length - 1; i >= 0; i--) {
				var child = entity.children[i];
				if (child.options && child.options.constrain) {
					return child;
					break;
				}
			}
		},
		
		iterate: function(entity, handler) {
			
			entity.children.forEach(function(child) {
				if (child.options && child.options.constrain) {
					handler.call(this, child);
				}
			}.bind(this));
		},
		
		remove : function(entity) {
			
			entity.children.forEach(function(child) {
				if (child.options.constrain) {
					entity.removeChild(child);
				}
			}.bind(this));
		}
	},
	
	loadText: function(options) {

		var request = new XMLHttpRequest();
		request.onreadystatechange = function() {
			var DONE = this.DONE || 4;
			if (this.readyState === DONE) {
				try {
					options.callback(request.responseText);
				}
				catch (e) {
					options.callback(null);
				}
			}
		};
		request.open('GET', options.url, true);
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		request.send(null);
	}
};
