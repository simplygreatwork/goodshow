
goodshow.Miller = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			contain : {
				arranger: new goodshow.arranger.Horizontal(),
				children: [
					this.primary = options.content,
					this.stack = new goodshow.Panel({
						background: 0xCCCCCC,
						contain : {
							arranger: new goodshow.arranger.Stack(),
							children: [
								this.secondary = new goodshow.Panel({
									mask : {}
								})
							]
						}
					})
				]
			}
		}, options));
	},
	
	advance: function(entity) {
		
		if (this.advanced) {
			this.exit(this.secondary, function() {
				goodshow.Utility.remove(this.stack.options.contain.children, this.secondary);
				this.stack.removeChild(this.secondary);
				this.stack.addChild(this.secondary = new goodshow.Panel({
					mask : {}
				}));
				this.secondary.addChildAt(new goodshow.Miller({
					content: entity
				}), 0);
				this.secondary.draw();
				this.enter(entity, function() {
					goodshow.Broadcast.publish('entity-has-entered', {
						entity : goodshow.Utility.ancestor.find(entity, goodshow.Miller)
					});
				}.bind(this));
				this.advanced = true;
			}.bind(this));
		} else {
			this.secondary.addChildAt(new goodshow.Miller({
				content: entity
			}), 0);
			this.secondary.draw();
			this.enter(entity, function() {
				goodshow.Broadcast.publish('entity-has-entered', {
					entity : goodshow.Utility.ancestor.find(entity, goodshow.Miller)
				});
			}.bind(this));
			this.advanced = true;
		}
	},
	
	retreat: function() {
		
		this.exit(this.secondary, function() {
			goodshow.Utility.remove(this.stack.options.contain.children, this.secondary);
			this.stack.removeChild(this.secondary);
			this.stack.addChild(this.secondary = new goodshow.Panel({
				mask : {}
			}));
			this.secondary.draw();
			this.advanced = false;
		}.bind(this));
	},
	
	toggle: function(component) {
		
		if (this.advanced) {
			this.retreat();
		}
		else {
			this.advance(component);
		}
	},
	
	enter : function(entity, finish) {
		
		goodshow.tween.pivot({
			entity : entity,
			from : {
				x : entity.options.constrain.extent.value,
				y : 0,
			},
			to : {
				x : 0,
				y : 0
			},
			finish : function() {
				goodshow.Broadcast.publish('entity-has-entered', {
					entity : goodshow.Utility.ancestor.find(entity, goodshow.Miller)
				});
			}.bind(this)
		});
	},
	
	exit : function(entity, finish) {
		
		goodshow.tween.alpha({
			entity : entity,
			to : {
				alpha : 0
			},
			duration : 200,
			finish : finish
		});
	}
});
