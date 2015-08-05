// loader.model.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Model.extend({ 

  	defaults : function() {
    	return  {
								progressBarContainerWidth: 600,
								progressBarContainerHeight: 30,
								progressBarContainerPosX: 300,
								progressBarContainerPosY: 300,
						    progressBarWidth: 1,
						    progressBarHeight: 26,
						    progressBarPosX: 302,
						    progressBarPosY: 302,
						    progressBarMaxWidth: 596,
						    loadProgressLabelPosX: 1200/2,
						    loadProgressLabelPosY: 250,
							}
		},

		initialize: function () {
			
		}

  });

});