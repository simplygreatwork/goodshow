
example.panels.panels.One = goodshow.Panel.extend({
	
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
			miller.toggle(new example.panels.panels.Two());
		}.bind(this));
	}
});

example.panels.panels.Two = goodshow.Panel.extend({
	
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
			miller.toggle(new example.panels.panels.Three());
		}.bind(this));
	}
});

example.panels.panels.Three = goodshow.Panel.extend({
	
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
			miller.toggle(new example.panels.panels.Four());
		}.bind(this));
	}
});

example.panels.panels.Four = goodshow.Panel.extend({
	
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
			miller.toggle(new example.panels.panels.Five());
		}.bind(this));
	}
});

example.panels.panels.Five = goodshow.Panel.extend({
	
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
			miller.toggle(new example.panels.panels.One());
		}.bind(this));
	}
});
