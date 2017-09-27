
goodshow.Main = Class.extend({
	
	initialize: function(options) {
		
		goodshow.application = this;
		window.application = this;
		this.initializeRenderer();
		this.animate();
		this.initializeResizing();
		this.initializeSubscribing();
	},
	
	initializeRenderer: function() {
		
		this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
			resolution: window.devicePixelRatio || 1,
			autoResize: true,
			transparent: true,
			antialias: true,
		});
		PIXI.settings.RESOLUTION = window.devicePixelRatio;
		this.renderer.resize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.view);
		this.container = new PIXI.Container();
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
				self.renderer.render(self.container);
			}
			else {
				window.setTimeout(function() {
					requestAnimationFrame(loop);
					self.renderer.render(self.container);
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
	},
	
	initializeSubscribing: function() {
		
		goodshow.Broadcast.subscribe('arranger.invalidate', function(options) {
			window.setTimeout(function() {				// use Ticker?
				options.entity.draw();
			}.bind(this), 1);
		}.bind(this));
	}
});
