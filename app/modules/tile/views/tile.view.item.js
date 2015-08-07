// tile.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    template: false,
    triggers: {
      'tileItemViewRender': 'tile:itemView:render',
      'tileItemViewClick': 'tile:itemView:click',
      'tileItemViewMouseOver': 'tile:itemView:mouseover',
      'tileItemViewMouseOut': 'tile:itemView:mouseout'
    },
    ui: {
      tileSpriteSheet: "",
    },
    sprite: "",

    initialize: function (options) {
    },

    _loadSpriteSheet: function() {
      // Load Tiles Sprites // TODO Change variables in code to move into model
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
      
      this.ui.tileSpriteSheet = new createjs.SpriteSheet(_data);
    },

    render: function () {
      this._loadSpriteSheet();
      this.renderTile();

      this.triggerMethod(this.triggers.tileItemViewRender, this);
    },

    renderTile: function () {

      this.sprite = new createjs.Sprite(this.ui.tileSpriteSheet);
      this.sprite.gotoAndStop( this.model.get('frameId') );

      this.sprite.x = this.model.get( 'posX' );
      this.sprite.y = this.model.get( 'posY' );
      this.sprite.alpha = this.model.get( 'alpha' );
      this.sprite.visible = this.model.get( 'visible' );
      this.sprite.cursor = "pointer";

      var _layerContent = this.model.get('layerContent');

      if( _layerContent ) {
        _layerContent.addChild(this.sprite);
      }

      // Event click on one tile
      this.sprite.on("click", function(event) {
        this.click(event, this);
      }.bind(this) );

      // Event mouserover on one tile
      this.sprite.on("mouseover", function(event) {
        this.mouseover(event, this);
      }.bind(this) );

      // Event mouserover on one tile
      this.sprite.on("mouseout", function(event) {
        this.mouseout(event, this);
      }.bind(this) );

      if( App.env == "dev") {
        if( this.model.get( 'visible' ) == true ) {
          var text = new createjs.Text("[" + this.model.get( 'posX' ) + " - " + this.model.get( 'posY' ) + "]", "12px Arial", "#000");
          text.x = this.model.get( 'posX' ) + this.model.get( 'width' )/3;
          text.y = this.model.get( 'posY' ) + this.model.get( 'height' );
          text.textBaseline = "alphabetic";

          if( _layerContent && this.model.get('visible') ) {
            _layerContent.addChild(text);
          }
        }
      }
	  },

    click: function (event, _this) {
      console.info( "Click : [" + _this.sprite.x + " - " + _this.sprite.y + "]" );
      this.triggerMethod(this.triggers.tileItemViewClick, this);
    },

    mouseover: function(event, _this) {
      _this.sprite.filters = [
        new createjs.ColorFilter(0, 0, 0, 1, 0, 155, 0)
      ];
      _this.sprite.cache(0,0,100,100);

      this.triggerMethod(this.triggers.tileItemViewMouseOver, this);
    },

    mouseout: function(event, _this) {
      _this.sprite.filters = [];
      _this.sprite.cache(0,0,100,100);

      this.triggerMethod(this.triggers.tileItemViewMouseOut, this);
    }

  });

});