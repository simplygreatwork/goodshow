
goodshow.component.Scroll = goodshow.component.Root.extend({
   
   initialize: function(options) {
      
      goodshow.component.Root.prototype.initialize.call(this, Object.assign({
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
      
      goodshow.component.Root.prototype.install.call(this, entity);
      document.addEventListener('mousewheel', function(event) {
         if (entity.options.bounds.contains(event.x, event.y)) {
            if (this.scrollable(entity)) {
               var delta = event[this.delta[this.axis]];
               this.scroll(entity, delta);
               if (this.timeout) {
                  this.reset();
               }
               this.timeout = window.setTimeout(function() {
                  this.counter = 0;
                  this.interval = window.setInterval(function() {
                     delta = delta * 0.9;                     // very basic inertial easing
                     this.scroll(entity, delta);
                     if (this.counter > 50) {
                        this.reset();
                     }
                     this.counter++;
                  }.bind(this), 1);
               }.bind(this), 10);
            }
         }
      }.bind(this), false);
   },
   
   draw: function(entity) {
      
      goodshow.component.Root.prototype.draw.call(this, entity);
   },
   
   reset : function() {
      
      window.clearTimeout(this.timeout);
      window.clearInterval(this.interval);
      delete this.timeout;
      delete this.interval;
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
   },
   
   easeOutQuad: function(t) {
      return t * (2 - t);
   }
});
