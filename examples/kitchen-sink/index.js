
example = example || {};

goodshow.Fonts.ready(function() {
	
	new Application({
		stage : new goodshow.Main().stage
	});
});

Application = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
		this.initializeEnhancer();
		this.initializeContent();
		this.initializeMessages();
		this.initializeLayers();
	},
	
	initializeEnhancer : function() {
		
		var enhancer = new example.Enhancer();
	},
	
	initializeContent : function() {
	   
		application.layer = {};
		window.panel = new example.Content({});
		this.stage.addChild(window.panel);
		window.panel.draw();
	},
	
	initializeMessages : function() {
		
		window.setTimeout(function() {
			application.layer.message.display(new example.layer.message.Panel({
				text : 'All you need is love.'
			}));
			application.layer.message.display(new example.layer.message.Panel({
				text : 'Love is all you need.'
			}));
			application.layer.message.display(new example.layer.message.Panel({
				text : 'Love is all you need.'
			}));
		}.bind(this), 1000);
	},
	
	initializeLayers : function() {
		
		var layer = new example.Layer();
	}
});

example.Layer = Class.extend({
	
	initialize : function() {
		
		this.show();
	},
	
	show : function() {
		
		
	}
});

example.Content = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			bounds: new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight),
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						background : 0xEEEE77,
						constrain : {
							extent: 50
						},
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.Label({
									text : 'A "kitchen sink" demo of GoodShow - a hackable entity-component UI system for WebGL built with Pixi.js.',
									foreground: 'black',
									fontFamily: 'Roboto',
									fontSize: '16px'
								})
							]
						}
					}),
					new goodshow.Panel({
						contain : {
							arranger : new goodshow.arranger.Stack(),
							children: [
								application.layer.content = new example.layer.Content({
									content : new goodshow.Miller({
										content : new example.panels.master.Panel()
									})
								}),
								application.layer.drawer = new example.layer.drawer.Layer({}),
								application.layer.message = new example.layer.message.Layer({}),
								application.layer.dialog = new example.layer.dialog.Layer({})
							]
						}
					})
				]
			}
		}, options || {}));
	}
});
