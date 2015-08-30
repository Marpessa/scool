// tile.view.collection.js
define( [
  "app",
  "modules/tile/views/tile.view.item"
], function( App, ItemView ) {

	'use strict';

  return Backbone.Marionette.CollectionView.extend({

    triggers: {
      'tileCollectionItemViewRender': 'tile:collection:itemView:render',
      'tileCollectionItemViewClick': 'tile:collection:itemView:click',
      'tileCollectionItemViewMouseOver': 'tile:collection:itemView:mouseover',
      'tileCollectionItemViewMouseOut': 'tile:collection:itemView:mouseout',
      'tileCollectionViewRender': 'tile:collectionView:render',
    },
    childEvents: {
      'tile:itemView:render': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionItemViewRender, childItem);
      },
      'tile:itemView:click': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionItemViewClick, childItem);
      },
      'tile:itemView:mouseover': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionItemViewMouseOver, childItem);
      },
      'tile:itemView:mouseout': function (childItem) {
        this.triggerMethod(this.triggers.tileCollectionItemViewMouseOut, childItem);
      }
    },
    childView: ItemView,
    childViewOptions: {
      spriteSheetData: {}
    },
    collection: "",

  	initialize: function(options) {
	    this.collection = options.Collection;
	  },

    getChildView: function(item) {
      return ItemView;
    },

    // TODO Change variables in code to move into model // TODO : Not very good to use childViewOptions to pass data to the child // To study...
    loadSpriteSheet: function(App) {
      // Load Tiles Sprites
      var _data = {
        images: [App.queue.getResult( "map_0_0" )],
        frames: [
          // x, y, width, height, imageIndex*, regX*, regY*
          [100, 0, 100, 100],
          [200, 0, 100, 100],
          [300, 0, 100, 100],
          [0, 100, 100, 100],
          [100, 100, 100, 100],
          [200, 100, 100, 100],
          [300, 100, 100, 100],
          [0, 200, 100, 100],
          [100, 200, 100, 100]
        ],
        animations: {
          "frame_0": 0,
          "frame_1": 1,
          "frame_2": 2,
          "frame_3": 3,
          "frame_4": 4,
          "frame_5": 5,
          "frame_6": 6,
          "frame_7": 7,
          "frame_8": 8
        }
      };
      
      this.childViewOptions.spriteSheetData = _data;
    },

  	onRender: function() {
      this.triggerMethod(this.triggers.tileCollectionViewRender, this);
  	}

  });

});