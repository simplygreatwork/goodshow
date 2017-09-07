
goodshow.component.Select = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, Object.assign({
            selected : false
        }, options || {}));
    },
    
    install : function(entity) {
        
        goodshow.component.Component.prototype.install.call(this);
        this.entity = entity;
		this.entity.interactive = true;
		this.entity.on('mousedown', function(event) {
            window.setTimeout(function() {
                this.select(! this.selected);
                goodshow.Broadcast.publish('select', {
                    entity : this.entity
                });
            }.bind(this), 500);
		}.bind(this));
    },
    
    draw : function(entity) {
        
        goodshow.component.Component.prototype.draw.call(this);
    },
    
    select : function(selected) {
        
        this.selected = selected;
        if (selected) {
            this.entity.options.background.wrap(0x4444FF);
            this.entity.options.foreground.wrap('white');
        } else {
            this.entity.options.background.unwrap();
            this.entity.options.foreground.unwrap();
        }
        this.entity.draw();
    }
});
