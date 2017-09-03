
goodshow.ListItem = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			constrain : {
				height : 50
			},
			contain : {
				arranger : new goodshow.arranger.Horizontal(),
				children : [
					this.icon = new goodshow.Label({
						name : 'list-item-avatar',
						text: '\uE838',
						foreground: 'white',
						font: '30px Material Icons',
						pivot : {
							x : -1,
							y : -4
						},
						constrain : {
							width : 44
						},
						paint : {
							painters : [
								new goodshow.painter.Avatar({
									color : 0xffa500
								})
							],
							append : true
						},
					}),
					this.label = new goodshow.Label({
						name : 'list-item-text',
						background : 0xFFFFFF,
						text : options.text,
						align : 'left',
						constrain : {
							flex : 1,
							margin : {
								left : 10
							},
						},
					})
				]
			},
			ripple : {
				maximum : 10
			},
			mask : {},
			paint : {
				painters : [
					new goodshow.painter.Ripple({})
				],
				append : true
			}
		}, options || {}));
	},
	
	draw : function() {
		
	    goodshow.Panel.prototype.draw.call(this);
	}
});
