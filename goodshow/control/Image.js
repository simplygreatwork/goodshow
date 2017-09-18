goodshow.Image = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		this.texture = PIXI.Texture.fromImage(options.path);
		this.sprite = new PIXI.Sprite(this.texture);
		goodshow.Panel.prototype.initialize.call(this, Object.assign({}, options));
		this.addChild(this.sprite);
		if (this.texture.baseTexture.hasLoaded) {
			this.reposition();
		}
		else {
			this.texture.on('update', function() {
				this.reposition();
			}.bind(this));
		}
	},
	
	reposition: function() {
		
		this.sprite.position.x = 0;
		this.sprite.position.y = 0;
		if (this.options.bounds.width > 0) {
			this.sprite.width = this.options.bounds.width;
			this.sprite.height = this.texture.height / (this.texture.width / this.sprite.width);
			if ((this.options.constrain.extent.kind == 'flow') && (this.options.constrain.extent.value === undefined) && (this.sprite.height > 0)) {
				this.options.constrain.extent.value = this.sprite.height + this.options.constrain.margin.top + this.options.constrain.margin.bottom;
				this.parent.options.contain.invalidate();
			}
		}
	},
	
	draw: function() {
		
		goodshow.Panel.prototype.draw.call(this);
		this.reposition();
	}
});
