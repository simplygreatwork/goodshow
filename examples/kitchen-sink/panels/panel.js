
example.panels.panel.Panel = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x581845,
			constrain : {
				width: 250
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function() {
			var miller = this.parent;
			miller.toggle(new example.panels.panel.Two());
		}.bind(this));
	}
});

example.panels.panel.One = example.panels.panel.Panel.extend({
	
});

example.panels.panel.Two = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0x900C3F,
			constrain : {
				width: 200
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function() {
			var miller = this.parent;
			miller.toggle(new example.panels.panel.Three());
		}.bind(this));
	}
});

example.panels.panel.Three = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xC70039,
			constrain : {
				width: 300
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function() {
			var miller = this.parent;
			miller.toggle(new example.panels.panel.Four());
		}.bind(this));
	}
});

example.panels.panel.Four = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFF5733,
			constrain : {
				width: 200
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function() {
			var miller = this.parent;
			miller.toggle(new example.panels.panel.Five());
		}.bind(this));
	}
});

example.panels.panel.Five = goodshow.Panel.extend({
	
	initialize: function(options) {
		
		goodshow.Panel.prototype.initialize.call(this, Object.assign({
			background: 0xFFC30f,
			constrain : {
				width: 200
			}
		}, options || {}));
		this.interactive = true;
		this.on('mousedown', function() {
			var miller = this.parent;
			miller.toggle(new example.panels.panel.One());
		}.bind(this));
	}
});
