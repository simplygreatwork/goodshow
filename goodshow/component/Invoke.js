
goodshow.component.Invoke = goodshow.component.Component.extend({
    
    initialize : function(options) {
        
        goodshow.component.Component.prototype.initialize.call(this, options);
    },
    
    install : function(entity) {
        
		entity.interactive = true;
		entity.on('mousedown', function(event) {
			if (false) event.stopPropagation();
			this.action.call(this, entity);
			if (false) return true;
		}.bind(this));
    }
});
