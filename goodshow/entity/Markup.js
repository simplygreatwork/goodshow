
goodshow.entity.Markup = Class.extend({
	
	initialize: function(options) {
		
		this.options = Object.assign({
            
		}, options || {});
		this.resolve();
		this.install();
	},
	
	resolve : function() {
		
	},
	
	proxy : function(object, entity) {
		
	},
	
	install : function() {
		
	},
	
    uninstall : function(entity) {
        
    },
	
	draw: function() {
		
	}
});
