
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

goodshow.arranger.Planar2 = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
	},
	
	arrange: function(entity) {
		
		var padding = goodshow.Utility.validate(entity.options.constrain.padding);
		var counter = padding[this.direction.north];
		var extent = entity.options.bounds[this.extent.major] - (padding[this.direction.north] + padding[this.direction.south]);
		entity.children.forEach(function(child, index) {
			if (child.options && child.options.constrain) {
				if (child.options.constrain.extent.kind == 'fixed') {
					extent = extent - child.options.constrain.extent.value;
				} else if (child.options.constrain.extent.kind == 'inherit') {
					extent = extent - child.options.constrain.extent.value;
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
				if (child.options.constrain.extent.kind == 'fixed') {
					child.options.bounds[this.extent.major] = child.options.constrain.extent.value - (margin[this.direction.north] + margin[this.direction.south]);
					counter = counter + child.options.constrain.extent.value;
				} else if (child.options.constrain.extent.inherit == 'inherit') {
					child.options.bounds[this.extent.major] = child.options.constrain.extent.value - (margin[this.direction.north] + margin[this.direction.south]);
					counter = counter + child.options.constrain.extent.value;
				} else if (child.options.constrain.extent.inherit == 'flex') {
					child.options.bounds[this.extent.major] = (child.options.constrain.extent.value * subweight) - (margin[this.direction.north] + margin[this.direction.south]);
					counter = counter + margin[this.direction.north];
					counter = counter + child.options.bounds[this.extent.major];
					counter = counter + margin[this.direction.south];
				} else {
					console.warn('Constrain extent in arranger is missing "kind".');
				}
			}
		}.bind(this));
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

goodshow.arranger.Vertical = goodshow.arranger.Planar.extend({
	
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

goodshow.arranger.Stack = Class.extend({
	
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
