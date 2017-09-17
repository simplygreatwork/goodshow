
example.panels.panel.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x581845,
			constrain : {
				extent: 250
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Two());
				}.bind(this)
			}
		}, options || {}));
	}
});

example.panels.panel.One = example.panels.panel.Panel.extend({
	
});

example.panels.panel.Two = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x900C3F,
			constrain : {
				extent: 200
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Three());
				}.bind(this)
			}
		}, options || {}));
	}
});

example.panels.panel.Three = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xC70039,
			constrain : {
				extent: 300
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Four());
				}.bind(this)
			}
		}, options || {}));
	}
});

example.panels.panel.Four = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFF5733,
			constrain : {
				extent: 200
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.Five());
				}.bind(this)
			}
		}, options || {}));
	}
});

example.panels.panel.Five = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFC30f,
			constrain : {
				extent: 200
			},
			invoke : {
				action : function() {
					var miller = goodshow.Utility.ancestor(this, goodshow.Miller);
					miller.toggle(new example.panels.panel.One());
				}.bind(this)
			}
		}, options || {}));
	}
});
