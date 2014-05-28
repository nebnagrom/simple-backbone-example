var Game = Backbone.Model.extend({
    initialize : function() {
        alert("Oh hey! ");
//        var i = 1;
    },
    defaults : {
        name : 'Default title',
        releaseDate : 2011,
    }
});

// Create a new game
var portal = new Game({
    name : "Portal 2",
    releaseDate : 2011
});
// Create a new game
 var game2008 = new Game({ name: "2008 game", releaseDate: 2008});
// release will hold the releaseDate value -- 2011 here
var release = portal.get('releaseDate');

// Changes the name attribute
portal.set({
    name : "Portal 2 by Valve"
});

portal.save();

var GamesCollection = Backbone.Collection.extend({
    model : Game,
    old : function() {
      return this.filter(function(game) {
        return game.get('releaseDate') < 2009;
      });
    }
  });

var blah;
//alert("o");

var games = new GamesCollection
var whatGame = games.get(0);


GameView= Backbone.View.extend({
    tagName : "div",
    className: "game",
    render : function() {
        
        this.el.innerHTML = this.model.get('name');
      // code for rendering the HTML for the view
    }
  });

$(function () {
    'use strict';

    // kick things off by creating the `App`
    new GameView();
});