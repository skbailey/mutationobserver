document.addEventListener('DOMContentLoaded', function(){
  var board = document.querySelector('#xo-target');
  var input = document.querySelector('.add-text');

  document.addEventListener('keypress', function(evt){
    var node, textnode;

    if (evt.which == 13 && input.value !== "") {
      node = document.createElement('p');
      textnode = document.createTextNode(input.value);
      node.appendChild(textnode);

      board.appendChild(node);
      input.value = "";
    }
  });
});