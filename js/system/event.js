let webname;
updateState();

document.getElementById("toogle").addEventListener("click",toogleFunction);
let toogleCircle = document.getElementById("toogleCircle");
let toogleSlide = document.getElementById("toogle");

function updateState(){
  chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
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
      if(currentSTATEnew.mainState==="turnON"){
        currentSTATEnew.mainState= 'turnOFF';
      }else{      
        currentSTATEnew.mainState= 'turnON';
      }
      chrome.storage.local.set({ generalSettingET:currentSTATEnew });
      updateState();
      chrome.tabs.reload(tabs[0].id);
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


var appsections = document.getElementById('appsections');

chrome.storage.local.get(["generalSettingET"]).then((result) =>{  
  var currentSTATEnew = result.generalSettingET;
  var keys = Object.keys(currentSTATEnew);
  keys.forEach(element => {
    if(element !== "ver" && element !== "mainState"){
      webname = currentSTATEnew[element].name.toLowerCase();
      var appSet = document.createElement('div');
      appSet.className = "appset";
      appSet.innerHTML += `<div class="appimg">
      <p>${webname.toUpperCase()}</p>
      <img src="images/apps/${webname}SS.png" alt="">
  </div>`;
  var tglbtn = document.createElement('div');
  tglbtn.className = "toogleSet";
  var tglbtnState = document.createElement('div');
  tglbtnState.className = "gsettings switchbg";
  tglbtnState.id = "appStateToogle";
  var tglbtnCircle = document.createElement('div');
  tglbtnCircle.className = "gcircle circle";
  tglbtnCircle.id = "appStateCircle";

  if(currentSTATEnew[element].state == "turnON"){
    tglbtnState.classList.remove("slideToogle");
    tglbtnCircle.classList.remove("slideCircle");
  }else{
    tglbtnCircle.classList.add("slideCircle");
    tglbtnState.classList.add("slideToogle");
  }

  tglbtnState.addEventListener('click',()=>{
    let appStateCircle = tglbtnCircle;
    if(currentSTATEnew[element].state == "turnON"){
      currentSTATEnew[element].state = "turnOFF";
      appStateCircle.classList.add("slideCircle");
      tglbtnState.classList.add("slideToogle");
    }else{
      currentSTATEnew[element].state = "turnON";
      tglbtnState.classList.remove("slideToogle");
      appStateCircle.classList.remove("slideCircle");
    }
    chrome.storage.local.set({ generalSettingET:currentSTATEnew});
  })
  tglbtnState.appendChild(tglbtnCircle);
  tglbtn.appendChild(tglbtnState);
  appSet.appendChild(tglbtn);
  appsections.appendChild(appSet);
}
})
})



