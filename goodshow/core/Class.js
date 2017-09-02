
Class = {
	
	extend: function(options, inClass) {
		
		var superProto = this.prototype || Class;
		if (inClass) {
			superProto = inClass.prototype;
		}
		var proto = Object.create(superProto);
		Class.copy(options, proto);
		var initializer = proto.initialize;
		if (!(initializer instanceof Function)) {
			throw new Error('You must define a method "initialize"');
		}
		initializer.prototype = proto;
		initializer.super = superProto;
		initializer.extend = this.extend;
		
		return initializer;
	},
	
	copy: function(source, target) {
		
		Object.getOwnPropertyNames(source).forEach(function(propName) {
			Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
		});

		return target;
	}
};
