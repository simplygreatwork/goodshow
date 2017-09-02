
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
		if (this.blurring) {
			var filter = new PIXI.filters.BlurFilter();
			filter.blur = 1;
			filter.quality = 4;
			this.filters = [filter];
		}
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
					this.drawer.west = new goodshow.Panel({
						background: 0x444444,
						constrain : {
							width: 200
						}
					}),
					new goodshow.Panel({
						background: 0x000000,
						alpha: 0,
					}),
					this.drawer.east = new goodshow.Panel({
						background: 0x444444,
						constrain : {
							width: 200
						}
					})
				]
			}
		}, options || {}));
		this.drawer.west.interactive = true;
		this.drawer.west.on('mousedown', function() {
			this.drawer.west.visible = false;
			this.drawer.west.parent.draw();
		}.bind(this));
		this.drawer.east.interactive = true;
		this.drawer.east.on('mousedown', function() {
			this.drawer.east.visible = false;
			this.drawer.east.parent.draw();
		}.bind(this));
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
	}
});

// add a blur filter to the overlay

example.layer.dialog.Overlay = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		if (false) this.blurring = false;
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x111111,
			alpha: 0.7,
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: []
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function(event) {			// todo : use invoker
			event.stopPropagation();
			return true;
		}.bind(this));
		if (this.blurring) {		// issue: needs nested stacks for this to work well
			var filter = new PIXI.filters.BlurFilter();
			filter.blur = 8;
			filter.quality = 4;
			this.filters = [filter];
		}
	}
});

example.layer.dialog.Dialog = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					new Flexible(),
					new goodshow.Panel({
						constrain : {
							width: 800
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new Flexible(),
								this.dialog = new goodshow.Panel({
									background: 0xFFFFFF,
									constrain : {
										height: 300
									},
									contain : {
										arranger: new goodshow.arranger.Horizontal(),
										children: []
									}
								}),
								new Flexible({
									constrain : {
										flex : 4
									}
								}),
							]
						}
					}),
					new Flexible()
				]
			}
		}, options || {}));
		this.dialog.interactive = true;
		this.dialog.on('mousedown', function() {			// todo : use invoker
			this.parent.visible = false;
			this.parent.draw();
		}.bind(this));
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
					new goodshow.Panel({
						constrain : {
							width: 600,
							margin : {
								bottom : 80					// fix arranger jumping
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
				}
			},
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					new goodshow.Label({
						text : options.text,
						font : '16px Roboto',
						foreground: 'white',
						align : 'left',
						constrain : {
							flex : 1,
							margin : {
								left : 24,
								right : 0
							}
						}
					}),
					new Flexible(),
					new goodshow.Label({
						text : 'CLOSE',
						font : '16px Roboto',
						foreground: 'yellow',
						constrain : {
							flex : 1,
							margin : {
								left : 30,
								right : 0
							}
						}
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
