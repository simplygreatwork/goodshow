
goodshow.Broadcast = {
	
	channels: {},
	
	subscribe: function(key, handler) {

		var channels = goodshow.Broadcast.channels;
		if (channels[key] == null) {
			channels[key] = [];
		}
		channels[key].push(handler);

		return {
			channel: channels[key],
			handler: handler
		};
	},
	
	unsubscribe: function(handlers) {
		
		var channels = goodshow.Broadcast.channels;
		var handler = handlers[0];
		var subscribes = channels[handler];
		var index = subscribes.length;
		while (index--) {
			if (subscribes[index] === handler[1]) {
				subscribes.splice(index, 1);
			}
		}
	},

	publish: function(key, data) {

		var channels = goodshow.Broadcast.channels;
		var subscribes = [];
		var channel = channels[key];
		if (channel) {
			subscribes = channel;
		}
		var index = subscribes.length;
		while (index--) {
			var object = [];
			if (data) {
				object = data;
			}
			subscribes[index].apply(goodshow.Broadcast, [object]);
		}
	}
};
