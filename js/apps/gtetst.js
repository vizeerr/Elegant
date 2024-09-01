if(typeof eset === 'undefined'){
    window.eset = document.createElement('div');
    syncScript();
}



function syncScript(){
    const target = document.head || document.documentElement;
    const link  = document.createElement('style');
    link.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Great+Vibes&display=swap')";
    target.appendChild(link);
    const link2  = document.createElement('link');
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0";
    target.appendChild(link2);
    eset.innerHTML=`<span class="material-symbols-outlined">settings</span>`
    // const link3  = document.createElement('meta');
    // link3.content = "dark";
    // link3.name = "color-scheme";
    // target.appendChild(link3);
}

eset.setAttribute('id','esetting');

try {
    document.getElementsByClassName('gb_Id')[0].appendChild(eset); 
} catch (error) {
    document.getElementsByClassName('Q3DXx')[1].appendChild(eset);
}

