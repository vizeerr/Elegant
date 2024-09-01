
let enav = document.createElement('div');
    enav.setAttribute('id','sidenavEle');
    enav.style.position = "fixed";
    enav.style.left = "0px";
    enav.style.top="0px"; 
    enav.style.width = "100%"
    enav.style.zIndex = "222222222"

    document.body.append(enav);
    enav.addEventListener('click',closeOptions)
    
    function closeOptions(){
      enav.innerHTML=``
    }


document.getElementById("esetting").addEventListener('click',openpop)

function openpop(){
  chrome.runtime.sendMessage({setting: "open"})
  console.log("send");
}

