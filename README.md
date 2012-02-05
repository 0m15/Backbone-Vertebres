#Backbone Vertebres

What's inside
==================================================

Backbone.DialogView
--------------------------------------------------
An extensible, reusable, customizable dialog view
built on top of Twitter bootstrap modals plugin.

##requirements
- jQuery >= 1.7.1
- Bootstrap modal plugin

##options
`customClass`   `String`    A custom class to be attached to the DOM
`title`         `String`    The dialog title
`message`       `String`    The dialog message
`buttons`       `Array`     An array holding buttons that fires callbacks
`onAction`      `Function`  Callback invoked when user click buttons. It passes the event object
  
  var options = {
    buttons : [{'label' : 'ok', 'class' : 'primary'}]
  }
  
#example
  var dialog = quipu.ui.DialogView.show('title', {
    onAction : function(ev) {
      console.log(ev.currentTarget.className)
    }
  })
  dialog.title('reset the title')
  dialog.message('reset the message')
  dialog.close() // close the dialog