
goodshow.component.Edit = goodshow.component.Root.extend({
   
   initialize: function(options) {
      
      options = Object.assign({
         editable : new goodshow.Value(options.editable || true),
         inline : false
      }, options || {});
      goodshow.component.Root.prototype.initialize.call(this, options);
   },
   
   install: function(entity) {
      
      goodshow.component.Root.prototype.install.call(this, entity);
      entity.interactive = true;
      entity.on('mousedown', function(event) {
         if (this.editable == true) {                  // requires == not === because of goodshow.value.valueOf
            this.edit(entity);
         }
      }.bind(this));
   },
   
   edit : function(entity) {
      
      if (this.inline) {
			application.layer.message.display(new example.layer.message.Panel({
				text : 'Inline editing is coming up soon.'
			}));
      } else {
         var result = window.prompt('Edit', entity.text.text);
         if (result) {
            entity.text.text = result;
         }
      }
   },
   
   draw: function(entity) {
      
      goodshow.component.Root.prototype.draw.call(this, entity);
   }
});
