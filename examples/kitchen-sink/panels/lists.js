
example.panels.lists.Panel = goodshow.Panel.extend({
    
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
									text: 'Lists',
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
						},
					}),
					new goodshow.Panel({
						name: 'content',
						background : 0xFFFFFF,
						constrain : {
							flex : 1,
							margin : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
						},
						contain : {
							arranger : new goodshow.arranger.Vertical(),
							children : [
								new goodshow.ListItem({
									text : 'One',
									invoke : {
										action : function() {
											console.log('one');
										}
									}
								}),
								new goodshow.ListItem({
									text : 'Two',
									invoke : {
										action : function() {
											console.log('two');
										}
									}
								}),
								new goodshow.ListItem({
									text : 'Three',
									invoke : {
										action : function() {
											console.log('three');
										}
									}
								}),
								new goodshow.ListItem({
									text : 'Four',
									invoke : {
										action : function() {
											console.log('four');
										}
									}
								}),
								new goodshow.ListItem({
									text : 'Five',
									invoke : {
										action : function() {
											console.log('five');
										}
									}
								})
							]
						},
						paint : {
							painters : [
								new goodshow.painter.Background({
									color : 0xFFFFFF,
									alpha : 1
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
