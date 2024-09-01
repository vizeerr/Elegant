var path = chrome.runtime.getURL("sidenav.html")
  
document.getElementById("sidenavEle").innerHTML = `

<iframe id = "sidenavEleFrame" style="width:400px; height:100vh;bottom:0;border:none; " src="${path}" title="Elegant Options"></iframe>`;

chrome.runtime.onMessage.addListener(function(request,sender,sendRsponse){
    if(request.minIt==='true'){
        document.getElementById("sidenavEle").removeEventListener('click',closeOptions);
        document.getElementById("sidenavEle").style.width="auto";
        document.getElementById("sidenavEleFrame").style.height="5vh";
        document.getElementById("sidenavEleFrame").style.position="fixed";
    }
    if(request.minIt==='false'){
        document.getElementById("sidenavEle").addEventListener('click',closeOptions);
        document.getElementById("sidenavEle").style.width="100%";
        document.getElementById("sidenavEleFrame").style.height="100vh";
        document.getElementById("sidenavEleFrame").style.position="relative";
    }
    if(request.closeMe=='true'){
        document.getElementById("sidenavEle").innerHTML='';
    }
    if(request.navPosition==="right"){
        document.getElementById('sidenavEleFrame').style.float="right";
    }
    if(request.navPosition==="left"){
        document.getElementById('sidenavEleFrame').style.float="left";
    }
    
  })