
goodshow.Main = Class.extend({
	
	initialize: function(options) {
		
		goodshow.application = this;
		window.application = this;
		this.initializeFonts(function() {
			this.initializeStage();
			this.animate();
			this.initializeModifiers();
			this.initializeComponents();
			this.initializeResizing();
			options.callback(this.stage, this.renderer);
		}.bind(this));
	},
	
	initializeFonts : function(callback) {
		
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
		    transparent:true,
		    antialias:true,
		});
		PIXI.RESOLUTION = window.devicePixelRatio;
		this.renderer.resize(window.innerWidth, window.innerHeight);
		document.body.appendChild(this.renderer.view);
		this.stage = new PIXI.Container();
	},
	
	animate : function() {
		
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
			} else {
				window.setTimeout(function() {
					requestAnimationFrame(loop);
					self.renderer.render(self.stage);
				}.bind(this), 250);
			}
		}());
	},
	
	initializeModifiers: function() {
        
		this.modifier = new goodshow.Modifer();
	},
    
	initializeComponents: function() {
		
	},
	
	initializeResizing : function() {
		
		window.onresize = function() {
			this.resize();
		}.bind(this);
	},
	
	resize : function() {
		
		this.renderer.resize(window.innerWidth, window.innerHeight);
		window.panel.bounds = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
		window.panel.options.bounds = new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight);
		window.panel.draw();
	},
});

goodshow.Main.ready = function(callback) {
    
    var main = new goodshow.Main({
        callback : callback
    });
}

goodshow.Modifer = Class.extend({
	
	initialize: function() {

		goodshow.Broadcast.subscribe('component-will-draw', function(data) {
			this.modify(data.component);
		}.bind(this));
	},

	modify: function(component) {
        
        if (false) {
    		if (component instanceof goodshow.Label) {
    			if (goodshow.Utility.random(1, 4) == 1) {
    				component.options.background = 0xFF0000;
    			}
    		}
        }
	}
});
