
goodshow.ListItem = goodshow.Panel.extend({

	initialize: function(options) {

		options = Object.assign({
			foreground: 'black',
			background: 0xFFFFFF,
		}, options || {});
		options.foreground = new goodshow.Value(options.foreground);
		options.background = new goodshow.Value(options.background);
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			constrain: {
				extent: 50,
				padding: {
					left: 10,
					right: 10
				}
			},
			contain: {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					this.icon = new goodshow.Label({
						name: 'list-item-avatar',
						text: '\uE838',
						foreground: 'white',
						fontFamily: 'Material Icons',
						fontSize: '30px',
						pivot: {
							x: -1,
							y: -4
						},
						constrain: {
							extent: 44
						},
						paint: {
							painters: [
								new goodshow.painter.Avatar({
									color: 0xffa500
								})
							],
							append: true
						}
					}),
					this.label = new goodshow.Label({
						name: 'list-item-text',
						text: options.text,
						foreground: options.foreground,
						align: 'left',
						constrain: {
							extent: 'flex',
							margin: {
								left: 10
							}
						}
					})
				]
			},
			mask: {},
			ripple: {
				color: 0x999999,
				maximum: 10
			},
			paint: {
				painters: [
					new goodshow.painter.Divider()
				]
			},
		}, options || {}));
	},

	draw: function() {

		goodshow.Panel.prototype.draw.call(this);
	}
});
