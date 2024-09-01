let webnames;
updateState();

document.getElementById("toogle").addEventListener("click",toogleFunction);
let toogleCircle = document.getElementById("toogleCircle");
let toogleSlide = document.getElementById("toogle");

function updateState(){
  chrome.tabs.query({active: true,currentWindow: true}, function(){
    chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
      var currentSTATEnew = result.generalSettingET;
      if(currentSTATEnew.mainState==="turnON"){
        document.getElementById("toogletxt").innerText = "ON"
        toogleCircle.classList.remove("slideCircle");
        toogleSlide.classList.remove("slideToogle");
      }else{
        document.getElementById("toogletxt").innerText = "OFF"
        toogleSlide.classList.add("slideToogle");
        toogleCircle.classList.add("slideCircle");
      }
    })
  })
} 

function toogleFunction(){
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
    chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
      var currentSTATEnew = result.generalSettingET;
      var webname = webnames + "ET";
      var attriSet = currentSTATEnew[webname].attr;
      if(currentSTATEnew.mainState==="turnON"){
        chrome.scripting.removeCSS({
          files:[`css/apps/${attriSet}.css`],
          target:{tabId:tabs[0].id}
        })
        chrome.tabs.reload(tabs[0].id);
        currentSTATEnew.mainState= 'turnOFF';
      }else{
        chrome.scripting.insertCSS({
          files:[`css/apps/${attriSet}.css`],
          target:{tabId:tabs[0].id  }
        })
        chrome.scripting.executeScript({
          target: {tabId:tabs[0].id},
          files:["js/system/ftetst.js"]
      })
        chrome.scripting.executeScript({
          target: {tabId:tabs[0].id},
          files:[`js/apps/${attriSet}.js`]
        })        
        currentSTATEnew.mainState= 'turnON';
      }
      chrome.storage.local.set({ generalSettingET:currentSTATEnew });
      updateState();
    })
  })
}
    

function url(geturl) {
  if(geturl !== undefined){
    var url = geturl.split( '//' );
    if (url[0] === "http:" || url[0] === "https:") {
      var host = url[1].split( '/' )[0];
      var webname = host.split(".")[1];
      webnames = webname;
          return webname;
      }
  }
}

function fcap(word){
  const capitalized =word.charAt(0).toUpperCase()+ word.slice(1)
  return capitalized;
}

chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
  const wrCont = document.getElementById("wrappContainer");
  var tabURL = tabs[0].url;
  var webname = url(tabURL);
    wrCont.innerHTML = `
    <div class="section">
      <div class="apphead">
        <div class="toogleSet">
        <p>${fcap(webname)} </p>
        <div id = "appStateToogle" class="gsettings switchbg">
          <div id ="appStateCircle"  class="gcircle circle"></div>
        </div>
        </div>
        </div>
        </div>                   
        <div class="title">
        <h4>"Customize ${fcap(webname)} Theme"</h4>
        </div>
        <div id = "opener" class="thumb">
        <div class="imgthumb">
          <img id = "thumbCover" src="/images/apps/${webname}SS.png" alt="thumbnailYoutube">
          <img id = "editImg" src="/images/system/icons8-edit-80.png" alt="">
        </div>
      </div>                    
    </div>`;
    document.getElementById("opener").addEventListener('click',showOptions);
    document.getElementById("appStateToogle").addEventListener("click",toogleFunctionApp);
    updateAppState();
  })

  
  function updateAppState(){
    let appStateCircle = document.getElementById("appStateCircle");
    chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
      var currentSTATEnew = result.generalSettingET
      var webname = webnames + "ET";
      var stateSet = currentSTATEnew[webname].state;
      if(stateSet ==="turnON"){
        document.getElementById("appStateToogle").classList.remove("slideToogle");
        appStateCircle.classList.remove("slideCircle");
      }else{
        appStateCircle.classList.add("slideCircle");
        document.getElementById("appStateToogle").classList.add("slideToogle");
      }
    })
  }

  function toogleFunctionApp() {
    let appStateCircle = document.getElementById("appStateCircle");
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
      chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
        var currentSTATEnew = result.generalSettingET
        var webname = webnames + "ET";
        var stateSet = currentSTATEnew[webname].state;
        var attriSet = currentSTATEnew[webname].attr;
        if(currentSTATEnew.mainState === "turnON"){
          if(stateSet ==="turnON"){
            chrome.scripting.removeCSS({
              files:[`css/apps/${attriSet}.css`],
              target:{tabId:tabs[0].id}
            })
            chrome.tabs.reload(tabs[0].id);
            currentSTATEnew[webname].state = "turnOFF";
          }else{
            document.getElementById("appStateToogle").classList.remove("slideToogle");
            appStateCircle.classList.remove("slideCircle");
            chrome.scripting.insertCSS({
              files:[`css/apps/${attriSet}.css`],
              target:{tabId:tabs[0].id  }
            })
            chrome.scripting.executeScript({
              target: {tabId:tabs[0].id},
              files:["js/system/ftetst.js"]
            })
            chrome.scripting.executeScript({
              target: {tabId:tabs[0].id},
              files:[`js/apps/${attriSet}.js`]
            })        
            currentSTATEnew[webname].state = "turnON";
          }
        }
        chrome.storage.local.set({ generalSettingET:currentSTATEnew});
        updateAppState();
      })
    })
  }

  let customOptCircle = document.getElementById("customOptCircle");
  let customOptText = document.getElementById("customOptText");
  let customOptToogle = document.getElementById("customOptToogle");
  customOptToogle.addEventListener('click',toogleFunctionCustom);

  function updateCustomState(){
    chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
      var currentSTATEnew = result.generalSettingET
      var webname = webnames + "ET";
      var stateSet = currentSTATEnew[webname].customOpt.state;
      if(stateSet ==="turnON"){
        customOptToogle.classList.remove("slideToogle");
        customOptCircle.classList.remove("slideCircle");
        customOptText.innerText = "Turn OFF"
      }else{
        customOptCircle.classList.add("slideCircle");
        customOptToogle.classList.add("slideToogle");
        customOptText.innerText = "Turn ON"
      }
    })
  }

  function toogleFunctionCustom(){
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
      chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
        var currentSTATEnew = result.generalSettingET
        var webname = webnames + "ET";
        var stateSet = currentSTATEnew[webname].customOpt.state;
        if(stateSet ==="turnON"){
          currentSTATEnew[webname].customOpt.state = "turnOFF";
        }else{
          currentSTATEnew[webname].customOpt.state = "turnON";
        }
      chrome.storage.local.set({ generalSettingET:currentSTATEnew});
        updateCustomState(); 
        chrome.tabs.reload(tabs[0].id);     
      })
    })
  }


document.getElementById("closeSettings").addEventListener('click',closeOptions);
const beforeOptions = document.getElementById("beforeOptions");
const optionsCustom = document.getElementById("optionsCustom");

function showOptions(){
  optionsCustom.style.display="block";
  beforeOptions.style.display="none";
  // chrome.storage.local.get(["generalSettingET"]).then((result) =>{
  //   var currentSTATEnew = result.generalSettingET;
  //   var webname = webnames + "ET";
  //   currentSTATEnew[webname].sidepanel.custom=;
  // })
  updateCustomState();
}
document.getElementById('resetSettings').addEventListener('click',resetCodes);

function resetCodes(){
    chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
      var currentSTATEnew = result.generalSettingET
      var webname = webnames + "ET";
      var mainSet = currentSTATEnew[webname];
      var customSet = mainSet.customOpt.value;
      var fontSet = mainSet.customOpt.font;
      fontSet = "Josefin Sans, sans-serif";
      var strSet = mainSet.value;
      var i =0;
      strSet.forEach(element => {
        customSet[i] = element;
        i++;
      });
      chrome.storage.local.set({ generalSettingET: currentSTATEnew});
    })
}

function closeOptions(){
  document.getElementById("optionsCustom").style.display="none";
  document.getElementById("beforeOptions").style.display="block"
}

