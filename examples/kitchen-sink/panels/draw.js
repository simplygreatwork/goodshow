
example.panels.draw.Panel = goodshow.Panel.extend({
    
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
									text: 'Draw: Pen Vector',
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
						paint : {
							painters : [
								new goodshow.painter.Canvas({
									draw : function(graphics) {
										var pen = new goodshow.painter.Pen({
											graphics : graphics
										});
										graphics.beginFill(0x009900);
										if (false) graphics.lineStyle(3, 0x007700);		// issue: bad lines
										pen.goto(graphics.options.bounds.x, graphics.options.bounds.y);
										pen.down(100).right(150).connect();
										pen.setAngle(28);
										for (var i = 0; i < 6; i++) {
											pen.turn(60, 10);
											pen.go(40);
										}
										graphics.endFill();
									}
								}),
								new goodshow.painter.Canvas({
									draw : function(graphics) {
										var pen = new goodshow.painter.Pen({
											graphics : graphics
										});
										graphics.beginFill(0x009900);
										if (false) graphics.lineStyle(3, 0x007700);		// issue: bad lines
										pen.goto(graphics.options.bounds.x, graphics.options.bounds.y);
										pen.down(300).right(100).connect();
										pen.setAngle(0);
										for (var i = 0; i < 4; i++) {
											pen.go(20).turn(90, 5).go(20).turn(90, 5).go(20).turn(-90, 5);
										}
										graphics.endFill();
									}
								}),
								new goodshow.painter.Canvas({
									draw : function(graphics) {
										var pen = new goodshow.painter.Pen({
											graphics : graphics
										});
										graphics.beginFill(0x009900);
										if (false) graphics.lineStyle(3, 0x007700);		// issue: bad lines
										pen.goto(graphics.options.bounds.x, graphics.options.bounds.y);
										pen.down(300).right(300).connect();
										pen.setAngle(0);
										for (var i = 0; i < 4; i++) {
											pen.go(40).turn(90, 5).go(20).turn(90, 5).go(20).turn(-90, 5);
										}
										graphics.endFill();
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
