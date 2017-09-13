
window.goodshow = window.goodshow || {};
goodshow.arrange = goodshow.arrange || {};

goodshow.arrange.Planar = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
	},
	
	arrange: function(entity) {
		
		var padding = goodshow.Utility.validate(entity.options.constrain.padding);
		var counter = padding[this.direction.north];
		var extent = entity.options.bounds[this.extent.major] - (padding[this.direction.north] + padding[this.direction.south]);
		entity.children.forEach(function(child, index) {
			if (child.options && child.options.constrain) {
				if (child.options.constrain.extent !== undefined) {
					extent = extent - child.options.constrain.extent;
				}
			}
		}.bind(this));
		var weight = this.getFullWeight(entity);
		var subweight = extent / weight;
		entity.children.forEach(function(child, index) {
			if (child.options && child.options.constrain) {
				var margin = goodshow.Utility.validate(child.options.constrain.margin);
				child.options.bounds[this.axis.minor] = entity.options.bounds[this.axis.minor] + padding[this.direction.west] + margin[this.direction.west];
				child.options.bounds[this.axis.major] = entity.options.bounds[this.axis.major] + counter + margin[this.direction.north];
				child.options.bounds[this.extent.minor] = entity.options.bounds[this.extent.minor] - ((padding[this.direction.west] + padding[this.direction.east]) + (margin[this.direction.west] + margin[this.direction.east]));
				if (child.options.constrain.extent !== undefined) {
					child.options.bounds[this.extent.major] = child.options.constrain.extent - (margin[this.direction.north] + margin[this.direction.south]);
					counter = counter + child.options.constrain.extent;
				}
				else {
					child.options.bounds[this.extent.major] = (child.options.constrain.flex * subweight) - (margin[this.direction.north] + margin[this.direction.south]);
					counter = counter + margin[this.direction.north];
					counter = counter + child.options.bounds[this.extent.major];
					counter = counter + margin[this.direction.south];
				}
			}
		}.bind(this));
	},
	
	getFullWeight: function(entity) {
		
		var result = 0;
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain && child.options.constrain.flex) {
				var constrain = child.options.constrain;
				result = result + constrain.flex;
			}
		}.bind(this));
		return result;
	}
});

goodshow.arrange.Horizontal = goodshow.arrange.Planar.extend({
	
	initialize: function(options) {
		
		goodshow.arranger.Planar.prototype.initialize.call(this, {
			axis : {
				major : 'x',
				minor : 'y'
			},
			extent : {
				major : 'width',
				minor : 'height'
			},
			direction : {
				north : 'left',
				south : 'right',
				west : 'bottom',
				east : 'top'
			}
		});
	}
});

goodshow.arrange.Vertical = goodshow.arrange.Planar.extend({
	
	initialize: function(options) {
		
		goodshow.arranger.Planar.prototype.initialize.call(this, {
			axis : {
				major : 'y',
				minor : 'x'
			},
			extent : {
				major : 'height',
				minor : 'width'
			},
			direction : {
				north : 'top',
				south : 'bottom',
				west : 'left',
				east : 'right'
			}
		});
	}
});

goodshow.arrange.Stack = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		entity.children.forEach(function(child, index) {
			if (child.options && child.options.constrain) {
				child.options.bounds['x'] = entity.options.bounds['x'];
				child.options.bounds['y'] = entity.options.bounds['y'];
				child.options.bounds['width'] = entity.options.bounds['width'];
				child.options.bounds['height'] = entity.options.bounds['height'];
			}
		}.bind(this));
	}
});

goodshow.arrange.Center = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		
	}
});

goodshow.arrange.Align = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		
	}
});

goodshow.arrange.Polar = Class.extend({
	
	initialize: function(options) {},
	
	arrange: function(entity) {
		
		
	}
});

goodshow.Extent = Class.extend({
	
	initialize: function(entity, value) {
		
		this.entity = entity;
		this.value = value;
	},
	
	valueOf : function() {
		
		var extent = 0;
		if (this.value) {
			return this.value;
		} else {
			this.entity.children.forEach(function(child) {
				
			}.bind(this));
			return 0;
		}
	}
});
