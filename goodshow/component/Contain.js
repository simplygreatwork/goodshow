
goodshow.component.Contain = goodshow.component.Root.extend({
	
	initialize: function(options) {
		
		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
			arranger: new goodshow.arranger.Stack(),
			children: []
		}, options || {}));
	},

	proxy: function(entity) {

		return this;
	},
	
	install: function(entity) {
		
		goodshow.component.Root.prototype.install.call(this, entity);
		this.entity = entity;
		entity.removeChildren();
		this.children = this.children || [];
		this.children.forEach(function(child, index) {
			entity.addChild(child);
		}.bind(this));
	},

	draw: function(entity) {
		
		goodshow.component.Root.prototype.draw.call(this, entity);
		if (this.arranger) {
			this.arranger.arrange(entity);
		}
		entity.children.forEach(function(child, index) {
			if (child.draw) {
				child.draw();
			}
		}.bind(this));
	},

	invalidate: function() {

		goodshow.Broadcast.publish('arranger.invalidate', {
			entity: this.entity
		});
	},

	addChild: function(child) { // perhaps instead of this function: use another proxy

		this.children.push(child);
		this.entity.addChild(child);
	},

	removeChild: function(child) { // perhaps instead of this function: use another proxy

		goodshow.Utility.remove(this.children, child);
		this.entity.removeChild(child);
	}
});
