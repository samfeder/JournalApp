Journal.Views.PostsIndex = Backbone.View.extend({

  template: JST["index"],

  initialize: function() {
    this.superListen("remove",
                     "add",
                     "change:title",
                     "reset");
  },

  superListen: function() {
    var that = this;
    var eventArgs = [].slice.call(arguments);
    eventArgs.forEach(function(event){
      that.listenTo(that.collection, event, that.render);
    });
  },

  events: {
      "click button.destroy": "destroyPost",
      // "dblclick div.content": "beginEditing",
      // "submit form": "endEditing"
    },

  render: function(){
    var renderedContent = this.template({posts: this.collection});

    this.$el.html(renderedContent);

    return this;
  },

  destroyPost: function(event){
    event.preventDefault();
    var id = parseInt($(event.currentTarget).attr("data-id"));
    var post = Journal.Collections.posts.findWhere({id: id});

    post.destroy( {
      success:function(){
        Journal.Collections.posts.remove(post);
      }
    });

  }

});
