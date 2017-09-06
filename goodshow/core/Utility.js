
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
		
		margin.top = margin.top || 0;
		margin.bottom = margin.bottom || 0;
		margin.left = margin.left || 0;
		margin.right = margin.right || 0;
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
