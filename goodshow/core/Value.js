
goodshow.Value = Class.extend({
	
	initialize: function(value) {
		
		this.value = value;
	},
	
	wrap : function(value) {
		
		this.wrapped = value;
	},
	
	unwrap : function() {
		
		delete this.wrapped;
	},
	
	valueOf : function() {
		
		if (this.wrapped === undefined) {
			return this.value;
		} else {
			return this.wrapped;
		}
	}
});
