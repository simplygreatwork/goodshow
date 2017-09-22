
goodshow.Card = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		options = options || {};
		goodshow.Panel.prototype.initialize.call(this, {
			constrain: options.constrain || {},
			contain: {
				arranger: new goodshow.arranger.Stack(),
				children: [
					this.graphics = new goodshow.Panel({
						background: 0xFFFFFF,
						filter: {
							filters: [Object.assign(new PIXI.filters.DropShadowFilter(), {
								color: 0x888888,
								alpha: 0.4,
								blur: 4,
								distance: 5
							})]
						}
					}),
					this.panel = new goodshow.Panel(Object.assign({}, options || {})),
				]
			}
		});
	},

	draw: function() {

		goodshow.Panel.prototype.draw.call(this);
	}
});
