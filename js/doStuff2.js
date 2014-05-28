var Stuff = Backbone.Model.extend({
    defaults : {
        name : 'Box',
        created : 2011,
    },
    validate : function(attrs, options) {
        if (attrs.name.length < 3) {
            return "name must be longer than 3";
        }
    }
});

var StuffStore = Backbone.Collection.extend({
    model : Stuff
});

var stuffs = new StuffStore();

var globalJQ = $;

StuffView = Backbone.View.extend({
    el : '#mine',
    stuffLineTemplate : _.template(globalJQ('#stuff-template').html()),
    render : function() {

        alert("rendering");
        // this.el.innerHTML = this.model.get('name');
        // code for rendering the HTML for the view
        return this;
    },
    events : {
        'click #b1' : 'b1'
    },
    initialize : function() {
        // render();
        this.$stuffUL = this.$('#stuffList');
        this.listenTo(stuffs, 'add', this.addOne);
    },
    b1 : function() {

        var supName = $('#nameIn').val();
        var supCreated = $('#yearIn').val()
        var s1 = new Stuff({
            name : supName,
            created : supCreated
        });

        stuffs.add(s1);
    },
    addOne : function(stuff) {
        var templatedLine = this.stuffLineTemplate(stuff.attributes);
        this.$stuffUL.append(templatedLine);
    }
});

$(function() {
    'use strict';

    // kick things off by creating the `App`
    new StuffView();
});