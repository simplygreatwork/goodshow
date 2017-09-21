
goodshow.component.Invoke = goodshow.component.Component.extend({

   initialize: function(options) {
      
      options = Object.assign({
         enabled : new goodshow.Value(options.enabled || true)
      }, options || {});
      goodshow.component.Component.prototype.initialize.call(this, options);
   },
   
   install: function(entity) {
      
      entity.interactive = true;
      entity.on('mousedown', function(event) {
         if (this.enabled == true) {                  // requires == not === because of goodshow.value.valueOf
            this.action.call(this, entity);
         }
      }.bind(this));
   }
});
