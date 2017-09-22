
window.goodshow = window.goodshow || {};
goodshow.arranger = goodshow.arranger || {};

goodshow.arranger.Planar = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
	},
	
	arrange: function(entity) {
		
		var padding = goodshow.Utility.validate(entity.options.constrain.padding);
		var counter = padding[this.direction.north];
		var extent = entity.options.bounds[this.extent.major] - (padding[this.direction.north] + padding[this.direction.south]);
		entity.children.forEach(function(child, index) {
			if (child.options && child.options.constrain) {
				var kind = child.options.constrain.extent.kind;
				if ((kind !== undefined) && goodshow.arranger.Extent[kind] !== undefined) {
					extent = goodshow.arranger.Extent[kind].reserve(child, extent);
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
				var kind = child.options.constrain.extent.kind;
				if ((kind !== undefined) && goodshow.arranger.Extent[kind] !== undefined) {
					counter = goodshow.arranger.Extent[kind].apply(child, margin, this.extent, this.direction, counter, subweight);
				} else {
					console.warn('Constrain extent in arranger is missing property "kind".');
				}
				child.position[this.axis.major] = child.options.bounds[this.axis.major] - child.parent.options.bounds[this.axis.major];
				child.position[this.axis.minor] = child.options.bounds[this.axis.minor] - child.parent.options.bounds[this.axis.minor];
			}
		}.bind(this));
		if (entity.options.constrain.extent.kind == 'inherit') {
			counter = counter + entity.options.constrain.padding[this.direction.north];
			counter = counter + entity.options.constrain.padding[this.direction.south];
			entity.options.constrain.extent.inherited = counter;
		}
	},
	
	getFullWeight: function(entity) {

		var result = 0;
		entity.children.forEach(function(child, index) {
			if (child.visible && child.options && child.options.constrain) {
				var constrain = child.options.constrain;
				if (constrain.extent && constrain.extent.kind == 'flex') {
					result = result + constrain.extent.value;
				}
			}
		}.bind(this));
		return result;
	}
});

goodshow.arranger.Horizontal = goodshow.arranger.Planar.extend({
	
	initialize: function(options) {
		
		goodshow.arranger.Planar.prototype.initialize.call(this, {
			axis: {
				major: 'x',
				minor: 'y'
			},
			extent: {
				major: 'width',
				minor: 'height'
			},
			direction: {
				north: 'left',
				south: 'right',
				west: 'bottom',
				east: 'top'
			}
		});
	}
});

goodshow.arranger.Vertical = goodshow.arranger.Planar.extend({

	initialize: function(options) {

		goodshow.arranger.Planar.prototype.initialize.call(this, {
			axis: {
				major: 'y',
				minor: 'x'
			},
			extent: {
				major: 'height',
				minor: 'width'
			},
			direction: {
				north: 'top',
				south: 'bottom',
				west: 'left',
				east: 'right'
			}
		});
	}
});

goodshow.arranger.Extent = {
	
	fixed : {
		
		reserve : function(child, extent) {
			
			return extent - child.options.constrain.extent.value;
		},
		
		apply : function(child, margin, extent, direction, counter) {
			
			child.options.bounds[extent.major] = child.options.constrain.extent.value - (margin[direction.north] + margin[direction.south]);
			return counter + child.options.constrain.extent.value;
		}
	},
	
	flow : {
		
		reserve : function(child, extent) {
			
			return extent;
		},
		
		apply : function(child, margin, extent, direction, counter) {
			
			child.options.bounds[extent.major] = child.options.constrain.extent.value - (margin[direction.north] + margin[direction.south]);
			return counter + child.options.constrain.extent.value;
		}
	},
	
	inherit : {
		
		reserve : function(child, extent) {
			
			return extent - child.options.constrain.extent.value;
		},
		
		apply : function(child, margin, extent, direction, counter) {
			
			child.options.bounds[extent.major] = child.options.constrain.extent.value - (margin[direction.north] + margin[direction.south]);
			return counter + child.options.constrain.extent.value;
		}
	},
	
	flex : {
		
		reserve : function(child, extent) {
			
			return extent;
		},
		
		apply : function(child, margin, extent, direction, counter, subweight) {
			
			child.options.bounds[extent.major] = (child.options.constrain.extent.value * subweight) - (margin[direction.north] + margin[direction.south]);
			counter = counter + margin[direction.north];
			counter = counter + child.options.bounds[extent.major];
			counter = counter + margin[direction.south];
			return counter;
		}
	}
};

goodshow.arranger.Stack = Class.extend({

	initialize: function(options) {},

	arrange: function(entity) {
		
		entity.children.forEach(function(child, index) {
			if (child.options && child.options.constrain) {
				child.options.bounds['x'] = entity.options.bounds['x'];
				child.options.bounds['y'] = entity.options.bounds['y'];
				child.options.bounds['width'] = entity.options.bounds['width'];
				child.options.bounds['height'] = entity.options.bounds['height'];
				child.position.x = child.options.bounds['x'] - child.parent.options.bounds['x'];
				child.position.y = child.options.bounds['y'] - child.parent.options.bounds['y'];
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

goodshow.Extent = Class.extend({				// not actually currently in use
														// extent is currently managed entirely by Constrain & Arranger without wrapping
	initialize: function(options) {
		
		Object.assign(this, options || {});
	},
	
	wrap : function(extent) {
		
		this.wrapped = extent;
	},
	
	unwrap : function() {
		
		delete this.wrapped;
	},
	
	valueOf: function() {
		
		if (this.wrapped !== undefined) {
			return this.wrapped;
		} else {
			return this;
		}
	}
});
