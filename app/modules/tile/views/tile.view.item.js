// tile.view.item.js
define( [ "app" ], function( App ) {

	'use strict';

  return Backbone.Marionette.ItemView.extend({

    triggers: {
      'tileItemViewRender': 'tile:itemView:render',
      'tileItemViewClick': 'tile:itemView:click'
    },
    tileSpriteSheet: "",

    attributes : function() {
    },

    initialize: function (options) {
      this.options = options;
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
      
      this.tileSpriteSheet = new createjs.SpriteSheet(_data);
    },

    render: function () {
      this._loadSpriteSheet();
      this.renderTile();

      this.triggerMethod(this.triggers.tileItemViewRender, this);
    },

    renderTile: function () {

      var _sprite = new createjs.Sprite(this.tileSpriteSheet);
      _sprite.gotoAndStop( this.model.get('frameId') );

      _sprite.x = this.model.get( 'posX' );
      _sprite.y = this.model.get( 'posY' );
      _sprite.alpha = this.model.get( 'alpha' );
      _sprite.visible = this.model.get( 'visible' );

      var _layerContent = this.model.get('layerContent');
      if( _layerContent ) {
        _layerContent.addChild(_sprite);
      }

      // Event click on one tile
      _sprite.on("click", function(event) {
        this.click(event, _sprite);
      }.bind(this) );

      // Event mouserover on one tile
      _sprite.on("mouseover", function(event) {
        this.mouseover(event, _sprite);
      }.bind(this) );

      // Event mouserover on one tile
      _sprite.on("mouseout", function(event) {
        this.mouseout(event, _sprite);
      }.bind(this) );

      if( App.env == "dev") {
        if( this.model.get( 'visible' ) == true ) {
          var text = new createjs.Text("[" + this.model.get( 'posX' ) + " - " + this.model.get( 'posY' ) + "]", "12px Arial", "#000");
          text.x = this.model.get( 'posX' ) + this.model.get( 'width' )/3;
          text.y = this.model.get( 'posY' ) + this.model.get( 'height' );
          text.textBaseline = "alphabetic";

          if( _layerContent ) {
            _layerContent.addChild(text);
          }
        }
      }
	  },

    click: function (event, _sprite) {
      console.info( "Click : [" + _sprite.x + " - " + _sprite.y + "]" );

      this.triggerMethod(this.triggers.tileItemViewClick, this);
    },

    mouseover: function(event, _sprite) {
      // TODO
      _sprite.alpha = 0.8;
      App.stage.update();
    },

    mouseout: function(event, _sprite) {
      // TODO
      _sprite.alpha = 1;
      App.stage.update();
    }

  });

});