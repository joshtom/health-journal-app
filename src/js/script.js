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

  // Listening for click event
const _element = ($param) => { return document.querySelector($param) }
const _value = () => { return _element.value }

  
  // Animating text on landing page

  var tl = gsap.timeline(),
  bell = gsap.timeline(),
  nav = gsap.timeline(),
  pgTransition = gsap.timeline();

  function bellCall(cFrom = '#fff', cTo = '#fff') { //Setting default parameters to white
    return bell.to("#bell",
      {duration: 0.15, 
       x: 10, 
       fill: cFrom})
  .to("#bell", 
      { duration: 1, 
       ease: "elastic.out(1, 0.3)", 
       x: 0, 
       fill: cTo})
.repeat(-1)
.repeatDelay(10)
  }
  _element("#getStarted").addEventListener('click', () => {
    pgTransition.to("#homepage", {duration: 1, x: '-100%', display: 'none', ease: 'power'})
      .from("#howdy", { duration: 1, y: '100%', display: 'flex', ease: 'back.out(1.7)' })
      bellCall('#fff', '#fff');
  })   

tl.from("#doc", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("h1#heading", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("#quote", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("button#getStarted", {duration: 0.8, x: -500, ease: "elastic.out(1, 0.3)", opacity: 0})


// Animate the notification icon
bellCall('#1229d3', '#000000')

bell.to(".circle", 
      {duration: 0.2, 
       scale:'1.2',
       ease: "bounce.out",
      })
.to(".circle", 
    {duration: 0.2, 
     scale: '1', 
     ease: "bounce.in",
    });

    // Animate the nav Icon at the bottom
    nav.to("nav .previous", { 
      duration: 1,
      x: -10,
      ease: "elastic.in(1, 0.3)"
     }).to("nav .previous",{
       x: 0,
       ease: "elastic.out(1, 0.3)"
     }).repeat(-1).repeatDelay(2)

    nav.to("nav .next", { 
      duration: 1,
      x: 10,
      ease: "elastic.in(1, 0.3)"
     }).to("nav .next",{
       x: 0,
       ease: "elastic.out(1, 0.3)"
     }).repeat(-1).repeatDelay(2)



