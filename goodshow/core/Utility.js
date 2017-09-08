
goodshow.Utility = {
	
	remove : function(array, element) {
		
		var index = array.indexOf(element);
		if (index > -1) {
		    array.splice(index, 1);
		}
	},
	
	validate : function(inset) {
		
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
	
	ancestor : function(component, clazz) {
		
		var result = null;
		while (component.parent) {
			if (component.parent instanceof clazz) {
				result = component.parent;
				break;
			} else {
				component = component.parent;
			}
		}
		
		return result;
	},
	
	related : function(lower, upper) {
		
		var result = false;
		while (lower.parent) {
			if (lower.parent == upper) {
				result = true;
				break;
			} else {
				lower = lower.parent;
			}
		}
		return result;
	},
	
	children : {
		
		first : function(entity) {
			
			var result = null;
			entity.children.forEach(function(child) {
				if (result === null) {
					if (child.options && child.options.constrain) {
						result = child;
					}
				}
			}.bind(this));
			return result;
		},
		
		last : function(entity) {
			
			var result = null;
			entity.children.forEach(function(child) {
				if (child.options && child.options.constrain) {
					result = child;
				}
			}.bind(this));
			return result;
		},
		
		iterate : function(entity, handler) {
			
			entity.children.forEach(function(child) {
				if (child.options && child.options.constrain) {
					handler.call(this, child);
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
				} catch (e) {
					options.callback(null);
				}
			}
		};
		request.open('GET', options.url, true);
		request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		request.send(null);
	}
};
