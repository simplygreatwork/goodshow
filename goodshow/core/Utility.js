
goodshow.Utility = {
	
	merge: function(options, object) {
		
		for (var property in options) {
			if (options.hasOwnProperty(property)) {
				object[property] = options[property];
			}
		}
	},
	
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
	
	outset: function() {
		
		
	},
	
	center: function(component) {
		
		var offset = {
			width: (component.parent.getLocalBounds().width - component.getLocalBounds().width) / 2,
			height: (component.parent.getLocalBounds().height - component.getLocalBounds().height) / 2,
		}
		component.x = component.x + offset.width;
		component.y = component.y + offset.height;
	},
	
	middle: function(component) {
		
		var offset = {
			// width: (component.parent.getLocalBounds().width - component.getLocalBounds().width) / 2,
			height: (component.parent.getLocalBounds().height - component.getLocalBounds().height) / 2,
		}
		// component.x = component.x + offset.width;
		component.y = component.y + offset.height;
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
	}
};
