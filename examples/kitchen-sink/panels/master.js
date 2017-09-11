
example.panels.master.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFFFFF,
			constrain : {
				width: 350
			},
			contain : {
				arranger: new goodshow.arranger.Vertical(),
				children: [
					new goodshow.Panel({
						name: 'header',
						background: 0x3368d4,
						constrain : {
							height: 64,
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
									font: '24px Material Icons',
									constrain : {
										width: 44,
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
										flex: 1,
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
									font: '24px Material Icons',
									constrain : {
										width: 44
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
									font: '24px Material Icons',
									constrain : {
										width: 44
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
									font: '24px Material Icons',
									constrain : {
										width: 44
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
							flex : 1,
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
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.panels.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Reveal',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.reveals.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Flow',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.flows.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Text',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.text.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Image',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.images.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Draw',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.drawing.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Change',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.changes.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Paint',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.painters.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Card',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.cards.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Button',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.buttons.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'List',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.lists.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Overlay',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.overlays.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Responsive',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.responsive.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Ripple',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.rippling.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Markup',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.markup.Panel());
										}.bind(this)
									}
								}),
								new goodshow.ListItem({
									text : 'Markdown',
									invoke : {
										action : function() {
											var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
											miller.advance(new example.panels.markdown.Panel());
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
							height: 64
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
