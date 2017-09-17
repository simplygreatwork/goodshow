
goodshow.Miller = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain: {
				arranger: new goodshow.arranger.Stack(),
				children: [
					new goodshow.Panel({
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								this.primary = options.content,
								this.secondary = new goodshow.Panel({
									background: 0xCCCCCC,
									mask : {}
								})
							]
						}
					})
				]
			}
		}, options));
	},
	
	advance: function(entity) {		// todo: if miller.advanced is true, transition out using the Stack
		
		var slide = true;
		this.secondary.removeChildren();
		if (slide) entity.pivot.x = entity.options.constrain.extent.value;
		this.secondary.addChild(new goodshow.Miller({
			content: entity
		}));
		this.secondary.draw();
		if (slide) goodshow.tween.pivot({
			entity : entity,
			pivot : {
				x : 0,
				y : 0
			}
		});
		this.advanced = true;
	},
	
	retreat: function() {

		this.secondary.removeChildren();
		this.secondary.draw();
		this.advanced = false;
	},

	toggle: function(component) {
		
		if (this.advanced) {
			this.retreat();
		}
		else {
			this.advance(component);
		}
	}
});
