
window.example = window.example || {};
window.example.layer = {
	content : {},
	dialog : {},
	message : {},
	drawer : {},
	floating : {},
	menu : {},
	tooltip : {}
};

example.layer.Content = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign(options, {
			contain : {
				arranger: new goodshow.arranger.Stack(),
				children: [options.content]
			}
		}, options || {}));
		this.blurring = false;
		if (this.blurring) {
			this.filters = [Object.assign(new PIXI.filters.BlurFilter(), {
				blur : 3,
				quality : 4
			})];
		}
	}
});

example.layer.Heading = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign(options, {
			contain : {
				arranger: new goodshow.arranger.Stack(),
				children: [options.content]
			}
		}, options || {}));
	}
});

example.layer.drawer.Layer = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		this.drawer = {};
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x000000,
			alpha: 0,
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					this.drawer.left = new goodshow.Panel({
						background: 0x444444,
						constrain : {
							width: 250
						},
						invoke : {
							action : function() {
								this.drawer.left.visible = false;
								this.parent.draw();
							}.bind(this)
						}
					}),
					new goodshow.Panel({
						background: 0x000000,
						alpha: 0,
					}),
					this.drawer.right = new goodshow.Panel({
						background: 0x444444,
						constrain : {
							width: 250
						},
						invoke : {
							action : function() {
								this.drawer.right.visible = false;
								this.parent.draw();
							}.bind(this)
						}
					})
				]
			}
		}, options || {}));
	}
});

example.layer.dialog.Layer = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			alpha: 0,
			contain : {
				arranger: new goodshow.arranger.Stack(),
				children: [
					new example.layer.dialog.Overlay(),
					new example.layer.dialog.Dialog()
				]
			}
		}, options || {}));
	},
	
	toggle : function() {
		
		this.visible = ! this.visible;
		this.draw();
	}
});

example.layer.dialog.Overlay = goodshow.Panel.extend({		// add a blur filter to the overlay
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x111111,
			alpha: 0.7,
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: []
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function(event) {				// todo : use invoker
			event.stopPropagation();
			return true;
		}.bind(this));
	}
});

example.layer.dialog.Dialog = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					new goodshow.Panel(),
					new goodshow.Panel({
						constrain : {
							width: 800
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Panel(),
								this.dialog = new goodshow.Panel({
									background: 0xFFFFFF,
									constrain : {
										height: 300
									},
									contain : {
										arranger: new goodshow.arranger.Horizontal(),
										children: []
									},
									invoke : {
										action : function() {
											application.layer.dialog.toggle();
										}.bind(this)
									}
								}),
								new goodshow.Panel({
									constrain : {
										flex : 4
									}
								})
							]
						}
					}),
					new goodshow.Panel()
				]
			}
		}, options || {}));
	}
});

example.layer.message.Layer = goodshow.Panel.extend({
    
	initialize: function(options) {
		
		this.message = {};
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x000000,
			alpha: 0,
			constrain : {
				flex : 1,
				margin: {
					top: 0,
					bottom: 10,
					right: 0,
					left: 0
				}
			},
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					new goodshow.Panel(),
					this.list = new goodshow.Panel({
						constrain : {
							width: 600,
							padding : {
								bottom : 60					// fix arranger jumping
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Panel(),		// fix arranger jumping
								this.message.one = new example.layer.message.Panel({
									text : 'All you need is love.'
								}),
								this.message.two = new example.layer.message.Panel({
									text : 'Love is all you need.'
								}),
								this.message.three = new example.layer.message.Panel({
									text : 'Love is all you need.'
								})
							]
						}
					}),
					new goodshow.Panel()
				]
			}
		}, options || {}));
	},
	
	display : function(message) {
		
		this.list.options.contain.children.push(message);
		this.list.install();
		this.list.draw();
	}
});

example.layer.message.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x444444,
			alpha : 1,
			constrain : {
				height: 70,
				margin: {
					top: 5,
					bottom: 5,
					right: 0,
					left: 0
				},
				padding : {
					left : 24,
					right : 24
				}
			},
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					new goodshow.Label({
						text : options.text,
						font : '16px Roboto',
						foreground: 'white',
						align : 'left'
					}),
					new goodshow.Panel(),
					new goodshow.Label({
						text : 'CLOSE',
						font : '16px Roboto',
						foreground: 'yellow',
						align : 'right'
					})
				]
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function() {			// todo : use invoker
			this.visible = false;
			this.parent.draw();
		}.bind(this));
	}
});

FloatingLayer = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x0000FF,
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: []
			},
		}, options || {}));
	}
});
