
example.panels.markup.Panel = goodshow.Panel.extend({
    
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
									text: 'Markup',
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
									}
								})
							]
						},
					}),
					new goodshow.Markup({
						name: 'markup-content',
						path : 'http://'
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