document.getElementById('minIt').addEventListener('click',minIt);
document.getElementById('maxIt').addEventListener('click',maxIt);
document.getElementById('closeIt').addEventListener('click',closeIt);

function minIt(){
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id,{minIt:"true"})
  })
}
function maxIt(){
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id,{minIt:"false"})
  })
}
function closeIt(){
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id,{closeMe:"true"})
  })
}

document.getElementById('navMoveRight').addEventListener('click',()=>{
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id,{navPosition:"right"})
  })
})
document.getElementById('navMoveLeft').addEventListener('click',()=>{
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id,{navPosition:"left"})
  })
})

const setcontainer = document.getElementById('suboptions');
chrome.storage.local.get(["generalSettingET"]).then((result) => {
  var webname = webnames.toLowerCase() + "ET";
    var set =0;
    var mainSet = result.generalSettingET[webname];
    
    var arr = mainSet.settings;
    arr.forEach(opt=>{
      var tab = document.createElement('div');
      tab.setAttribute('class', 'acordian');
      var head = document.createElement('p');
      head.setAttribute('class', 'acordhead');
      head.innerHTML=`${opt[0]}`
      head.addEventListener('click',()=>{
        head.classList.toggle('acordactive');
        var nextElem = head.nextElementSibling;
        if(nextElem.style.display !== 'block'){
          nextElem.style.display='block';
        }else{
          nextElem.style.display='none';
        }
      })
      tab.appendChild(head);
      var options = document.createElement('div')
      options.setAttribute('class', 'options');
      for (let i = 1; i < opt.length; i++) {
        var seting = document.createElement('div')
        seting.setAttribute('class',opt[i][0] );
        seting.innerHTML=`<p>${opt[i][1]} </p>`;

        console.log(opt[i][1]," ",opt[i][0]," ",opt[i][2]," val ",mainSet.customOpt.value[set]);

        if(opt[i][0]==='colorsSet'){
          var colorinput = document.createElement('input');
          colorinput.setAttribute('class','colorpicker')
          new JSColor(colorinput, {format:'any',value:mainSet.customOpt.value[set]});
          seting.appendChild(colorinput)
          set++;
        }else if(opt[i][0]=='fontSet'){
          seting.innerHTML += `<select id="fontStyleCust">
          <option value="Roboto,Arial,sans-serif">Original</option>
          <option value="Beau Rivage, cursive">Beau Rivage</option>
          <option value="EB Garamond, serif">EB Garamond</option>
          <option value="Josefin Sans, sans-serif">Josefin Sans</option>
          <option value="Kalam, cursive">Kalam</option>
          <option value="Marcellus, serif">Marcellus</option>
          <option value="Mate SC, serif">Mate SC</option>
          <option value = "Raleway, sans-serif">Raleway</option>
          <option value="Tangerine, cursive">Tangerine</option>
          </select>`;

        }else if(opt[i][0]=='rangeSet'){
          var rangeinput = document.createElement('input');
          rangeinput.setAttribute('type','range')
          rangeinput.setAttribute('class','colorpicker')
          rangeinput.setAttribute('min',opt[i][2])
          rangeinput.setAttribute('max',opt[i][3])
          rangeinput.setAttribute('value',mainSet.customOpt.value[set])
          seting.appendChild(rangeinput)
          set++;
        }
      options.appendChild(seting)
      // console.log(options.appendChild(seting));
    }
    tab.appendChild(options)
    setcontainer.appendChild(tab)
  })
})



document.getElementById('saveCodes').addEventListener('click',selectCodes);
function selectCodes(){  
  chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
    var currentSTATEnew = result.generalSettingET;
    var setingOpt= document.querySelectorAll('.colorpicker');
    var allSettingsnew=[]
    var i =0;
    var webname = webnames.toLowerCase() + "ET";
    setingOpt.forEach(element => {
      allSettingsnew.push(element.value)
      currentSTATEnew[webname].customOpt.value[i] = element.value
      i++;
    })
    currentSTATEnew[webname].customOpt.font =  document.getElementById('fontStyleCust').value;
    chrome.storage.local.set({ generalSettingET: currentSTATEnew});
  })
}