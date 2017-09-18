
example.panels.reveal.Panel = goodshow.Panel.extend({
	
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
									text: 'Reveal',
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
											goodshow.Broadcast.publish('reveal', {
												name : 'panel'
											});
										}.bind(this)
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background: 0xFFFFFF,
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Panel({
									name : 'panel',
									background : 0x3368d4,
									constrain : {
										extent : 0
									},
									reveal : {
										revealer : new goodshow.revealer.Extent()
									}
								}),
								new goodshow.TextArea({
									text: 'A reveal animates an entity into view by changing the pivot, extent, or alpha.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 30,
											bottom: 0,
											left: 30,
											right: 30
										}
									}
								}),
								new goodshow.TextArea({
									text: 'The concept is that miller panels reveal inline panels, buttons reveal dialogs, buttons reveal inline expandable content and menus, tabs reveal inline content regions. Reveal is a component like painters and arrangers.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 30,
											bottom: 0,
											left: 30,
											right: 30
										}
									}
								}),
								new goodshow.TextArea({
									text: 'The menu button in the toolbar above is a very basic example of a revealer changing extent.',
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flow',
										margin: {
											top: 30,
											bottom: 30,
											left: 30,
											right: 30
										}
									}
								})
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
