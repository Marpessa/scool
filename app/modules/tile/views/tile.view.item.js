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
      content: ""
    },

    initialize: function (options) {
      this.ui.content = new createjs.Container();
      this._loadSpriteSheet(options.spriteSheetData);
    },

    _loadSpriteSheet: function(spriteSheetData) {
      this.ui.tileSpriteSheet = new createjs.SpriteSheet(spriteSheetData);
    },

    render: function () {
      this.renderTile();
      this.triggerMethod(this.triggers.tileItemViewRender, this);
    },

    renderTile: function () {
      var _sprite = new createjs.Sprite(this.ui.tileSpriteSheet);
      _sprite.gotoAndStop( this.model.get('frameId') );

      _sprite.x = this.model.get( 'posX' );
      _sprite.y = this.model.get( 'posY' );
      _sprite.alpha = this.model.get( 'alpha' );
      _sprite.visible = this.model.get( 'visible' );
      _sprite.cursor = "pointer";

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

      this.ui.content.addChild(_sprite);

      if( App.env == "dev") {
        if( this.model.get( 'visible' ) == true ) {
          var text = new createjs.Text("[" + this.model.get( 'layerIndex' ) + "/" + this.model.get( 'posX' ) + " - " + this.model.get( 'posY' ) + "]", "12px Arial", "#000");
          text.x = this.model.get( 'posX' ) + this.model.get( 'width' )/3;
          text.y = this.model.get( 'posY' ) + this.model.get( 'height' );
          text.textBaseline = "alphabetic";

          if(  this.model.get('visible') ) {
            this.ui.content.addChild(text);
          }
        }
      }
	  },

    click: function (event, _sprite) {
      this.triggerMethod(this.triggers.tileItemViewClick, this);
    },

    mouseover: function(event, _sprite) {
      if( this.model.get( 'walkable' ) ) {
        _sprite.filters = [
          new createjs.ColorFilter(0, 0, 0, 1, 0, 155, 0)
        ];
      } else {
        _sprite.filters = [
          new createjs.ColorFilter(0, 0, 0, 1, 255, 0, 0)
        ];
      }
      _sprite.cache(0,0,100,100);

      this.triggerMethod(this.triggers.tileItemViewMouseOver, this);
    },

    mouseout: function(event, _sprite) {
      _sprite.filters = [];
      _sprite.cache(0,0,100,100);

      this.triggerMethod(this.triggers.tileItemViewMouseOut, this);
    }

  });

});