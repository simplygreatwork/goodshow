
goodshow.Floater = goodshow.Component.extend({

	initialize: function(options) {
		
		goodshow.Component.prototype.initialize.call(this);
		goodshow.Utility.merge({
			foreground: 0xFFFFFF,
			background: 0xDDDDDD
		}, this.options);
		goodshow.Utility.merge(options, this.options);
	},
	
	draw: function() {
		
		this.clear();
		this.beginFill(this.options.background);
		this.lineStyle(0, 0x000000);
		var dropShadowFilter = new PIXI.filters.DropShadowFilter();
		dropShadowFilter.color = 0x666666;
		dropShadowFilter.alpha = 0.6;
		dropShadowFilter.blur = 2;
		dropShadowFilter.distance = 2;
		dropShadowFilter.angle = 0;
		this.filters = [dropShadowFilter];
		this.drawCircle(0, 0, 30);
		this.position.x = this.options.bounds.x;
		this.position.y = this.options.bounds.y;
		this.pivot.x = -30;
		this.pivot.y = -30;
		this.text = new PIXI.Text(this.options.emblem, {
			font: this.options.font,
			fill: this.options.foreground
		});
		// this.text.x = this.getLocalBounds().x;
		this.text.y = this.text.y + 7;
		this.text.pivot.x = this.text.width / 2;
		this.text.pivot.y = this.text.height / 2;
		this.addChild(this.text);
		this.interactive = true;
		this.on('mousedown', function(event) {
			goodshow.Ripple.rip({
				component : this,
				event : event
			});
		}.bind(this));
	}
});
