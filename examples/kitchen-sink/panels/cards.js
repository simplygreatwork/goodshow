
example.panels.cards.Panel = goodshow.Panel.extend({
    
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
									text: 'Cards',
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
						}
					}),
					new goodshow.Panel({
						name: 'content',
						background: 0xDDDDDD,
						constrain : {
							flex : 1,
							padding : {
								top : 12,
								bottom : 12,
								left : 12,
								right : 12
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children : [
								new goodshow.Card({
									constrain : {
										flex : 1,
										margin : {
											top : 6,
											bottom : 6,
											left : 6,
											right : 6
										}
									},
									contain : {
										arranger: new goodshow.arranger.Vertical(),
										children : [
											new goodshow.Panel({
												background : 0xFFFFFF
											})
										]
									}
								}),
								new goodshow.Card({
									constrain : {
										flex : 1,
										margin : {
											top : 6,
											bottom : 6,
											left : 6,
											right : 6
										}
									},
									contain : {
										arranger: new goodshow.arranger.Vertical(),
										children : [
											new goodshow.Panel({
												background : 0xFFFFFF
											})
										]
									}
								}),
								new goodshow.Card({
									constrain : {
										flex : 1,
										margin : {
											top : 6,
											bottom : 6,
											left : 6,
											right : 6
										}
									},
									contain : {
										arranger: new goodshow.arranger.Vertical(),
										children : [
											new goodshow.Panel({
												background : 0xFFFFFF
											})
										]
									}
								})

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
