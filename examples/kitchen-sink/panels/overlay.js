
example.panels.overlay.Panel = goodshow.Panel.extend({
    
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
									text: 'Overlay',
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
												pivot : {
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
												pivot : {
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
							height: 64,
						}
					})
				]
			}
		}, options || {}));
	}
});
