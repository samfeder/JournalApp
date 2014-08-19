Journal.Views.PostForm = Backbone.View.extend({
  template: JST["form"],

  initialize: function() {
    this.superListen("add");
  },

  superListen: function() {
    var that = this;
    var eventArgs = [].slice.call(arguments);
    eventArgs.forEach(function(event){
      that.listenTo(that.model, event, that.render);
    });
  },
  events: {"submit form": "createPost"},

  render: function(){
    var renderedContent = this.template({post: this.model});

    this.$el.html(renderedContent);

    return this;
  },

  createPost: function(event) {
    event.preventDefault();

    var formData = $(event.currentTarget).serializeJSON()["post"];
    var newPost = new Journal.Models.Post();
    console.log(formData);
    newPost.save(formData, {
      success: function(){

        Journal.Collections.posts.add(newPost);
        Backbone.history.navigate("/", { trigger: true});
      }
    });
  }
});