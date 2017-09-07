
example = example || {};

goodshow.Main.ready(function(stage, renderer) {
	
	new Application({
		stage : stage
	});
});

Application = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
		this.initializeEnhancer();
		this.initializeInterface();
		this.initializeMessages();
		
		if (false) {
			var woot = 2;
			var number1 = new Object()
			number1.valueOf = function() {
				return 1;
			};
			var number2 = new Object()
			number2.valueOf = function() {
				return woot;
			};
			var result = number1 + number2;
			console.log('number1: ' + number1);
			console.log('number2: ' + number2);
			console.log('number1 + number2: ' + (number1 + number2));
			woot++;
			console.log('number1 + number2: ' + (number1 + number2));
		}
	},
	
	initializeEnhancer : function() {
		
		var enhancer = new example.Enhancer();
	},
	
	initializeInterface : function() {
	   
		application.layer = {};
		window.panel = new Structure({});
		this.stage.addChild(window.panel);
		window.panel.draw();
	},
	
	initializeMessages : function() {
		
		application.layer.message.display(new example.layer.message.Panel({
			text : 'All you need is love.'
		}));
		application.layer.message.display(new example.layer.message.Panel({
			text : 'Love is all you need.'
		}));
		application.layer.message.display(new example.layer.message.Panel({
			text : 'Love is all you need.'
		}));
	}
});

Structure = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			bounds: new PIXI.Rectangle(0, 0, window.innerWidth, window.innerHeight),
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						background : 0xEEEE77,
						constrain : {
							height : 50
						},
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.Label({
									text : 'This is a "kitchen sink" demo of GoodShow - a hackable entity-component UI system for WebGL.',
									font : '16px Roboto',
									foreground: 'black',
									constrain : {
										flex : 1,
										margin : {
											left : 0,
											right : 0
										}
									}
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
