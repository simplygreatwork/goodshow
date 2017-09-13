
goodshow.Image = goodshow.Panel.extend({
	
	initialize: function(options) {
		
   	this.texture = PIXI.Texture.fromImage(options.path);
		this.sprite = new PIXI.Sprite(this.texture);
		goodshow.Panel.prototype.initialize.call(this, Object.assign({}, options));
 		this.addChild(this.sprite);
		if (this.texture.baseTexture.hasLoaded) {
			this.reposition();
		} else {
			this.texture.on('update', function() {
				this.reposition();
			}.bind(this));
		}
	},
	
	reposition : function() {
		
		this.sprite.position.x = this.options.bounds.x;
		this.sprite.position.y = this.options.bounds.y;
		this.sprite.width = this.options.bounds.width;
		this.sprite.height = this.texture.height / (this.texture.width / this.sprite.width);
	},
	
	draw : function() {
		
		goodshow.Panel.prototype.draw.call(this);
		this.reposition();
	}
});
