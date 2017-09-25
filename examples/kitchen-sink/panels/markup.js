
example.panels.markup.Panel = goodshow.Panel.extend({
   
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			name: 'markup-panel',
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
									text: 'Markup',
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
									}
								})
							]
						},
					}),
					this.markup = new goodshow.Markup({
						name: 'markup-content',
						url : '../assets/templates/index.html',
						constrain : {
							margin : {
								top : 20,
								bottom : 20,
								left : 20,
								right : 20
							}
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
	},
	
	draw : function() {
		
		goodshow.Panel.prototype.draw.call(this);
		var miller = goodshow.Utility.ancestor.find(this, goodshow.Miller);
		if (miller) {
			miller.once('has-entered', function() {
				this.markup.options.markup.element.style.display = 'block';
			}.bind(this));
		}
	}
});
