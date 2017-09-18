
example.panels.draw.Panel = goodshow.Panel.extend({
    
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
									text: 'Draw with a Vector Pen',
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
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background: 0xFFFFFF,
						contain : {
							arranger : null,
							children : [
								new goodshow.Panel({
									paint : {
										painters : [
											new goodshow.painter.Canvas({
												draw : function(graphics) {
													var pen = new goodshow.painter.Pen({
														graphics : graphics
													});
													graphics.beginFill(0x009900);
													if (false) graphics.lineStyle(3, 0x007700);		// issue: bad lines
													pen.goto(0, 0);
													pen.down(0).right(0).connect();
													pen.setAngle(28);
													for (var i = 0; i < 6; i++) {
														pen.turn(60, 10);
														pen.go(40);
													}
													graphics.endFill();
												}
											})
										]
									},
									position : {
										x : 100,
										y : 50
									},
									drag : {},
								}),
								new goodshow.Panel({
									paint : {
										painters : [
											new goodshow.painter.Canvas({
												draw : function(graphics) {
													var pen = new goodshow.painter.Pen({
														graphics : graphics
													});
													graphics.beginFill(0x009900);
													if (false) graphics.lineStyle(3, 0x007700);		// issue: bad lines
													pen.goto(0, 0);
													pen.down(0).right(0).connect();
													pen.setAngle(0);
													for (var i = 0; i < 4; i++) {
														pen.go(20).turn(90, 5).go(20).turn(90, 5).go(20).turn(-90, 5);
													}
													graphics.endFill();
												}
											})
										]
									},
									position : {
										x : 250,
										y : 200
									},
									drag : {},
								}),
								new goodshow.Panel({
									paint : {
										painters : [
											new goodshow.painter.Canvas({
												draw : function(graphics) {
													var pen = new goodshow.painter.Pen({
														graphics : graphics
													});
													graphics.beginFill(0x009900);
													if (false) graphics.lineStyle(3, 0x007700);		// issue: bad lines
													pen.goto(0, 0);
													pen.down(0).right(0).connect();
													pen.setAngle(0);
													for (var i = 0; i < 4; i++) {
														pen.go(40).turn(90, 5).go(20).turn(90, 5).go(20).turn(-90, 5);
													}
													graphics.endFill();
												}
											})
										]
									},
									position : {
										x : 100,
										y : 350
									},
									drag : {},
								}),
							]
						},
						mask : {}
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
