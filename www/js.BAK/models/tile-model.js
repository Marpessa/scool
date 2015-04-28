/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Tile Model
	// ----------

	app.Tile = Backbone.Model.extend({

		defaults : function() {
      return {
	              width: 32,
	              height: 32,
	              rotate: 45, 
	              // -webkit-transform: rotateX(45deg) rotateY(0deg) rotateZ(0deg) translate3d(-460px, -97px, -210px);
	              // -webkit-transform-style: preserve-3d;
	              // -moz-transform: rotateX(71deg) rotateY(0deg) rotateZ(0deg) translate3d(-460px, -97px, -210px);
	              // -moz-transform-style: preserve-3d;
	              positionX : 0,
	              positionY: 0
            }
    }
    
	});
})();