
window.goodshow = window.goodshow || {};
goodshow.painter = goodshow.painter || {};

goodshow.painter.Root = Class.extend({
	
	initialize: function(options) {
		
		Object.assign(this, options);
	},
	
	paint : function(entity) {},
	
	drawRectangle: function(graphics, rectangle, corner) {
		
		if (corner) {
			graphics.drawRoundedRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height, corner);
		} else {
			graphics.drawRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
		}
	}
});

goodshow.painter.Background = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color : 0xFFFFFF,
			alpha : 1
		}, options || {}));
	},
	
	paint : function(entity) {
		
		var color = entity.options.background;
		var alpha = entity.options.alpha;
		entity.beginFill(color, alpha);
		this.drawRectangle(entity, entity.options.bounds);
	}
});

goodshow.painter.Hover = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color : 0xFFFFFF,
			alpha : 1
		}, options || {}));
	},
	
	paint : function(entity) {
		
		var color = this.color;
		var alpha = this.alpha;
		entity.beginFill(color, alpha);
		this.drawRectangle(entity, entity.options.bounds);
	}
});

goodshow.painter.Select = goodshow.painter.Root.extend({						// dead code
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color : 0x6666FF,
			alpha : 1
		}, options || {}));
	},
	
	paint : function(entity) {
		
		if (entity.options.selected) {
			entity.beginFill(this.color, this.alpha);
			this.drawRectangle(entity, entity.options.bounds);
		}
	}
});

goodshow.painter.Circular = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color : 0xDDDDDD,
			alpha : 1
		}, options || {}));
	},
	
	paint : function(graphics) {
		
		graphics.beginFill(this.color);
		var bounds = graphics.options.bounds;
		graphics.drawCircle(bounds.x + (bounds.width / 2), bounds.y + (bounds.height / 2), bounds.width / 2);
	}
});

goodshow.painter.Avatar = goodshow.painter.Circular;

goodshow.painter.Divider = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
		goodshow.painter.Root.prototype.initialize.call(this, Object.assign({
			color : 0xE7E7E7
		}, options || {}));
	},
	
	paint : function(graphics) {
		
		graphics.beginFill(this.color);
		var bounds = graphics.options.bounds;
		graphics.drawRect(bounds.x, bounds.y, bounds.width, 0.75);
	}
});

goodshow.painter.Ripple = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
        this.options = Object.assign({
        	color : 0x999999
        }, options || {});
	},
	
	paint : function(entity) {
		
		var now = new Date().getTime();
		if (entity.options.ripple && entity.options.ripple.events) {
			var events = entity.options.ripple.events;
			events.forEach(function(event) {
				var diff = now - event.timeStamp;
				if (diff < 1000) {
					var alpha = 0.3 * ((1000 - diff) / 1000);
					var bounds = entity.options.bounds;
					var radius = (entity.options.ripple.radius || Math.max(bounds.width, bounds.height)) * (diff / 1000) * 1.1
					var position = event.position;
					entity.beginFill(this.options.color, alpha);
					entity.drawCircle(position.x, position.y, radius);
				}
			}.bind(this));
		}
	}
});

goodshow.painter.Shadow = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
        this.options = options;
	},
	
	paint : function(entity) {
		
		
	}
});

goodshow.painter.Canvas = goodshow.painter.Root.extend({
	
	initialize: function(options) {
		
        this.options = options;
	},
	
	paint : function(entity) {
		
		this.options.draw(entity);
	}
});

