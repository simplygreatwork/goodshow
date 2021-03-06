
example.panels.overlay.Panel = goodshow.Panel.extend({
	
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
									text: 'Overlay',
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
											window.open('https://github.com/simplygreatwork/goodshow/blob/master/examples/kitchen-sink/panels/overlay.js', '_blank',);
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
									text : 'OPEN DIALOG',
									invoke : {
										action : function() {
											application.layer.dialog.toggle();
										}
									}
								}),
								new goodshow.Button({
									trait : 'basic-button',
									text : 'OPEN LEFT DRAWER',
									invoke : {
										action : function() {
											goodshow.tween.pivot({
												entity : application.layer.drawer.drawer.left,
												from : {
													x : application.layer.drawer.drawer.left.pivot.x,
													y : 0
												},
												to : {
													x : 0,
													y : 0
												}
											});
										}
									}
								}),
								new goodshow.Button({
									trait : 'basic-button',
									text : 'OPEN RIGHT DRAWER',
									invoke : {
										action : function() {
											goodshow.tween.pivot({
												entity : application.layer.drawer.drawer.right,
												from : {
													x : application.layer.drawer.drawer.right.pivot.x,
													y : 0
												},
												to : {
													x : 0,
													y : 0
												}
											});
										}
									}
								}),
								new goodshow.Button({
									trait : 'basic-button',
									text : 'SHOW MESSAGE',
									invoke : {
										action : function(entity) {
											if (this.shown === undefined) {
												application.layer.message.display(new example.layer.message.Panel({
													text : 'All you need is love.'
												}));
												this.shown = true;
											} else {
												application.layer.message.display(new example.layer.message.Panel({
													text : 'Love is all you need.'
												}));
											}
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
