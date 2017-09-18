goodshow.entity.Text = Class.extend({

	initialize: function(options) {
		
		delete options.font;
		this.options = Object.assign({
			bounds: new PIXI.Rectangle(0, 0, 0, 0),
			text: '',
			background: 0xFFFFFF,
			foreground: 'black',
			fontFamily: 'Roboto',
			fontSize: '20px',
			fill: 'black',
			constrain: {}
		}, goodshow.enhance(options) || {});
		PIXI.Text.call(this, this.options.text, this.options);
		this.resolve(this.options);
		this.install(this.options);
	},

	resolve: function() {

		Object.keys(this.options).forEach(function(key) {
			if (components.indexOf(key) > -1) {
				var clazz = key.charAt(0).toUpperCase() + key.slice(1);
				this.options[key] = new goodshow.component[clazz](this.options[key]);
			}
		}.bind(this));
	},

	install: function() {

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
		
		if (this.options.bound) this.options.bound.draw(this);
		if (this.options.constrain) this.options.constrain.draw(this);
		if (this.options.contain) this.options.contain.draw(this);
		if (this.options.paint) this.options.paint.draw(this);
		if (this.options.mask) this.options.mask.draw(this);
		if (this.options.filter) this.options.filter.draw(this);
		if (this.options.ripple) this.options.ripple.draw(this);
		if (this.options.invoke) this.options.invoke.draw(this);
		if (this.options.transform) this.options.transform.draw(this);
		
		if (this.options.pivot && this.options.pivot.x) {
			this.pivot.x = this.pivot.x + this.options.pivot.x;
		}
		if (this.options.pivot && this.options.pivot.y) {
			this.pivot.y = this.pivot.y + this.options.pivot.y;
		}
	}

}, PIXI.Text);
