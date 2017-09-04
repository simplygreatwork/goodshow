
window.example = window.example || {};

MillerPanel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					this.primary = options.content,
					this.secondary = new goodshow.Panel({
						background: 0xCCCCCC
					})
				]
			}
		}, options));
	},
	
	advance: function(component) {
		
		this.secondary.removeChildren();
		this.secondary.addChild(new MillerPanel({
			content: component
		}));
		this.secondary.draw();
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
		} else {
			this.advance(component);
		}
	}
});
