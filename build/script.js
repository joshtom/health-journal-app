 // App install banner
 window.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt', event);
  window.deferredPrompt = event;
});

// Confirm if the user has installed the app
// App install banner
/** window.addEventListener('beforeinstallprompt', function(e) {
  e.userChoice.then(function(choiceResult){
      console.log(choiceResult.outcome);
      if(choiceResult.outcome == 'dismissed'){
          console.log('User cancelled home screen install');
      }else{
          console.log('User added to home screen');
      }
  });
}); **/
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
.then(registration => {
console.log(`Service Worker registered! Scope: ${registration.scope}`);
 // App install banner
 window.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container
  // divInstall.classList.toggle('hidden', false);
});
})
.catch(err => {
console.log(`Service Worker registration failed: ${err}`);
});
  });
}