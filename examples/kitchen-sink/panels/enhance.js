
example.panels.enhance.Panel = goodshow.Panel.extend({
	
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
									text: 'Enhance',
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
								}),
								new goodshow.Label({
									name: 'header-git',
									text: '\uf09b',
									foreground: 'white',
									fontFamily: 'FontAwesome',
									fontSize: '24px',
									constrain : {
										extent: 64
									},
									invoke : {
										action : function() {
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/enhance.js', '_blank',);
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
								top : 30,
								bottom : 30,
								left : 30,
								right : 30
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.TextArea({
									text: 'Illustrate how to decorate any entity using an external enhancer based on traits. This technique can be used for defaults or for overrides. Entity substitution will be permitted as well.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 0,
											bottom: 0,
											left: 0,
											right: 0
										}
									}
								}),
								new goodshow.TextArea({
									text: 'The colors of the icons in the list below were set externally using an enhancer. The text was transformed to uppercase too.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 20,
											bottom: 0,
											left: 0,
											right: 0
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Inline styling should never trump external styling, OK? I\'m looking at you CSS.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 20,
											bottom: 0,
											left: 0,
											right: 0
										}
									}
								}),
								new goodshow.Button({
									trait : 'enhanced-button',
									text : 'ENHANCED BUTTON',
									foreground : 0x000000,
									background : 0xFFFFFF,
									constrain : {
										extent : 'flow',
										margin : {
											top : 10,
											bottom : 10,
											left : 0,
											right : 0
										},
										padding : {
											top : 20,
											bottom : 20,
											left : 20,
											right : 20
										}
									},
									invoke : {
										action : function(entity) {
											application.layer.message.display(new example.layer.message.Panel({
												text : 'The button was pressed.'
											}));
										}.bind(this)
									}
								}),
								new goodshow.List({
									constrain : {
										extent : 'flex',
										margin : {
											top : 0,
											bottom : 0,
											left : 0,
											right : 0
										}
									},
									contain : {
										arranger : new goodshow.arranger.Vertical(),
										children : [
											new goodshow.ListItem({
												text : 'Enhanced List Item',
												trait : 'enhanced-list-item',
												invoke : {
													action : function() {
														application.layer.message.display(new example.layer.message.Panel({
															text : 'The list item was pressed.'
														}));
													}
												}
											}),
											new goodshow.ListItem({
												text : 'Enhanced List Item',
												trait : 'enhanced-list-item',
												invoke : {
													action : function() {
														application.layer.message.display(new example.layer.message.Panel({
															text : 'The list item was pressed.'
														}));
													}
												}
											})
										]
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
