

const curr = document.getElementById('custCur');
            
            document.addEventListener('mousemove',(e)=>{
            curr.style.left = e.pageX- window.scrollX + "px";
            curr.style.top = e.pageY - window.scrollY + "px";
        })
        
let list = document.querySelectorAll('h4,h1')
list.forEach(element => {
    element.addEventListener('mouseover',()=>{
        document.getElementById('custCur').style.scale = 2;
        document.getElementById('custCur').style.transform= "translate(-50%,-30%)";
    })
    element.addEventListener('mouseout',()=>{
        document.getElementById('custCur').style.scale = 1;
        document.getElementById('custCur').style.transform= "translate(-50%,-70%)";
    })
});

document.addEventListener('click', (e)=>{
    const moch = document.createElement('img');
    moch.src = "icons/elegant72.png";
    moch.id= "mocha"
    document.body.appendChild(moch)
    moch.style.left = e.pageX + "px";
    moch.style.top =e.pageY + "px";
    var deg = Math.floor(Math.random() * (360 - 0) ) + 0;
    moch.style.transform= 'rotate('+deg+'deg)'; 
    moch.style.opacity=1; 
    setTimeout(()=>{
        moch.style.opacity = 0;setTimeout(()=>{
            moch.remove();
        },2000);
    },2000);
})



document.addEventListener('click', (e) => {
    const images = [
        { url: "images/download__1_-removebg-preview.png", width: 2.5 },
        { url: "images/2024/03/13/raftaartxt-1.png", width: 10 },
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const moch = document.createElement('img');
    moch.src = randomImage.url;
    moch.id = "mocha";
    moch.style.width = randomImage.width + "%"; // Set dynamic width
    document.body.appendChild(moch);
    moch.style.left = e.pageX + "px";
    moch.style.top = e.pageY + "px";
    var deg = Math.floor(Math.random() * (360 - 0)) + 0;
    moch.style.transform = 'rotate(' + deg + 'deg)';
    moch.style.opacity = 1;
    setTimeout(() => {
        moch.style.opacity = 0;
        setTimeout(() => {
            moch.remove();
        }, 2000);
    }, 2000);
});
