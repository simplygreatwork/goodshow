
goodshow.arranger = {};

goodshow.arranger.Horizontal = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		var majorAxis = 'x';
		var minorAxis = 'y';
		var majorExtent = 'width';
		var minorExtent = 'height';
		var padding = goodshow.Utility.validate(entity.options.constrain.padding);
		var counter = padding.left;
		var extent = entity.options.bounds[majorExtent] - (padding.left + padding.right);
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				if (child.options.constrain[majorExtent]) {
					extent = extent - child.options.constrain[majorExtent];
				}
			}
		}.bind(this));
		var weight = this.getFullWeight(entity);
		var subweight = extent / weight;
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				var margin = goodshow.Utility.validate(child.options.constrain.margin);
				child.options.bounds[minorAxis] = entity.options.bounds[minorAxis]  + padding.top + margin.top;
				child.options.bounds[majorAxis] = entity.options.bounds[majorAxis] + counter + margin.left;
				child.options.bounds[minorExtent] = entity.options.bounds[minorExtent] - ((padding.top + padding.bottom) + (margin.top + margin.bottom));
				var delta = child.options.constrain.flex * subweight;
				counter = counter + margin.left;
				if (child.options.constrain[majorExtent]) {
					child.options.bounds[majorExtent] = child.options.constrain[majorExtent] - (margin.top + margin.bottom);
					counter = counter + child.options.bounds[majorExtent];
				}
				else {
					child.options.bounds[majorExtent] = delta - (margin.left + margin.right);
					counter = counter + child.options.bounds[majorExtent];
				}
				counter = counter + margin.right;
			}
		}.bind(this));
	},
	
	getFullWeight: function(entity) {
		
		var result = 0;
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				if (child.options.constrain.width || child.options.constrain.height) {
					result = result + 0;
				} else {
					result = result + child.options.constrain.flex;
				}
			}
		}.bind(this));
		return result;
	}
});

goodshow.arranger.Vertical = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		var majorAxis = 'y';
		var minorAxis = 'x';
		var majorExtent = 'height';
		var minorExtent = 'width';
		var padding = goodshow.Utility.validate(entity.options.constrain.padding);
		var counter = padding.top;
		var extent = entity.options.bounds[majorExtent] - (padding.top + padding.bottom);
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				if (child.options.constrain[majorExtent]) {
					extent = extent - child.options.constrain[majorExtent];
				}
			}
		}.bind(this));
		var weight = this.getFullWeight(entity);
		var subweight = extent / weight;
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				var margin = goodshow.Utility.validate(child.options.constrain.margin);
				var padding = goodshow.Utility.validate(entity.options.constrain.padding);
				child.options.bounds[minorAxis] = entity.options.bounds[minorAxis] + padding.left + margin.left;
				child.options.bounds[majorAxis] = entity.options.bounds[majorAxis] + counter + margin.top;
				child.options.bounds[minorExtent] = entity.options.bounds[minorExtent] - ((padding.left + padding.right) + (margin.left + margin.right));
				var delta = child.options.constrain.flex * subweight;
				counter = counter + margin.top;
				if (child.options.constrain[majorExtent]) {
					child.options.bounds[majorExtent] = child.options.constrain[majorExtent] - (margin.top + margin.bottom);
					counter = counter + child.options.constrain[majorExtent];
				}
				else {
					child.options.bounds[majorExtent] = delta - (margin.top + margin.bottom);
					counter = counter + child.options.bounds[majorExtent];
				}
				counter = counter + margin.bottom;
			}
		}.bind(this));
	},
	
	getFullWeight: function(entity) {
		
		var result = 0;
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				if (child.options.constrain.width || child.options.constrain.height) {
					result = result + 0;
				} else {
					result = result + child.options.constrain.flex;
				}
			}
		}.bind(this));
		return result;
	}
});

goodshow.arranger.Stack = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		var majorAxis = 'y';
		var minorAxis = 'x';
		var majorExtent = 'height';
		var minorExtent = 'width';
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				child.options.bounds[minorAxis] = entity.options.bounds[minorAxis];
				child.options.bounds[majorAxis] = entity.options.bounds[majorAxis];
				child.options.bounds[minorExtent] = entity.options.bounds[minorExtent];
				child.options.bounds[majorExtent] = entity.options.bounds[majorExtent];
			}
		}.bind(this));
	}
});

goodshow.arranger.Center = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		
	}
});

goodshow.arranger.Align = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		
	}
});

goodshow.arranger.Polar = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		
	}
});
