goodshow.Main = Class.extend({

	initialize: function(options) {

		goodshow.application = this;
		window.application = this;
		this.initializeFonts(function() {
			this.initializeStage();
			this.animate();
			this.initializeResizing();
			this.initializeSubscribing();
			options.callback(this.stage, this.renderer);
		}.bind(this));
	},

	initializeFonts: function(callback) {

		WebFontConfig = {
			google: {
				families: ['Roboto', 'Material+Icons'],
			},
			active: function() {
				callback();
			}
		};

		(function() {
			var wf = document.createElement('script');
			wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
			wf.type = 'text/javascript';
			wf.async = 'true';
			var s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(wf, s);
		})();
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
	},

	initializeSubscribing: function() {

		goodshow.Broadcast.subscribe('arranger.invalidate', function(options) {
			var entity = options.entity;
			window.setTimeout(function() { // use Ticker?
				entity.draw();
			}.bind(this), 1);
		}.bind(this));
	}
});

goodshow.Main.ready = function(callback) {

	var main = new goodshow.Main({
		callback: callback
	});
}
