window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    console.log('Hello from Backbone!');
    new Journal.Routers.PostsRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journal.initialize();
});
