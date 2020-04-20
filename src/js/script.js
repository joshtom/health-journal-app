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

  // Animating text on landing page

  var tl = gsap.timeline(),
  bell = gsap.timeline(),
  draw = gsap.timeline({repeat:1, yoyo:true});

draw.fromTo("#doc", {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})

draw.fromTo("#tors", {drawSVG:"100%"}, {duration: 1, drawSVG:"50% 50%", stagger: 0.1})

tl.from("h1#heading", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("#quote", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("button#getStarted", {duration: 0.8, x: -500, ease: "elastic.out(1, 0.3)", opacity: 0})


// Animate the notification icon
bell.to("#bell",
      {duration: 0.15, 
       x: 10, 
       fill: '#1229d3'})
  .to("#bell", 
      { duration: 1, 
       ease: "elastic.out(1, 0.3)", 
       x: 0, 
       fill: 'black'})
.repeat(-1)
.repeatDelay(10)

bell.to(".circle", 
      {duration: 0.2, 
       scale:'1.2',
       ease: "bounce.out",
      })
.to(".circle", 
    {duration: 0.2, 
     scale: '1', 
     ease: "bounce.in",
    })
 

