    const clockContainer = document.querySelector('.clock');
    const clockTitle = clockContainer.querySelector('h1');

    function getTime(){
      const date = new Date();
      const minutes = date.getMinutes();
      const hours = date.getHours();
      const seconds = date.getSeconds();
      clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
        }`;
      //0을 포함한 seconds를 ?(만약 or 리턴)하고 else(:또는) seconds를 그대로 ?(리턴)한다.
    }

    function init(){
      getTime();
      setInterval(getTime, 1000);
    }
    init();
