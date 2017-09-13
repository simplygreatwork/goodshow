
example.panels.change.Panel = goodshow.Panel.extend({
    
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
									text: 'Change',
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
						background: 0xDDDDDD,
						constrain : {
							padding : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						},
						contain : {
							arranger: new goodshow.arranger.Vertical(),
							children: [
								new goodshow.Button({
									trait : 'basic-button',
									text : 'CHANGE MARGIN',
									invoke : {
										action : function(entity) {
											entity.options.constrain.margin = {
												top : 10,
												bottom : 10,
												left : 10,
												right : 10
											};
										}.bind(this)
									}
								}),
								// new goodshow.Button({
								// 	trait : 'basic-button',
								// 	text : 'CHANGE PADDING',
								// 	visible : false,
								// 	invoke : {
								// 		action : function(entity) {
								// 			entity.options.constrain.padding = {
								// 				top : 10,
								// 				bottom : 10,
								// 				left : 10,
								// 				right : 10
								// 			};
								// 		}.bind(this)
								// 	}
								// }),
								new goodshow.Button({
									trait : 'basic-button',
									text : 'CHANGE BACKGROUND',
									invoke : {
										action : function(entity) {
											entity.options.background = 0xFF9900;
										}.bind(this)
									}
								}),
								new goodshow.Panel()
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
