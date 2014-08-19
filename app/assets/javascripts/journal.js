window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    new Journal.Routers.PostsRouter();
    Backbone.history.start();
    this.showSidebar();
  },

  showSidebar: function(){
    Journal.Collections.posts.fetch({
      success: function(){
        var view = new Journal.Views.PostsIndex({
          collection: Journal.Collections.posts
        });
        $("#sidebar").append(view.render().$el);
      }
    });
  }



};

$(document).ready(function(){
  Journal.initialize();
});
