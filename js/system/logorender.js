

if(typeof injected === 'undefined'){
    window.injected = false;
}

if(injected==false){
    syncScript();
    injected =true;
}

function syncScript(){
    const target = document.head || document.documentElement;
    const link  = document.createElement('style');
    link.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Great+Vibes&display=swap')";
    target.appendChild(link);
    document.getElementById("logo").innerHTML += "<h2 id='ebranding'><a href = 'https://www.youtube.com/'>Elegant <span> ~by Vivek Sagar</span></a></h2>";  
}
