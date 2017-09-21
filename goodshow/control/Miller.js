
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
			var old = this.secondary;
			goodshow.tween.alpha({
				entity : old,
				alpha : 0,
				duration : 200,
				finish : function() {
					goodshow.Utility.remove(this.stack.options.contain.children, old);
					this.stack.removeChild(old);
					this.stack.addChild(this.secondary = new goodshow.Panel({
						mask : {}
					}));
					entity.pivot.x = entity.options.constrain.extent.value;
					this.secondary.addChildAt(new goodshow.Miller({
						content: entity
					}), 0);
					this.secondary.draw();
					goodshow.tween.pivot({
						entity : entity,
						pivot : {
							x : 0,
							y : 0
						},
						finish : function() {
							entity.emit('entered');
						}.bind(this)
					});
					this.advanced = true;
				}.bind(this)
			});
		} else {
			entity.pivot.x = entity.options.constrain.extent.value;
			this.secondary.addChildAt(new goodshow.Miller({
				content: entity
			}), 0);
			this.secondary.draw();
			goodshow.tween.pivot({
				entity : entity,
				pivot : {
					x : 0,
					y : 0
				},
				finish : function() {
					entity.emit('entered');
				}.bind(this)
			});
			this.advanced = true;
		}
	},
	
	retreat: function() {
		
		var old = this.secondary;
		goodshow.tween.alpha({
			entity : old,
			alpha : 0,
			duration : 200,
			finish : function() {
				goodshow.Utility.remove(this.stack.options.contain.children, old);
				this.stack.removeChild(old);
				this.stack.addChild(this.secondary = new goodshow.Panel({
					mask : {}
				}));
				this.secondary.draw();
				this.advanced = false;
			}.bind(this)
		});
	},
	
	toggle: function(component) {
		
		if (this.advanced) {
			this.retreat();
		}
		else {
			this.advance(component);
		}
	}
});
