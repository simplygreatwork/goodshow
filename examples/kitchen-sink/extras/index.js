
window.example = window.example || {};

ListItem = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		Object.assign(options, {
			arranger: new goodshow.arranger.Horizontal(),
			height : 50,
			margin : {
				top : 0,
				bottom : 0
			},
			children: [
				this.icon = new goodshow.Label({
					arranger: new goodshow.arranger.Vertical(),
					width : 44,
					text: '\uE838',
					foreground: 'white',
					font: '30px Material Icons',
					background : 0xFFFFFF,
					pivot : {
						x : -7,
						y : -5
					},
					painters : [
						function(component) {
							component.beginFill(0xFF77AA);
							var bounds = component.options.bounds;
							component.drawCircle(bounds.x + (bounds.width / 2), bounds.y + (bounds.height / 2), 22);
						}
					]
				}),
				this.label = new goodshow.Label({
					arranger: new goodshow.arranger.Vertical(),
					background : 0xFFFFFF,
					margin : {
						left : 12,
						top : 20
					},
					text : options.text
				}),
			],
			painters : [
				function(entity) {
					var now = new Date().getTime();
					var events = entity.options.events;
					if (events) {
						events.forEach(function(event) {
							var diff = now - event.timeStamp;
							if (diff < 1000) {
								var alpha = 0.3 * ((1000 - diff) / 1000);
								var bounds = entity.options.bounds;
								var radius = Math.max(bounds.width, bounds.height) * (diff / 1000) * 1.1
								var position = event.position;
								entity.beginFill(0x999999, alpha);
								entity.drawCircle(position.x, position.y, radius);
							}
						}.bind(this));
					}
				}
			]
		})
		goodshow.Panel.prototype.initialize.call(this, options);
	}
});

ListItem2 = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		Object.assign(options, {
			arranger: new goodshow.arranger.Horizontal(),
			height : 50,
			margin : {
				top : 0,
				bottom : 0
			},
			children: [
				this.icon = new goodshow.Panel({
					arranger: new goodshow.arranger.Vertical(),
					width : 44,
					background : 0xFFFFFF,
					painters : [
						function(component) {
							component.beginFill(0x999999);
							var bounds = component.options.bounds;
							component.drawCircle(bounds.x + (bounds.width / 2), bounds.y + (bounds.height / 2), 22);
						}
					]
				}),
				this.label = new goodshow.Label({
					arranger: new goodshow.arranger.Vertical(),
					background : 0xFFFFFF,
					margin : {
						left : 12,
						top : 20
					},
					text : options.text
				}),
			]
		})
		goodshow.Panel.prototype.initialize.call(this, options);
	}
});

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

Flexible = goodshow.Panel.extend({

	initialize: function(options) {
		
		options = options || {};
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: []
			}
		}, options));
		this.interactive = false;
	}
});
