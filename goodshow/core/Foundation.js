
goodshow = {};
goodshow.entity = {};
goodshow.component = {};
goodshow.control = {};

goodshow.defaults = function(options) {
    
    goodshow.Broadcast.publish('entity-defaults', options || {});
    return options;
};

goodshow.enhance = function(options) {
    
    goodshow.Broadcast.publish('entity-enhance', options || {});
    return options;
};
