goodshow.Image = Class.extend({

	initialize: function(options) {

		this.texture = PIXI.Texture.fromImage(options.path);
		PIXI.Sprite.call(this, this.texture);
		this.options = {
			bounds: new PIXI.Rectangle(0, 0, 300, 300)
		};
		Object.assign(this.options, options);
		if (this.texture.baseTexture.hasLoaded) {
			this.draw();
		}
		else {
			this.texture.on('update', function() {
				this.draw();
			}.bind(this));
		}
	},

	draw: function() {

		this.position.x = this.options.bounds.x;
		this.position.y = this.options.bounds.y;
		this.width = this.options.bounds.width;
		this.height = this.texture.height / (this.texture.width / this.width);
	}

}, PIXI.Sprite);
