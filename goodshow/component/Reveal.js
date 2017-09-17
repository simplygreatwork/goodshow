
goodshow.component.Reveal = goodshow.component.Component.extend({
    
    initialize: function(options) {
        
		goodshow.component.Component.prototype.initialize.call(this, Object.assign({
		    direction : 'out',
			revealer: new goodshow.revealer.Extent()
		}, options || {}));
    },
    
    install: function(entity) {
        
        goodshow.component.Component.prototype.install.call(this);
        goodshow.Broadcast.subscribe('reveal', function(options) {
            if (entity.options.name == options.name) {
                var direction = options.direction;
                if ((direction != 'in') && (direction != 'out')) {
                    if (this.direction == 'in') {
                        direction = 'out';
                    } else {
                        direction = 'in';
                    }
                    this.direction = direction;
                }
                this.revealer.reveal(entity, direction);
            }
        }.bind(this));
    },
    
    draw: function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this);
    }
});
