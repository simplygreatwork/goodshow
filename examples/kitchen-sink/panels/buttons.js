
example.panels.buttons.Panel = goodshow.Panel.extend({
    
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Stack(),
				children: [
					new goodshow.Panel({
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
												text: 'Buttons',
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
					}),
					new goodshow.Panel({
						name : 'overlay',
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.Panel(),
								new goodshow.Panel({
									constrain : {
										height : 80,
									},
									contain : {
										arranger : new goodshow.arranger.Horizontal(),
										children : [
											new goodshow.Panel(),
											new goodshow.Panel({
												constrain : {
													width : 80
												},
												contain : {
													arranger : new goodshow.arranger.Vertical(),
													children : [
                                          new goodshow.Floater({
                                          	constrain : {
                                          		flex : 1,
                                          		margin : {
                                          			top : 24,
                                          			bottom : 0,
                                          			left : 10,
                                          			right : 10
                                          		}
                                          	},
															background : 0xff4281,
															foreground : 0xFFFFFF,
															font: '36px Material Icons',
															text : '\uE145',
															pivot : {
																y : -5
															},
															invoke : {
																action : function() {
																	console.log('Floater invoked.');
																}
															}
                                          })
													]
												}
											})
										]
									}
								}),
								new goodshow.Panel({
									constrain : {
										height : 80
									}
								}),
							]
						},
					})
				]
			}
		}, options || {}));
	}
});
