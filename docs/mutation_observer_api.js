/*  Creates a MutationObserver instance
 *
 *  Takes a callback as a parameter which will be called 
 *  on each DOM mutation.
 *
 *  Arguments to the callback:
 * 
 *  mutationRecords - an array of MutationRecord objects
 *  thisObserver - this MutationObserver instance
 */ 

var observer = new MutationObserver(function(mutationRecords, thisObserver){
  console.log('An array of MutationRecords', mutationRecords)
});

/*  Registers the MutationObserver instance to receive notifications 
 *  of DOM mutations on the specified node.
 *
 *  Arguments to the function:
 *
 *  target - the Node on which to observe DOM mutations
 *  options - a MutationObserverInit object, specifies which DOM mutations should be reported
 */

var target = document.querySelector('#xo-target-node');
var options = { childList: true, subtree: true };

observer.observe(target, options);

/* Stops the MutationObserver instance from receiving notifications of DOM mutations. */

observer.disconnect();

/* Empties the MutationObserver instance's record queue and returns what was in there.
 *
 * Return value: an array of MutationRecords
 */

observer.takeRecords();
