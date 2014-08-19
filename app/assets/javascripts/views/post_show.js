Journal.Views.PostShow = Backbone.View.extend({
  template: JST["show"],

  initialize: function() {
    this.superListen("change:body",
                     "change:title"
                     );
  },

  superListen: function() {
    var that = this;
    var eventArgs = [].slice.call(arguments);
    eventArgs.forEach(function(event){
      that.listenTo(that.model, event, that.render);
    });
  },

  render: function(){
    var renderedContent = this.template({post: this.model});

    this.$el.html(renderedContent);

    return this;
  }

});