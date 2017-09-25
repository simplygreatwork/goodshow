
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
								new goodshow.List({
									constrain : {
										extent : 'flex',
										margin : {
											top : 40,
											bottom : 0,
											left : 0,
											right : 0
										}
									},
									contain : {
										arranger : new goodshow.arranger.Vertical(),
										children : [
											new goodshow.ListItem({
												text : 'One',
												trait : 'customized-list-item',
												invoke : {
													action : function() {
														console.log('one');
													}
												}
											}),
											new goodshow.ListItem({
												text : 'Two',
												trait : 'customized-list-item',
												invoke : {
													action : function() {
														console.log('two');
													}
												}
											}),
											new goodshow.ListItem({
												text : 'Three',
												trait : 'customized-list-item',
												invoke : {
													action : function() {
														console.log('three');
													}
												}
											})
										]
									}
								}),
							]
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
