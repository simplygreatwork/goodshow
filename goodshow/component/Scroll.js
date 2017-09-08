
goodshow.component.Scroll = goodshow.component.Component.extend({
   
   initialize: function(options) {
      
      goodshow.component.Component.prototype.initialize.call(this, Object.assign({
         axis: 'y',
         extent : 'height',
         bounds: [0, 0],
         delta: {
            x: 'deltaX',
            y: 'deltaY'
         }
      }, options || {}));
   },
   
   install: function(entity) {
      
      goodshow.component.Component.prototype.install.call(this);
      document.addEventListener('mousewheel', function(event) {
         if (entity.options.bounds.contains(event.x, event.y)) {
            var delta = event[this.delta[this.axis]]
            if (delta > 0) {
               var child = goodshow.Utility.children.last(entity);
               if (child && ((child.options.bounds[this.axis] + child.options.bounds[this.extent]) - child.pivot[this.axis]) > (entity.options.bounds[this.axis] + entity.options.bounds[this.extent])) {
                  this.scroll(entity, delta);
               }
            } else if (delta < 0) {
               var child = goodshow.Utility.children.first(entity);
               if (child && (child.options.bounds[this.axis] + child.pivot[this.axis]) > entity.options.bounds[this.axis]) {
                  this.scroll(entity, delta);
               }
            }
         }
      }.bind(this), false);
   },
   
   scroll : function(entity, delta) {
      
      goodshow.Utility.children.iterate(entity, function(child) {
         child.pivot[this.axis] = child.pivot[this.axis] + delta;
      }.bind(this));
   },
   
   draw: function(entity) {
      
      goodshow.component.Component.prototype.draw.call(this);
   }
});
