
goodshow.Layer = Class.extend({
	
	initialize: function(options) {
		
      this.initializeStage();
      this.initializeResizing();
      this.animate();
	},
	
	initializeStage: function() {
		
		this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
			resolution: window.devicePixelRatio || 1,
			autoResize: true,
			transparent: true,
			antialias: true,
		});
		PIXI.RESOLUTION = window.devicePixelRatio;
		this.renderer.resize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.view);
		this.stage = new PIXI.Container();
	},
   
	animate: function() {
      
		var focused = true;
		window.addEventListener('focus', function() {
			focused = true;
		});
		window.addEventListener('blur', function() {
			focused = false;
		});
		var self = this;
		(function loop(t) {
			if (focused) {
				requestAnimationFrame(loop);
				self.renderer.render(self.stage);
			}
			else {
				window.setTimeout(function() {
					requestAnimationFrame(loop);
					self.renderer.render(self.stage);
				}.bind(this), 250);
			}
		}());
	},
	
	initializeResizing: function() {
		
		window.onresize = function() {
			this.renderer.resize(window.innerWidth, window.innerHeight);
			window.panel.options.bounds = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
			window.panel.draw();
		}.bind(this);
	}
});
