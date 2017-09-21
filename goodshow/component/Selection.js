
goodshow.component.Selection = goodshow.component.Component.extend({
	
	initialize: function(options) {
		
		goodshow.component.Component.prototype.initialize.call(this, Object.assign({
			selection: [],
			quantity: 1,
			foreground: 0xFFFFFF,
			background: 0x4444FF
		}, options || {}));
	},
	
	install: function(entity) {
		
		goodshow.component.Component.prototype.install.call(this);
		entity.options.contain.children.forEach(function(child) {
			child.options.select = new goodshow.component.Select({
				foreground: this.foreground,
				background: this.background,
			});
			child.options.select.install(child);
		}.bind(this));
		goodshow.Broadcast.subscribe('select', function(options) {
			var related = goodshow.Utility.ancestor.has(options.entity, entity);
			if (related) {
				if (this.quantity !== 0) {
					if (this.quantity === 1) {
						if (this.selectable(entity, options.entity)) {
							this.selection.forEach(function(entity) {
								entity.options.select.select(false);
							});
							this.selection.splice(0, this.selection.length);
							options.entity.options.select.select(!options.entity.options.select.selected);
							this.selection.push(options.entity);
						}
					} else {
						options.entity.options.select.select(!options.entity.options.select.selected);
						this.selection.push(options.entity);
					}
				}
			}
		}.bind(this));
	},
	
	selectable : function(entity, item) {
		
		var result = false;
		if (this.selection) {
			if (this.selection.length === 0) {
				result = true;
			} else if (this.selection.length > 0) {
				if (this.selection[0] !== item) {
					result = true;
				}
			}
		} else {
			result = false;
		}
		return result;
	},
	
	draw: function(entity) {
		
		goodshow.component.Component.prototype.draw.call(this);
	},
	
	clear: function() {
		
		
	}
});
