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
const _getRadioVal = ($param) => { return document.querySelector($param).value }
const _value = () => { return _element.value }

  
  // Animating text on landing page

  var tl = gsap.timeline(),
  bell = gsap.timeline(),
  nav = gsap.timeline(),
  pgTransition = gsap.timeline(),
  slideTransition = gsap.timeline(),
  btnTransition = gsap.timeline(),
  section = 1;

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

  // Get started event listener
  _element("#getStarted").addEventListener('click', () => {
    pgTransition.to("#homepage", {duration: 1, x: '-100%', display: 'none', ease: 'power'})
      .from(".howdy", { duration: 1, y: '100%', display: 'flex', ease: 'back.out(1.7)' })
      bellCall('#fff', '#fff');
  })   

  // Logic for next and previous button

  // Next Button
  _element(".next").addEventListener('click', () => {
    if(section < 6) {
      section ++;
      gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});
    }
    
  })
  // Previous Button
  _element(".previous").addEventListener('click', () => {
    if(section > 1) {
      section --;
      gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});      
    }
  });

  // Set opacity to 1 when share button is clicked
  const whatsappIcon = _element(".fa-whatsapp");
  const googleIcon = _element(".fa-google");

tl.from("#doc", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("h1#heading", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("#quote", {duration: .6, x: 1000, ease: "power", opacity: 0})

tl.from("button#getStarted", {duration: 0.8, x: -500, ease: "elastic.out(1, 0.3)", opacity: 0})


// Submitting the emojis to localstorage and animating;

  
    const howdyLabel = document.querySelectorAll(".howdy #ans label");
    const slide2Label = document.querySelectorAll("#slide2 #ans label");
    const slide3Label = document.querySelectorAll("#slide3 #ans label");
    const tellUs = document.querySelector("#tellUs");
    const slide5Label = document.querySelectorAll("#slide5 #ans label");

    for(var i = 0; i < howdyLabel.length; i++) {
      howdyLabel[i].addEventListener('click', () => {
        setTimeout(() => {
          // gsap.to(window, 0.5, {scrollTo:{y:$("#slide2").offset().top}});
          if(section < 6) {
            section ++;
            gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});
          }
        }, 1000);  
      })
    }

    for(var i = 0; i < slide2Label.length; i++) {
      slide2Label[i].addEventListener('click', () => {
        setTimeout(() => {
          // gsap.to(window, 0.5, {scrollTo:{y:$("#slide3").offset().top}});
          if(section < 6) {
            section ++;
            gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});
          }
        }, 1000);  
      })
    }

    for(var i = 0; i < slide3Label.length; i++) {
      if(slide3Label[i].htmlFor === 'yes'){
        slide3Label[i].addEventListener('click', () => {
        setTimeout(() => {
          // gsap.to(window, 0.5, {scrollTo:{y:$("#slide4").offset().top}});
          if(section < 6) {
            section ++;
            gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});
          }
        }, 1000);  
      })
      } else {
         slide3Label[i].addEventListener('click', () => {
        setTimeout(() => {
          // gsap.to(window, 0.5, {scrollTo:{y:$("#slide5").offset().top}});
          if(section < 6) {
            section ++;
            gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});
          }
        }, 1000);  
      })
      }
     
    }

    tellUs.addEventListener('click', () => {
      setTimeout(() => {
          // gsap.to(window, 0.5, {scrollTo:{y:$("#slide6").offset().top}});
          if(section < 6) {
            section ++;
            gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});
          }
        }, 1000);  
      })

    for(var i = 0; i < slide5Label.length; i++) {
      slide5Label[i].addEventListener('click', () => {
        setTimeout(() => {
          // gsap.to(window, 0.5, {scrollTo:{y:$("#slide6").offset().top}});
          if(section < 6) {
            section ++;
            gsap.to(window, 0.5, {scrollTo:{y:$("#slide" + section).offset().top}});
          }
        }, 1000);  
      })
    }
    
    function storageAvailable(type) {
      var storage;
      try {
          storage = window[type];
          var x = '__storage_test__';
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
      }
      catch(e) {
          return e instanceof DOMException && (
              // everything except Firefox
              e.code === 22 ||
              // Firefox
              e.code === 1014 ||
              // test name field too, because code might not be present
              // everything except Firefox
              e.name === 'QuotaExceededError' ||
              // Firefox
              e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
              // acknowledge QuotaExceededError only if there's something already stored
              (storage && storage.length !== 0);
      }
  }
    //  Functions to get and set item to localstorage
    const populateStorage = (key = 'key', value = 'value') => {
      return localStorage.setItem(key, value);
    }
    const getStorage = (key = 'key') => {
      return localStorage.getItem(key);
    }

  // Collecting the values and saving on localstorage

  _element("#share").addEventListener('click', () => {
    // Get all input values
     const howdy = _getRadioVal("input[name='howdy']:checked");
     const today = _getRadioVal("input[name='today']:checked");
     const elaborate = _getRadioVal("input[name='elaborate']:checked");
     const tellUs = _getRadioVal("textarea#tell");
     const feel = _getRadioVal("input[name='feel']:checked");

     // Adding values to localstorage 

     populateStorage('howdyValue', howdy);
     populateStorage('todayValue', today);
     populateStorage('elaborateValue', elaborate);
     populateStorage('tellUsValue', tellUs);
     populateStorage('feelValue', feel);

     // Values added to localstorage

    //  Redirect to another page when 
    setTimeout(() => {
      window.location="share.html";
    }, 1500)

     

  })