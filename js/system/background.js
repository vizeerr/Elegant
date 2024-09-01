var websarray = ['https://www.youtube.com','https://www.google.com']
chrome.runtime.onMessage.addListener((message) => {
    if (message.setting === 'open') {
        chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                files:  ["js/system/sidenav.js"]
            })
        })
    }
})

function url(geturl) {
    if(geturl !== undefined){
        var url = geturl.split( '//' );
        if (url[0] === "http:" || url[0] === "https:") {
            var protocol = url[0] + "//";
            var host = url[1].split( '/' )[0];
            var webname = host.split(".")[1];
            url = protocol + host;
            return {url:url,webname:webname};
        }
    }
}

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if(changeInfo.status == 'loading' && tab.status == 'loading' ){
        var tabURL = tab.url;
        if(tabURL?.startsWith('http')){
            weburl = url(tabURL);
            if(websarray.includes(weburl.url)){
                var webnames = weburl.webname + 'ET';
                chrome.storage.local.get(["generalSettingET"]).then((result) => {
                    if(result.generalSettingET.mainState==="turnON" && result.generalSettingET[webnames].state ==="turnON"){
                        chrome.scripting.insertCSS({
                            files:[`/css/apps/${result.generalSettingET[webnames].attr}.css`],
                            target:{tabId:tabId}
                        })
                        chrome.scripting.executeScript({
                            target: {tabId:tabId},
                            files:["js/system/ftetst.js"]
                        })
                        chrome.scripting.executeScript({
                            target: {tabId:tabId},
                            files:[`js/apps/${result.generalSettingET[webnames].attr}.js`]
                        })
                    }
                })
            }
        }
        }
});


let allState = {
    ver: 0.01, 
    mainState:'turnON',
    youtubeET:{
        state:'turnON',
        attr:'ytetst',
        name:'Youtube',
        value:['#000000FF','#ffffffFF','#000000FF','#aaaaaaFF','#00000091',
        '#000000FF','#00000057','#000000FF','#0000006b','#4b4b4b9c','#303030FF','#ff000078','#00000094',
        '#000000d4','#ffffffff',9,2,'#ffffff1a','#ff0000FF','#ffffff5e'],
        settings:[
            ['General',
                ['colorsSet','Background Color','--et-spec-base-background']
            ],
            ['Text Colors',
                ['fontSet','Font Style'],
                ['colorsSet','Primary Text Color','--et-spec-text-primary'],
                ['colorsSet','Primary Text Inverse Color','--et-spec-text-primary-inverse'],
                ['colorsSet','Secondar Text Color','--et-spec-text-secondary'],
            ],
            ['Left Side Navbar',
                ['colorsSet','Left Nav Background','--et-snav-base-background'],
                ['colorsSet','Left Nav Shadow Color','--et-snav-shadow-clr']
            ],
            ['Top Nav Bar',
                ['colorsSet','Top Nav Background','--et-nav-base-background'],
                ['colorsSet','Top Nav Shadow Color','--et-nav-shadow-clr']
            ],
            ['Search Box',
                ['colorsSet','Searchbox background','--et-searchbox-bag'],
                ['colorsSet','Searchbox Shadow Color','--et-searchbox-shadow-clr'],
                ['colorsSet','Searchbox Border Color','--et-searchbox-legacy-border-color'],
            ],
            ['Chips',
                ['colorsSet','Chip Active Background','--et-active-bg-transparency'],
                ['colorsSet','Chip Shadow Color','--et-chip-shadow-clr']
            ],
            ['Menu',
                ['colorsSet','Menu Background','--et-spec-menu-background'],
                ['colorsSet','Menu Background Invertes','--et-spec-inverted-background']   
            ],
            ['Video Player',
                ['rangeSet','Ambient Saturation','1','15'],
                ['rangeSet','Ambient Size','0','3']
            ],
            ['Others',
                ['colorsSet','Secondary Colors','--et-spec-additive-background'],
                ['colorsSet','Theme Color','--et-theme-color'],
                ['colorsSet','Icons Color','--et-spec-outline']
            ]
        ],
        customOpt:{
            state:'turnOFF',
            font:'Josefin Sans, sans-serif',
            value:['#000000FF','#ffffffFF','#000000FF','#aaaaaaFF','#00000091',
            '#000000FF','#00000057','#000000FF','#0000006b','#4b4b4b9c','#303030FF','#ff000078','#00000094',
            '#000000d4','#ffffffff',9,2,'#ffffff1a','#ff0000FF','#ffffff5e']
        }
    },
    googleET:{
        state:'turnOFF',
        attr:'gtetst',
        name:'Google',
        value:'',
        settings:'',
        customOpt:{
            state:'turnOFF',
            value:''
        }

    } 
}

chrome.runtime.onInstalled.addListener(({reason}) => {
    chrome.storage.local.set({ generalSettingET:allState});
    if (reason === 'install') {
        chrome.storage.local.get(["generalSettingET"]).then((result) => {  
            if (result === undefined) {
                    chrome.storage.local.set({ generalSettingET:allState});   
            }   
        })
    }
});




  








