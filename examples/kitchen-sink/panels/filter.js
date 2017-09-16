
example.panels.filter.Panel = goodshow.Panel.extend({
    
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
									text: 'Filter',
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
									}
								})
							]
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background: 0xDDDDDD,
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
