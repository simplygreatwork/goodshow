
example.panels.text.Panel = goodshow.Panel.extend({

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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/text.js', '_blank',);
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
								new goodshow.TextArea({
									text: window.lorem,
									fontFamily: 'Roboto',
									fontSize: '1.8em',
									foreground : '#333333',
									constrain : {
										extent : 'flex',
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
							extent: 64
						}
					})
				]
			}
		}, options || {}));
	}
});
