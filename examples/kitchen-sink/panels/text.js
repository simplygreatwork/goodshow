
example.panels.text.Panel = goodshow.Panel.extend({

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
							height: 64
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
										width: 64
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
						background: 0xDDDDDD,
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.TextArea({
									name : 'two-card-b-text',
									text: window.lorem,
									font: '1.8em Roboto',
									foreground : '#333333',
									constrain : {
										flex : 1,
										margin: {
											top: 30,
											bottom: 30,
											left: 30,
											right: 30
										}
									}
								}),
							]
						}
					}),
					new goodshow.Panel({
						name: 'footer',
						background: 0x3368d4,
						constrain : {
							height: 64,
						}
					})
				]
			}
		}, options || {}));
	}
});
