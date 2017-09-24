
example.panels.card.Panel = goodshow.Panel.extend({
   
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
									text: 'Card',
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
								})
							]
						}
					}),
					new goodshow.Panel({
						name: 'content',
						background: 0xDDDDDD,
						constrain : {
							extent : 'flex',
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
										extent : 'flex',
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
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
														top: 15,
														bottom: 15,
														left: 15,
														right: 15
													}
												}
											}),
										]
									}
								}),
								new goodshow.Card({
									constrain : {
										extent : 'flex',
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
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
										extent : 'flex',
										margin : {
											top : 10,
											bottom : 10,
											left : 10,
											right : 10
										}
									},
									contain : {
										arranger: new goodshow.arranger.Vertical(),
										children: [
											new goodshow.TextArea({
												name : 'two-card-b-text',
												text: window.lorem,
												fontFamily: 'Roboto',
												fontSize: '1.8em',
												foreground : '#333333',
												constrain : {
													extent : 'flex',
													margin: {
														top: 15,
														bottom: 15,
														left: 15,
														right: 15
													}
												}
											}),
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
							extent: 64,
						}
					})
				]
			}
		}, options || {}));
	}
});
