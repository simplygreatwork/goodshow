
goodshow.component.Reveal = goodshow.component.Root.extend({
    
    initialize: function(options) {
        
		goodshow.component.Root.prototype.initialize.call(this, Object.assign({
		    direction : 'out',
			revealer: new goodshow.revealer.Extent()
		}, options || {}));
    },
    
    install: function(entity) {
        
        goodshow.component.Root.prototype.install.call(this, entity);
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
        
        goodshow.component.Root.prototype.draw.call(this, entity);
    }
});
