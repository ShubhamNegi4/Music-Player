console.log("Welcome to Spotify");
//Initilize the variables
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let mastersongname = document.getElementById('mastersongname');
let songitemplay = document.getElementsByClassName('songitemplay');

let songs = [
    {songname: "Beautiful Day(The Kiffness x Rushawn)", filepath: "songs/1.mp3", coverpath:"covers/1.jpg"},
    {songname: "Daylight(David Kushner)", filepath: "songs/2.mp3", coverpath:"covers/2.jpg"},
    {songname: "Calling(Metro Boomin)", filepath: "songs/3.mp3", coverpath:"covers/3.jpg"},
    {songname: "Shinunoga E-Wa( Fujii Kaze)", filepath: "songs/4.mp3", coverpath:"covers/4.jpg"},
    {songname: "GO(ft.juice WRLD)", filepath: "songs/5.mp3", coverpath:"covers/5.jpg"},
    {songname: "Time Flies(Drake)", filepath: "songs/6.mp3", coverpath:"covers/6.jpg"},
    {songname: "In my feeling(Drake)", filepath: "songs/7.mp3", coverpath:"covers/7.jpg"}
]
//Handle play pause
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime==0){
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');   
    }
    else{
        audioelement.pause();
        gif.style.opacity = 0;  
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})

//Listen to events
audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //seek bar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value*audioelement.duration/100;
})

Array.from(document.getElementsByClassName('songitemplay')).forEach((Element)=> {
    Element.addEventListener('click',(e)=>{
        if(e){
            songindex = parseInt(e.target.id);
            mastersongname.innerText =  songs[songindex-1].songname;
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            audioelement.src = `songs/${songindex}.mp3`;
            audioelement.currentTime= 0;
            audioelement.play();
        }

    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>7)
    {
        songindex = 1;
    }
    else
    {
        songindex+=1
    }
    mastersongname.innerText =  songs[songindex-1].songname;
    audioelement.src = `songs/${songindex}.mp3`;
    audioelement.currentTime= 0;
    audioelement.play();    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<1)
    {
        songindex = 7;
    }
    else
    {
        songindex-=1;
    }
    mastersongname.innerText =  songs[songindex-1].songname;
    audioelement.src = `songs/${songindex}.mp3`;
    audioelement.currentTime= 0;
    audioelement.play();   
})