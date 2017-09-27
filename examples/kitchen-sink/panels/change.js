
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/change.js', '_blank',);
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
									text : 'CHANGE BACKGROUND',
									invoke : {
										action : function(entity) {
											entity.options.background = 0xFF9900;
										}.bind(this)
									}
								}),
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
								new goodshow.Button({
									trait : 'basic-button',
									text : 'CHANGE EXTENT',
									constrain : {
										extent : 64
									},
									invoke : {
										action : function(entity) {
											entity.options.constrain.extent.value = 200;
										}.bind(this)		
									}
								}),
								new goodshow.Button({
									trait : 'basic-button',
									text : 'CHANGE PADDING',
									constrain : {
										extent : 'flow'
									},
									invoke : {
										action : function(entity) {
											entity.options.constrain.padding = {
												top : 30,
												bottom : 30,
												left : 30,
												right : 30
											};
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
							extent: 64
						}
					})
				]
			}
		}, options || {}));
	}
});
