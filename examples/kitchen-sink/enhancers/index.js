
window.example = window.example || {};

example.Enhancer = Class.extend({
	
	initialize: function() {
		
		this.initializeSubscribing();
		this.initializeEnhancements();
	},
	
	initializeSubscribing : function() {
		
		goodshow.Broadcast.subscribe('entity-enhance', function(options) {
			if (options.trait) {
				var enhancement = this.enhancements[options.trait];
				if (enhancement) {
					Object.assign(options, enhancement);
				}
			}
		}.bind(this));
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
