goodshow.component.Markup = goodshow.component.Root.extend({

	initialize: function(options) {

		goodshow.component.Root.prototype.initialize.call(this, Object.assign({

		}, options || {}));
	},

	install: function(entity) {

		goodshow.component.Root.prototype.install.call(this, entity);
		this.element = document.createElement('div');
		this.element.className = 'element';
		this.element.style.display = 'none';
		document.body.appendChild(this.element);
		goodshow.Utility.loadText({
			url: '../assets/templates/index.html',
			callback: function(html) {
				this.element.innerHTML = html;
			}.bind(this)
		});
		entity.on('removed', function() {
			this.element.style.display = 'none';
		}.bind(this));
	},

	draw: function(entity) {

		goodshow.component.Root.prototype.draw.call(this, entity);
		Object.assign(this.element.style, {
			top: entity.options.bounds.y,
			left: entity.options.bounds.x,
			width: entity.options.bounds.width,
			height: entity.options.bounds.height
		});
	}
});
