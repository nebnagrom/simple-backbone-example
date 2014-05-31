var Stuff = Backbone.Model.extend({
    defaults : {
        name : 'Box',
        created : 2011,
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
    events : {
        'click #b1' : 'b1',
        'click #trigEvent' : 'trigEvent'
    },
    initialize : function() {
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
    trigEvent : function() {
        this.trigger("myEvent");
    },
    addOne : function(stuff) {
        var templatedLine = this.stuffLineTemplate(stuff.attributes);
        this.$stuffUL.append(templatedLine);
    }
});

$(function() {

    // This starts backbone
    var sv = new StuffView();
    _.extend(sv, Backbone.Events);
    sv.on("myEvent", sv.b1)
});