goodshow.painter.Pen = Class.extend({
	
	initialize: function(options) {
		
		PIXI.Container.call(this);
		Object.assign(this, options || {});
		this.disconnect();
		this.angle = -90;
		this.point = {
			x: 0,
			y: 0
		};
		this.origin();
		this.strokeStyle = '#000';
		this.strokeWidth = 1;
		this.fillStyle = '';
	},
	
	begin: function() {
		return this;
	},
    
	end: function() {
		return this;
	},

	connect: function() {

		this.connected = true;
		return this;
	},

	disconnect: function() {

		this.connected = false;
		return this;
	},

	goto: function(x, y) {

		this.point.x = x;
		this.point.y = y;
		if (this.connected == false) {
			this.graphics.moveTo(x, y);
		} else {
			this.graphics.lineTo(x, y);
		}
		return this;
	},

	jump: function(x, y) {

		var connected = this.connected;
		this.connected = true;
		this.goto(x, y);
		this.connected = connected;
		return this;
	},

	go: function(distance) {

		var radians = this.toRadians(this.angle);
		this.point.x = this.point.x + (distance * Math.cos(radians));
		this.point.y = this.point.y + (distance * Math.sin(radians));
		if (this.connected) {
			this.graphics.lineTo(this.point.x, this.point.y);
		} else {
			this.graphics.moveTo(this.point.x, this.point.y);
		}
		return this;
	},

	back: function(distance) {

		this.turn(-180);
		this.go(distance);
		this.turn(180);
		return this;
	},

	up: function(distance) {
		return this.goto(this.point.x, this.point.y - distance);
	},

	down: function(distance) {
		return this.goto(this.point.x, this.point.y + distance);
	},

	left: function(distance) {
		return this.goto(this.point.x - distance, this.point.y);
	},
	
	right: function(distance) {
		return this.goto(this.point.x + distance, this.point.y);
	},

	origin: function() {

		this.origin = {
			x: this.point.x,
			y: this.point.y
		}
		return this;
	},

	polar: function(distance, angle) {

		var radians = this.toRadians(angle + this.angle);
		this.point.x = this.origin.x + distance * Math.cos(radians);
		this.point.y = this.origin.y + distance * Math.sin(radians);
		if (this.connected) {
			this.graphics.lineTo(this.point.x, this.point.y);
		} else {
			this.graphics.moveTo(this.point.x, this.point.y);
		}
		return this;
	},

	toRadians: function(degrees) {
		return degrees * (Math.PI / 180.0);
	},

	setAngle: function(angle) {

		this.angle = angle - 90;
		return this;
	},

	turn: function(degrees, radius) {

		if (radius === undefined) {
			return this.turnNow(degrees);
		} else {
			return this.turnRounded(degrees, radius);
		}
	},

	turnNow: function(degrees) {

		this.angle = this.angle + degrees;
		this.angle = this.angle % 360;
		return this;
	},

	turnRounded: function(degrees, radius) {

		var anticlockwise = false;
		var direction = 90;
		if (degrees < 0) {
			anticlockwise = true;
			direction = -90;
		}
		var angle = goodshow.painter.PenUtility.shiftAngle(this.angle, direction);
		var center = goodshow.painter.PenUtility.translate(this.point, angle, radius);
		angle = goodshow.painter.PenUtility.shiftAngle(this.angle, 0);
		this.point = goodshow.painter.PenUtility.translate(center, angle, radius);
		angle = {
			begin: this.angle - direction,
			end: this.angle = goodshow.painter.PenUtility.shiftAngle(this.angle, degrees)
		};
		angle.end = angle.end - direction;
		var radians = {
			begin: goodshow.painter.PenUtility.toRadians(angle.begin),
			end: goodshow.painter.PenUtility.toRadians(angle.end),
		}
		this.graphics.arc(center.x, center.y, radius, radians.begin, radians.end, anticlockwise);
		return this;
	},

	retain: function() {

		this.states.push({
			x: this.point.x,
			y: this.point.y,
			angle: this.angle
		});
		return this;
	},

	recall: function() {

		var last = this.states.pop();
		this.angle = last.angle;
		return this.goto(this.point.x, this.point.y);
	},

	draw: function() {

		if (this.fillStyle) {
			this.fill();
		}
		if (this.strokeWidth) {
			this.stroke();
		}
		return this.begin();
	},

	fill: function() {

		return this;
	},

	fillStyle: function(fillStyle) {

		this.fillStyle = fillStyle;
		return this;
	},

	stroke: function() {

		return this;
	},

	strokeWidth: function(strokeWidth) {

		this.strokeWidth = strokeWidth;
		return this;
	},

	strokeStyle: function(strokeStyle) {

		this.strokeStyle = strokeStyle;
		return this;
	},
	
	text: function(string) {
		
		this.canvas.fillText(string, this.point.x, this.point.y);
		return this;
	},
	
	font: function(string) {
		
		this.canvas.font = string;
		return this;
	}

});

goodshow.painter.PenUtility = {
	
	translate: function(point, angle, distance) {

		var result = {};
		var radians = goodshow.painter.PenUtility.toRadians(angle);
		result.x = point.x + (distance * Math.cos(radians));
		result.y = point.y + (distance * Math.sin(radians));
		return result;
	},
	
	toRadians: function(degrees) {
		return degrees * (Math.PI / 180.0);
	},
	
	shiftAngle: function(angle, change) {
		
		return angle + change % 360;
	}
};
