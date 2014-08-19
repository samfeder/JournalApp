Journal.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postShow"
  },

  postsIndex: function(){
    $("#content").empty();

    Journal.Collections.posts.fetch({
      success: function(){
        var view = new Journal.Views.PostsIndex({
          collection: Journal.Collections.posts
        });

        $("#content").append(view.render().$el);
      }
    });

  },

  postShow: function(id){
    console.log("the ID comes in as a", typeof id);
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
  }


});