
example.panels.image.Panel = goodshow.Panel.extend({

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
									text: 'Image',
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
								new goodshow.Image({
									constrain : {
										flex : 1,
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								}),
								new goodshow.Image({
									constrain : {
										flex : 1,
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								}),
								new goodshow.Image({
									constrain : {
										flex : 1,
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									path : '../assets/images/hydrocodone-pills.jpg'
								})
							]
						}
					}),
					new goodshow.Panel({
						name: 'footer',
						background: 0x3368d4,
						constrain : {
							height: 64
						}
					})
				]
			}
		}, options || {}));
	}
});
