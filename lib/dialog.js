/**
  Backbone.DialogView
  An extensible, reusable, customizable dialog view
  built on top of Twitter bootstrap modals plugin
  to be used in your Backbone Views
  
  **requirements**
  - jQuery >= 1.7.1
  - Bootstrap modal plugin
  
  **options**
  `customClass`   `String`    A custom class to be attached to the DOM
  `title`         `String`    The dialog title
  `message`       `String`    The dialog message
  `buttons`       `Array`     An array holding buttons that fires callbacks
  `onAction`      `Function`  Callback invoked when user click buttons. It passes the event object
    
    var options = {
      buttons : [{'label' : 'ok', 'class' : 'primary'}]
    }
    
  **example**
    var dialog = .DialogView.show('title', {
      onAction : function(ev) {
        console.log(ev.currentTarget.className)
      }
    })
    dialog.title('reset the title')
    dialog.message('reset the message')
    dialog.close() // close the dialog
      
  author: zimok
  github.com/zimok
   
*/

var DialogView = Backbone.View.extend({
  id : 'dialog',
    
  className : 'modal',
  
  template : templates['dialog-view'],
  
  events: {
    'click .btn' : 'onButtonClick',
  },
    
  initialize : function() {
    _.bindAll(this, 'render')
  },
  
  defaults : {
    'buttons' : [{ 'label' : 'close', 'class' : '.close'}],
  },
  
  // options to be overriden by extended methods
  options : {
    'customClass' : '', // a custom class to add styles to the default bootstrap 'dialog' class
    'title' : 'dialog header',
    'message' : 'dialog message',
    'autoHideDelay' : 250,
    'onAction' : null
  },
  
  render : function() {
    $(this.el).html(this.template(this.options))
    if(this.options.customClass) $(this.el).addClass(customClass.replace(/^\./, ''))
    return this
  },
  
  onButtonClick : function(ev) {
    if(this.options.onAction) this.options.onAction(ev)
  },
  
  message : function(msg) {
    $(this.el).find('.message').html(msg)
    return this
  },
  
  title : function(msg) {
    $(this.el).find('.title').html(msg)
    return this
  },
      
  close : function() {
    $(this.el).modal('close')
    return this
  },
  
  show : function() {
    $(this.el).modal('show', { keyboard : true })
    return this
  },  
})

_.extend(.DialogView, {
  show : function(title, options) {
    return new .DialogView(_.extend({
      title : title,
    }, options)).render().show()
  },
})