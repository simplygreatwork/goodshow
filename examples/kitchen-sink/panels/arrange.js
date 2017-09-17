
example.panels.arrange.Panel = goodshow.Panel.extend({
	
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
									text: 'Arrange',
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
					new goodshow.List({
						name: 'content',
						constrain : {
							extent : 'flex',
							margin : {
								top : 10,
								bottom : 10,
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.ListItem({
									text : 'Text',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											window.setTimeout(function() {
												miller.advance(new example.panels.arrange.text.Panel());
											});
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Image',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											window.setTimeout(function() {
												miller.advance(new example.panels.arrange.image.Panel());
											});
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Inherit',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											window.setTimeout(function() {
												miller.advance(new example.panels.arrange.inherit.Panel());
											});
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

example.panels.arrange.text.Panel = goodshow.Panel.extend({
	
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
									text: 'Text',
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
								top : 25,
								bottom : 25,
								left : 30,
								right : 30
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.TextArea({
									text: 'Content which stacks vertically will reposition and expand their containers.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xFFEEEE,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: window.lorem,
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xEEFFEE,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Need to use two nested vertical arrangers to fully test this.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xEEEEFF,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Content which stacks vertically will reposition and expand their containers.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xFFEEEE,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: window.lorem,
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xEEFFEE,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Need to use two nested vertical arrangers to fully test this.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xEEEEFF,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Content which stacks vertically will reposition and expand their containers.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xFFEEEE,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: window.lorem,
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xEEFFEE,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Need to use two nested vertical arrangers to fully test this.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									background : 0xEEEEFF,
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								})
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

example.panels.arrange.image.Panel = goodshow.Panel.extend({
	
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
									text: 'Image',
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
								new goodshow.TextArea({
									text: 'The images below arrange to flow after each other without overlap.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								}),
								new goodshow.Image({
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								})
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

example.panels.arrange.inherit.Panel = goodshow.Panel.extend({
	
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
									text: 'Inherit',
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
								top : 25,
								bottom : 25,
								left : 30,
								right : 30
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.TextArea({
									text: 'This panel will illustrate layout extent (width/height) of a container (panel) inheriting from its children.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 25
										}
									}
								}),
								new goodshow.TextArea({
									text: 'HEADER',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.Panel({
									background : 0xFF7777,
									constrain : {
										extent : 'inherit',
										padding : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										},
										margin: {
											top: 5,
											bottom: 5
										}
									},
									contain : {
										arranger : new goodshow.arranger.Vertical(),
										children : [
											new goodshow.TextArea({
												text: 'SUBHEADER',
												fontFamily: 'Roboto',
												fontSize: '1.8em',
												foreground : '#333333',
												constrain : {
													extent : 'flow',
													margin: {
														top: 5,
														bottom: 5
													}
												}
											}),
											new goodshow.TextArea({
												text: 'CONTENT',
												fontFamily: 'Roboto',
												fontSize: '1.8em',
												foreground : '#333333',
												constrain : {
													extent : 'flow',
													margin: {
														top: 5,
														bottom: 5
													}
												}
											}),
											new goodshow.TextArea({
												text: 'SUBFOOTER',
												fontFamily: 'Roboto',
												fontSize: '1.8em',
												foreground : '#333333',
												constrain : {
													extent : 'flow',
													margin: {
														top: 5,
														bottom: 5
													}
												}
											})
										]
									}
								}),
								new goodshow.TextArea({
									text: 'FOOTER',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 5,
											bottom: 25
										}
									}
								})
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
