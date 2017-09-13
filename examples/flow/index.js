
window.example = window.example || {};

goodshow.Main.ready(function(stage, renderer) {
	
	new Application({
		stage : stage
	});
});

Application = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
		console.log('this.stage: ' + this.stage);
	}
});
