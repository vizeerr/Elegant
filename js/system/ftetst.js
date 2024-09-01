
if(typeof fontset === 'undefined'){
    window.fonset = true;
    let linktag = document.createElement('link')
    linktag.setAttribute('href','https://fonts.googleapis.com');
    linktag.setAttribute('rel','preconnect');
    document.head.append(linktag);
    
    let linktag2 = document.createElement('link')
    linktag2.setAttribute('href','https://fonts.gstatic.com');
    linktag2.setAttribute('rel','preconnect');
    linktag2.setAttribute('crossorigin','')
    document.head.append(linktag2);
    
    let linktag3 = document.createElement('link')
    linktag3.setAttribute('href','https://fonts.googleapis.com/css2?family=Beau+Rivage&family=EB+Garamond&family=Josefin+Sans:wght@300&family=Kalam:wght@300&family=Marcellus&family=Mate+SC&family=Raleway&family=Tangerine&display=swap');
    linktag3.setAttribute('rel','stylesheet');
    document.head.append(linktag3);
    
}