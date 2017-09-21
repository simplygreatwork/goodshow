
example.panels.master.Panel = goodshow.Panel.extend({
	
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
							extent: 64,
							padding : {
								left : 8,
								right : 8
							}
						},
						contain : {
							arranger: new goodshow.arranger.Horizontal(),
							children: [
								new goodshow.Label({
									name: 'header-menu',
									text: '\uE5D2',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 44,
									},
									pivot : {
										y : -4
									},
									invoke : {
										action : function() {
											goodshow.Broadcast.publish('open-left-drawer', {});
										}
									}
								}),
								new goodshow.Label({
									name: 'header-text',
									text: 'Main',
									foreground: 'white',
									constrain : {
										extent : 'flex',
										margin : {
											left : 8
										}
									},
									align : 'left'
								}),
								new goodshow.Label({
									name: 'header-search',
		        					text: '\uE8B6',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 44
									},
									pivot : {
										y : -4
									},
									ripple : {
										maximum : 10,
										color : 0xFFFFFF,
										radius : 44
									},
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Search!'
											}));
										}.bind(this)
									}
								}),
								new goodshow.Label({
									name: 'header-print',
									text: '\uE8AD',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 44
									},
									pivot : {
										y : -4
									},
									invoke : {
										action : function() {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'Print!'
											}));
										}.bind(this)
									}
								}),
								new goodshow.Label({
									name: 'header-menu',
									text: '\uE5d4',
									foreground: 'white',
									fontFamily: 'Material Icons',
									fontSize: '24px',
									constrain : {
										extent: 44
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
						}
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
									text : 'Mill',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.panel.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Reveal',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.reveal.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Arrange',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.arrange.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Text',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.text.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Image',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.image.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Draw',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.draw.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Change',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.change.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Paint',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.paint.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Card',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.card.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Button',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.button.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'List',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.list.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Overlay',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.overlay.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Ripple',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.ripple.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Markup',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.markup.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Markdown',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.markdown.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Enhance',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.enhance.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Develop',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
											miller.advance(new example.panels.develop.Panel());
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
							extent: 64
						},
						invoke : {
							action : function(entity) {
								entity.options.background = 0xFF0000;
							}.bind(this)
						}
					})
				]
			}
		}, options || {}));
	}
});
