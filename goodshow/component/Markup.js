
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
		this.element.style.clip = this.rect({
			top : 0,
			right : 0,
			bottom : 0,
			left : 0
		});
		document.body.appendChild(this.element);
		goodshow.Utility.loadText({
			url: this.url,
			callback: function(html) {
				this.element.innerHTML = html;
			}.bind(this)
		});
		entity.on('removed', function() {
			this.element.style.display = 'none';
		}.bind(this));
		this.watchTransform(entity);
	},
	
	rect : function(rect) {					// this is one example of why CSS sucks pretty bad
		
		var result = [];
		result.push('rect(');
		result.push(rect.top + 'px,');
		result.push(rect.right + 'px,');
		result.push(rect.bottom + 'px,');
		result.push(rect.left + 'px');
		result.push(')');
		return result.join('');
	},
	
	watchTransform : function(entity) {
		
		entity.updateTransform = function() {
			this.element.style.display = 'block';
			PIXI.DisplayObject.prototype.updateTransform.call(entity);
			var global = entity.toGlobal(new PIXI.Point(0, 0));
			Object.assign(this.element.style, {
				top: global.y,
				left: global.x,
				width: entity.options.bounds.width,
				height: entity.options.bounds.height
			});
			var margin = entity.options.constrain.margin;
			this.element.style.clip = this.rect({
				top : 0,
				right : entity.options.bounds.width,
				bottom : entity.options.bounds.height,
				left : entity.options.bounds.width - global.x + margin.left + margin.right
			});
		}.bind(this);
	},
	
	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
	}
});
