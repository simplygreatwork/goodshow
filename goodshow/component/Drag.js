
goodshow.component.Drag = goodshow.component.Component.extend({
    
    initialize: function(options) {
        
		goodshow.component.Component.prototype.initialize.call(this, Object.assign({
			boundary: new PIXI.Rectangle(0, 0, 0, 0)
		}, options || {}));
    },
    
    install: function(entity) {
        
        goodshow.component.Component.prototype.install.call(this, entity);
        entity.interactive = true;
        entity.on('pointerdown', function(event) {
            this.data = event.data;
            var position = JSON.parse(JSON.stringify(this.data.getLocalPosition(entity.parent)));
            this.offset = {
                x : position.x - entity.position.x,
                y : position.y - entity.position.y,
            }
            this.dragging = true;
        }.bind(this));
        entity.on('pointerup', function() {
            this.dragging = false;
            this.data = null;
        }.bind(this));
        entity.on('pointerupoutside', function() {
            this.dragging = false;
            this.data = null;
        }.bind(this));
        entity.on('pointermove', function() {           // todo: why does the painted graphic snap back?
            if (this.dragging) {
                var position = this.data.getLocalPosition(entity.parent);
                entity.options.bounds.x = -(this.offset.x - position.x);
                entity.options.bounds.y = -(this.offset.y - position.y);
                entity.position.x = entity.options.bounds.x;
                entity.position.y = entity.options.bounds.y;
            }
        }.bind(this));
    },
    
    draw: function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this, entity);
    }
});
