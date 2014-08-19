Journal.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id": "postShow"

  },

  postShow: function(id){
    $("#content").empty();
    Journal.Collections.posts.fetch({
      success: function(){
        var post = Journal.Collections.posts.findWhere({"id": parseInt(id)});

        var view = new Journal.Views.PostShow({
          model: post
        });

        $("#content").append(view.render().$el);
      }
    });
  },

  postNew: function(){

    var view = new Journal.Views.PostForm();
    $("#content").empty().append(view.render().$el);
  }


});