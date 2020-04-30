

  const getStorage = (key = 'key') => {
    return localStorage.getItem(key);
  }

  const getHowdy = getStorage('howdyValue');
  const gettoday = getStorage('todayValue');
  const getelaborate = getStorage('elaborateValue');
  const gettellUs = getStorage('tellUsValue');
  const getfeel = getStorage('feelValue');

 

  subject.innerHTML = ` Your day? ${getHowdy}, What made today ${getHowdy}? ${gettoday}, Want to elaborate? ${getelaborate}, In details >  ${gettellUs} , How did you feel ${getfeel}`;

        const btn = document.querySelector("#shareNow");
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.querySelector("#Name").value;
            const email = document.querySelector("#Email").value;
            const subject = document.querySelector("textarea").value;
            if(name === ''|| email === ''|| subject === '') {
                alert("All field is required");
            } else if(name !== '' || email !== '' || subject !== ''){
            alert("Your health status has been shared");

            return setTimeout(() => {
                window.location = '/';
            }, 1500)
          }
            })
        