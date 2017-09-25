
window.example = window.example || {};

example.Enhancer = Class.extend({
	
	initialize: function() {
		
		this.initializeSubscribing();
		this.initializeEnhancements();
	},
	
	initializeSubscribing : function() {
		
		goodshow.Broadcast.subscribe('entity-enhance', function(options) {
			this.enhance(options);
		}.bind(this));
		goodshow.Broadcast.subscribe('entity-transform', function(entity) {
			return this.transform(entity);
		}.bind(this));
	},
	
	enhance : function(options) {
		
		if (options.trait) {
			var enhancement = this.enhancements[options.trait];
			if (enhancement) {
				Object.assign(options, enhancement);
			}
		}
	},
	
	transform : function(entity) {
		
		if (entity.options.trait == 'customized-list-item') {
			if (entity instanceof goodshow.ListItem) {
				entity.icon.options.paint.painters[0].color = 0xFF0000;
				entity.label.text.text = entity.label.text.text.toUpperCase();
				entity.label.text.style = entity.label.text.style;
			}
		}
		if (false) {
			if (entity.options.trait == 'basic-button') {
				if (entity instanceof goodshow.Button) {
					Object.assign(entity.options, {
						foreground : 0xFFFFFF,
						background : 0x3368d4,
						fontFamily: 'Roboto',
						fontSize: '16px',
						constrain : {
							extent: 'flow',
							margin : {
								top : 3,
								bottom : 3
							},
							padding : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						}
					});
					entity.resolve();
					entity.install();
				}
			}
		}
		
		return entity;
	},
	
	initializeEnhancements : function() {
		
		this.enhancements = {
			'basic-button' : {
				foreground : 0xFFFFFF,
				background : 0x3368d4,
				fontFamily: 'Roboto',
				fontSize: '16px',
				constrain : {
					extent: 'flow',
					margin : {
						top : 3,
						bottom : 3
					},
					padding : {
						top : 20,
						bottom : 20,
						left : 20,
						right : 20
					}
				}
			}
		};
	}
});
