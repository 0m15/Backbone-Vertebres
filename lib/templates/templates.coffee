window.templates = {}

window.templates['dialog-view'] = _.template('
  <div class="modal-header">
    <a class="close" data-dismiss="modal">&times;</a>
    <h3 class="title"><%= title %></h3>
  </div>
  <div class="modal-body">
    <p class="message"><%= message %></p>
  </div>
  <div class="modal-footer">
    <% _.each(buttons, function(btn) { %>
      <a href="#" class="btn <% if(btn.class) { %><%= btn.class %><% } %>"><%= btn.label %></a>
    <% }) %>
  </div>
')