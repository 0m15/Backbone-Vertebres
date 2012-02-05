Backbone Vertebres
==================================================

Includes the following ui patterns:

Backbone.DialogView
--------------------------------------------------
An extensible, reusable, customizable dialog view
built on top of Twitter bootstrap modals plugin.

###requirements
- jQuery >= 1.7.1
- Bootstrap modal plugin

###options
<table>
  <tr>
    <td><strong>Param name</strong></td>
    <td><strong>Type</strong></td>
    <td><strong>Description</strong></td>
  </tr>
  <tr>
    <td>
      <code>customClass</code>    
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      A custom class to be attached to the DOM
    </td>
  </tr>
  <tr>
    <td>
      <code>title</code>    
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      The dialog title
    </td>
  </tr>
  
  <tr>
    <td>
      <code>message</code>    
    </td>
    <td>
      <code>String</code>
    </td>
    <td>
      The dialog message
    </td>
  </tr>
  
  <tr>
    <td>
      <code>buttons</code>     
    </td>
    <td>
      <code>Array</code>
    </td>
    <td>
      An array holding buttons that fires callbacks
    </td>
  </tr>
  <tr>
    <td>
      <code>onAction</code>    
    </td>
    <td>
      <code>Function</code>
    </td>
    <td>
      Callback invoked when user click buttons. It passes the event object
    </td>
  </tr>
</table>

    var options = {
      buttons : [{'label' : 'ok', 'class' : 'primary'}]
    }
  
###example
    var dialog = quipu.ui.DialogView.show('title', {
      onAction : function(ev) {
        console.log(ev.currentTarget.className)
      }
    })
    dialog.title('reset the title')
    dialog.message('reset the message')
    dialog.close() // close the dialog