
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
							extent: 250
						},
						invoke : {
							action : function() {
								goodshow.tween.pivot({
									entity : this.drawer.left,
									from : {
										x : this.drawer.left.pivot.x,
										y : 0
									},
									to : {
										x : 300,
										y : 0
									}
								});
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
							extent: 250
						},
						invoke : {
							action : function() {
								goodshow.tween.pivot({
									entity : this.drawer.right,
									from : {
										x : this.drawer.right.pivot.x,
										y : 0
									},
									to : {
										x : -300,
										y : 0
									}
								});
							}.bind(this)
						}
					})
				]
			}
		}, options || {}));
		
    	goodshow.Broadcast.subscribe('open-left-drawer', function(object) {
			goodshow.tween.pivot({
				entity : application.layer.drawer.drawer.left,
				from : {
					x : application.layer.drawer.drawer.left.pivot.x,
					y : 0
				},
				to : {
					x : 0,
					y : 0
				}
			});
    	});
		
    	goodshow.Broadcast.subscribe('open-right-drawer', function(object) {
			goodshow.tween.pivot({
				entity : application.layer.drawer.drawer.right,
				from : {
					x : application.layer.drawer.drawer.right.pivot.x,
					y : 0
				},
				to : {
					x : 0,
					y : 0
				}
			});
    	});
	},
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
		
		if (this.visible) {
			goodshow.tween.alpha({
				entity : application.layer.dialog,
				to : {
					alpha : 0
				},
				duration : 300,
				finish : function() {
					this.visible = false;
					this.draw();
				}.bind(this)
			});
		} else {
			this.visible = true;
			goodshow.tween.alpha({
				entity : application.layer.dialog,
				to : {
					alpha : 1
				},
				duration : 300,
				finish : function() {

				}.bind(this)
			});
		}
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
							extent: 800
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Panel(),
								this.dialog = new goodshow.Panel({
									background: 0xFFFFFF,
									constrain : {
										extent: 300
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
										extent : {
											kind : 'flex',
											value : 4
										}
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
				extent : 'flex',
				margin: {
					top: 0,
					bottom: 0,
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
							extent: 600,
							padding : {
								bottom : 5
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Panel()
							]
						}
					}),
					new goodshow.Panel()
				]
			}
		}, options || {}));
		
		goodshow.Broadcast.subscribe('message.dismiss', function(message) {
			goodshow.tween.alpha({
				entity : message,
				to : {
					alpha : 0
				},
				finish : function() {
					this.list.options.contain.removeChild(message);
					this.list.draw();
				}.bind(this)
			});
		}.bind(this));
	},
	
	display : function(message) {
		
		this.queue = this.queue || [];
		this.queue.push(message);
		this.manage();
	},
	
	manage : function(message) {
		
		if (this.managing !== true) {
			if (this.queue.length > 0) {
				var message = this.queue.shift();
				this.list.options.contain.addChild(message);
				this.list.draw();
				this.managing = true;
				goodshow.tween.pivot({
					entity : this.list,
					from : {
						x : 0,
						y : this.list.pivot.y - 70
					},
					to : {
						x : 0,
						y : this.list.pivot.y
					},
					finish : function() {
						this.managing = false;
						this.manage();
					}.bind(this)
				});
				window.setTimeout(function() {
					goodshow.Broadcast.publish('message.dismiss', message)
				}.bind(this), 5000);
			}
		}
	}
});

example.layer.message.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x444444,
			alpha : 1,
			constrain : {
				extent: 70,
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
						fontFamily: 'Roboto',
						fontSize: '16px',
						foreground: 'white',
						align : 'left'
					}),
					new goodshow.Panel(),
					new goodshow.Label({
						text : 'CLOSE',
						fontFamily: 'Roboto',
						fontSize: '16px',
						foreground: 'yellow',
						align : 'right'
					})
				]
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function() {			// todo : use invoker
			goodshow.Broadcast.publish('message.dismiss', this)
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
