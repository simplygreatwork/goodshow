
example.panels.flow.Panel = goodshow.Panel.extend({
	
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
									text: 'Flow',
									foreground: 'white',
									align : 'left',
									constrain : {
										flex : 1,
										margin: {
											left: 10
										}
									}
								}),
								new goodshow.Label({
									name: 'header-menu',
									text: '\uE5d4',
									foreground: 'white',
									font: '24px Material Icons',
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
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xFFEEEE,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: window.lorem,
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xEEFFEE,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Need to use two nested vertical arrangers to fully test this.',
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xEEEEFF,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Content which stacks vertically will reposition and expand their containers.',
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xFFEEEE,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: window.lorem,
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xEEFFEE,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Need to use two nested vertical arrangers to fully test this.',
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xEEEEFF,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Content which stacks vertically will reposition and expand their containers.',
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xFFEEEE,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: window.lorem,
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xEEFFEE,
									constrain : {
										flex : null,
										margin: {
											top: 5,
											bottom: 5
										}
									}
								}),
								new goodshow.TextArea({
									text: 'Need to use two nested vertical arrangers to fully test this.',
									font: '1.8em Roboto',
									foreground : '#333333',
									background : 0xEEEEFF,
									constrain : {
										flex : null,
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
