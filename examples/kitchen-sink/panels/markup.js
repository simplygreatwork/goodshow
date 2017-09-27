
example.panels.markup.Panel = goodshow.Panel.extend({
   
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			name: 'markup-panel',
			background: 0xFFFFFF,
			constrain : {
				extent: 350
			},
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						name: 'header',
						background: 0x3368d4,
						constrain : {
							extent: 64
						},
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								new goodshow.Label({
									name: 'header-text',
									text: 'Markup',
									foreground: 'white',
									align : 'left',
									constrain : {
										extent : 'flex',
										margin: {
											left: 10
										}
									}
								}),
								new goodshow.Label({
									name: 'header-menu',
									text: '\uE5d4',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 64
									},
									pivot : {
										y : -4
									}
								})
							]
						},
					}),
					new goodshow.List({
						name: 'content',
						constrain : {
							extent : 'flex',
							margin : {
								top : 10,
								bottom : 10
							}
						},
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.ListItem({
									text : 'Basic',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.markup.basic.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Markdown',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.markup.markdown.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Editing',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.markup.editing.Panel());
										}.bind(this)
									}
								})
							]
						},
						selection : {
							quantity : 1,
			            foreground : 0xFFFFFF,
			            background : 0x4444FF
						}
					}),
					new goodshow.Panel({
						name: 'footer',
						background: 0x3368d4,
						constrain : {
							extent: 64,
						}
					})
				]
			}
		}, options || {}));
	}
});

example.panels.markup.basic.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFFFFF,
			constrain : {
				extent: 350
			},
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						name: 'header',
						background: 0x3368d4,
						constrain : {
							extent: 64
						},
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								new goodshow.Label({
									name: 'header-text',
									text: 'Basic',
									foreground: 'white',
									align : 'left',
									constrain : {
										extent : 'flex',
										margin: {
											left: 10
										}
									}
								}),
								new goodshow.Label({
									name: 'header-menu',
									text: '\uE5d4',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 64
									},
									pivot : {
										y : -4
									},
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Menu!'
											}));
										}.bind(this)
									}
								})
							]
						},
					}),
					this.markup = new goodshow.Markup({
						name: 'markup-content',
						url : '../assets/templates/index.html',
						clip : true,
						constrain : {
							margin : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						}
					}),
					new goodshow.Panel({
						name: 'footer',
						background: 0x3368d4,
						constrain : {
							extent: 64,
						}
					})
				]
			}
		}, options || {}));
	},
	
	draw : function() {
		
		goodshow.Panel.prototype.draw.call(this);
		var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
		if (miller) {
			miller.once('has-entered', function() {
				this.markup.options.markup.element.style.display = 'block';
			}.bind(this));
		}
	}
});

example.panels.markup.markdown.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFFFFF,
			constrain : {
				extent: 350
			},
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						name: 'header',
						background: 0x3368d4,
						constrain : {
							extent: 64
						},
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								new goodshow.Label({
									name: 'header-text',
									text: 'Markdown',
									foreground: 'white',
									align : 'left',
									constrain : {
										extent : 'flex',
										margin: {
											left: 10
										}
									}
								}),
								new goodshow.Label({
									name: 'header-menu',
									text: '\uE5d4',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 64
									},
									pivot : {
										y : -4
									},
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Menu!'
											}));
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background: 0xFFFFFF,
						constrain : {
							padding : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Label({
									name: 'header-text',
									text: 'You can edit this text.',
									foreground: 'white',
									align : 'left',
									constrain : {
										extent : 'flow',
										margin: {
											left: 10
										}
									}
								}),
							]
						},
						mask : {},
						scroll : {}
					}),
					new goodshow.Panel({
						name: 'footer',
						background: 0x3368d4,
						constrain : {
							extent: 64,
						}
					})
				]
			}
		}, options || {}));
	}
});

example.panels.markup.editing.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFFFFF,
			constrain : {
				extent: 450
			},
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						name: 'header',
						background: 0x3368d4,
						constrain : {
							extent: 64
						},
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								new goodshow.Label({
									name: 'header-text',
									text: 'Editing',
									foreground: 'white',
									align : 'left',
									constrain : {
										extent : 'flex',
										margin: {
											left: 10
										}
									}
								}),
								new goodshow.Label({
									name: 'header-menu',
									text: '\uE5d4',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 64
									},
									pivot : {
										y : -4
									},
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Menu!'
											}));
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background: 0xFFFFFF,
						constrain : {
							padding : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Label({
									text: 'You can edit this text.',
									foreground: 'black',
									align : 'left',
									constrain : {
										extent : 'flow',
										margin: {
											top : 10,
											bottom : 10,
											left: 10,
											right : 10
										}
									},
									edit : {
										inline : false
									}
								}),
								new goodshow.Label({
									text: 'You will be able to edit this text inline soon.',
									foreground: 'black',
									align : 'left',
									constrain : {
										extent : 'flow',
										margin: {
											top : 10,
											bottom : 10,
											left: 10,
											right : 10
										}
									},
									edit : {
										inline : true
									}
								}),
							]
						},
						mask : {},
						scroll : {}
					}),
					new goodshow.Panel({
						name: 'footer',
						background: 0x3368d4,
						constrain : {
							extent: 64,
						}
					})
				]
			}
		}, options || {}));
	}
});
