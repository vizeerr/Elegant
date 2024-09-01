window.rootElement = document.documentElement;
window.rootHead = document.querySelector(":root");
rootElement.setAttribute('dark','');

if(typeof eset === 'undefined'){
    window.eset = document.createElement('div');
    syncScript();
}

chrome.storage.local.get(["generalSettingET"]).then((element) => {
    var mainstack = element.generalSettingET.youtubeET;
    if(mainstack.customOpt.state == "turnON"){
        var fontfam = mainstack.customOpt.font;
    }else{
        fontfam = "Josefin Sans, sans-serif";
    }
    document.body.style.fontFamily = fontfam;
})

function syncScript(){
    const target = document.head || document.documentElement;
    const link  = document.createElement('style');
    link.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Great+Vibes&display=swap')";
    target.appendChild(link);
    const targetElement = document.getElementById('background')   
        const computedStyle = getComputedStyle(targetElement);
        const backgroundColor = computedStyle.background;
        const result = isColorLightOrDark(backgroundColor);
        if(result === 'light'){
            document.getElementById("logo").innerHTML += "<h2  id='ebranding'><a style='color:#000' href = 'https://www.youtube.com/'>Elegant by vivek</a></h2>";
        }else{

            document.getElementById("logo").innerHTML += "<h2 id='ebranding'><a href = 'https://www.youtube.com/'>Elegant by vivek</a></h2>";  
        }

    const link2  = document.createElement('link');
    link2.rel = "stylesheet";
    link2.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0";
    target.appendChild(link2);
    eset.innerHTML=`<span class="material-symbols-outlined">settings</span>`
}

eset.setAttribute('id','esetting');
document.getElementById('end').appendChild(eset)
    chrome.storage.local.get(["generalSettingET"]).then((element) => {
        var mainstack = element.generalSettingET.youtubeET
        var arr= mainstack.settings;
        var arval = mainstack.customOpt.value;
        if(mainstack.customOpt.state == "turnON"){
            var pos = 0 ;
            arr.forEach(opt => {
                for (let i = 0; i < opt.length; i++){
                    if(opt[i][0]==='colorsSet'){
                        rootHead.style.setProperty(opt[i][2],arval[pos]);
                        pos++;
                    }else if(opt[i][0]==='rangeSet'){
                        switch (opt[i][1]) {
                            case "Ambient Saturation":{
                                rootHead.style.setProperty('--et-ambi-satur',arval[pos]);
                                break;
                            }
                            case "Ambient Size":{
                                rootHead.style.setProperty('--et-ambi-scl',arval[pos]);
                                break;
                            }
                        }
                        pos++;
                    }
                }
            });
        }
        
    })
    

    
    
    
    function isColorLightOrDark(color) {
        const match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i);
        if (!match) {
            return null;
        }
        const r = parseInt(match[1], 16) / 255;
        const g = parseInt(match[2], 16) / 255;
        const b = parseInt(match[3], 16) / 255;
        const a = match[4] ? (parseInt(match[4], 16) / 255) : 1.0;
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        const threshold = 1 - (a / 2);
        return luminance > threshold ? 'light' : 'dark';
    }
