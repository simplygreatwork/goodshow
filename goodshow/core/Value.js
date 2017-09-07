
goodshow.Value = Class.extend({
	
	initialize: function(value) {
		
		this.primary = value;
		this.secondary = undefined;
		this.wrapped = false;
	},
	
	wrap : function(value) {
		
		this.secondary = value;
		this.wrapped = true;
	},
	
	unwrap : function() {
		
		this.wrapped = false;
	},
	
	valueOf : function() {
		
		if (this.wrapped) {
			return this.secondary;
		} else {
			return this.primary;
		}
	}
});
