document.addEventListener('DOMContentLoaded', function(){
  var observer = new MutationObserver(function(records){
    console.info('An array of Mutation Records');

    records.forEach(function(record){
      console.log(record);
    });
  });

  var target = document.querySelector('#xo-target');
  var options = { childList: true, subtree: true };

  observer.observe(target, options);

  //window.xoDOMObserver = observer;
});