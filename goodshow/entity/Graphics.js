
var components = [				// the ordering of these is so very important
	'bound',							// pertaining to masking, hover, select, etc: study
	'invoke',
	'contain',
	'paint',
	'mask',
	'constrain',
	'hover',
	'selection',					// ordering: mask issue with select, selection
	'select',
	'scroll',
	'ripple',
	'filter',
	'transform',
	'markup',
];

goodshow.entity.Graphics = Class.extend({
	
	initialize: function(options) {
		
		PIXI.Graphics.call(this);
		this.options = Object.assign({
			bounds: new PIXI.Rectangle(0, 0, 0, 0),
			alpha : 1,
			contain : {},
			constrain : {}
		}, options || {});
		this.resolve();
		this.options = this.proxy(this.options, this);
		if (this.options.alpha) {
			this.alpha = this.options.alpha;
		}
		this.install();
		this.on('removed', function() {
			this.removeChildren();
		});
	},
	
	resolve : function() {
		
		Object.keys(this.options).forEach(function(key) {
			if (this.options[key] !== null) {							// if an options has been reset to null, ignore
				if (components.indexOf(key) > -1) {
					var clazz = key.charAt(0).toUpperCase() + key.slice(1);
					var component = new goodshow.component[clazz](this.options[key]);
					this.options[key] = component.proxy(this);
				}
			}
		}.bind(this));
	},
	
	proxy : function(object, entity) {
		
		if (false) {
			return object;
		} else {
			if (window.Proxy) {
				return new Proxy(object, {
					set: function(target, name, value) {
						target[name] = value;								// todo: redraw only if the value changes
						if (entity.parent && entity.parent.draw) {			// review: why are these checks needed?
							entity.parent.draw();							// review: queue redraws
						} else if (entity.draw) {
							entity.draw();									// performance issues?
						};
						return true;
					}
				});
			} else {
				return object;
			}
		}
	},
	
	install : function() {
		
		components.forEach(function(component) {
			if (this.options[component]) this.options[component].install(this);
		}.bind(this));
	},
	
   uninstall : function(entity) {
		
		components.forEach(function(component) {
			if (this.options[component]) this.options[component].uninstall(this);
		}.bind(this));
   },
	
	draw: function() {
		
		this.clear();
		components.forEach(function(component) {
			if (this.options[component]) this.options[component].draw(this);
		}.bind(this));
	}
	
}, PIXI.Graphics);
