
var components = [
	'arrange',
	'contain',
	'constrain',
	'mask',
	'paint',
	'invoke',
	'filter',
	'ripple',
	'transform',
];

goodshow.entity.Graphics = Class.extend({
	
	initialize: function(options) {
		
		PIXI.Graphics.call(this);
		this.options = Object.assign({
			bounds: new PIXI.Rectangle(0, 0, 0, 0),
			alpha : 1,
			contain : {
				arranger : new goodshow.arranger.Vertical(),
				children : []
			},
			constrain : {
				flex : 1,
				padding : {},
				margin : {}
			}
		}, options);
		this.resolve(this.options);
		if (this.options.alpha) {
			this.alpha = this.options.alpha;
		}
		this.install();
	},
	
	resolve : function(options) {
		
		Object.keys(options).forEach(function(key) {
			if (components.indexOf(key) > -1) {
				var clazz = key.charAt(0).toUpperCase() + key.slice(1);
				options[key] = new goodshow.component[clazz](options[key]);
			}
		}.bind(this));
	},
	
	install : function() {						// be able to register additional component types
		
		this.clear();
		if (this.options.bound) this.options.bound.install(this);
		if (this.options.constrain) this.options.constrain.install(this);
		if (this.options.contain) this.options.contain.install(this);
		if (this.options.paint) this.options.paint.install(this);
		if (this.options.mask) this.options.mask.install(this);
		if (this.options.filter) this.options.filter.install(this);
		if (this.options.ripple) this.options.ripple.install(this);
		if (this.options.invoke) this.options.invoke.install(this);
		if (this.options.transform) this.options.transform.install(this);
	},
	
	draw: function() {
		
		goodshow.Broadcast.publish('entity-will-draw', {
			entity: this
		});
		this.clear();
		if (this.options.bound) this.options.bound.draw(this);
		if (this.options.constrain) this.options.constrain.draw(this);
		if (this.options.contain) this.options.contain.draw(this);
		if (this.options.paint) this.options.paint.draw(this);
		if (this.options.mask) this.options.mask.draw(this);
		if (this.options.filter) this.options.filter.draw(this);
		if (this.options.ripple) this.options.ripple.draw(this);
		if (this.options.invoke) this.options.invoke.draw(this);
		if (this.options.transform) this.options.transform.draw(this);
	}

}, PIXI.Graphics);
