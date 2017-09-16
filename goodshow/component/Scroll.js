goodshow.component.Scroll = goodshow.component.Component.extend({

   initialize: function(options) {

      goodshow.component.Component.prototype.initialize.call(this, Object.assign({
         axis: 'y',
         extent: 'height',
         direction: {
            north: 'top',
            south: 'bottom'
         },
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
            var delta = event[this.delta[this.axis]];
            if (this.scrollable(entity)) {
               this.scroll(entity, delta);
            }
         }
      }.bind(this), false);
      document.addEventListener('mouseup', function(event) {
         if (entity.options.bounds.contains(event.x, event.y)) {
            if (false) console.log('mouseup');
            // https://www.npmjs.com/package/wheel-inertia
         }
      }.bind(this), false);
   },

   draw: function(entity) {

      goodshow.component.Component.prototype.draw.call(this);
   },

   scroll: function(entity, delta) {

      if (delta > 0) {
         var child = goodshow.Utility.children.last(entity); // potential issue here: lowest and not last
         if (child) {
            var afford = ((child.options.bounds[this.axis] + child.options.bounds[this.extent] - child.pivot[this.axis]) - (entity.options.bounds[this.axis] + entity.options.bounds[this.extent] - entity.options.constrain.padding[this.direction.south]));
            if (delta > afford) delta = afford;
            this.scrollBy(entity, delta);
         }
      }
      else if (delta < 0) {
         var child = goodshow.Utility.children.first(entity); // potential issue here: highest and not first
         if (child) {
            var afford = ((child.options.bounds[this.axis] - child.pivot[this.axis]) - (entity.options.bounds[this.axis] + entity.options.constrain.padding[this.direction.north]));
            if (delta < afford) delta = afford;
            this.scrollBy(entity, delta);
         }
      }
   },

   easeOutQuad: function(t) {
      return t * (2 - t);
   },

   scrollable: function(entity) {

      var result = false;
      var child = goodshow.Utility.children.last(entity);
      if (child && (child.options.bounds[this.axis] + child.options.bounds[this.extent]) > (entity.options.bounds[this.axis] + entity.options.bounds[this.extent])) {
         result = true;
      }
      return result;
   },

   scrollBy: function(entity, delta) {

      goodshow.Utility.children.iterate(entity, function(child) {
         child.pivot[this.axis] = child.pivot[this.axis] + delta;
      }.bind(this));
   }
});
