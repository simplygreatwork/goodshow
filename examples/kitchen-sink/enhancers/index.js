
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
				font : '16px Roboto',
				constrain : {
					extent: 64,
					margin : {
						top : 3,
						bottom : 3
					}
				}
			}
		};
	}
});
