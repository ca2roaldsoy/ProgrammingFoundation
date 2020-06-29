var myAudioOne = document.getElementById("myAudioOne");
var myAudioTwo = document.getElementById("myAudioTwo");
var myAudioThree = document.getElementById("myAudioThree");

var songOne = document.getElementById("songOne");
var songTwo = document.getElementById("songTwo");
var songThree = document.getElementById("songThree");

var songTextOne = document.getElementById("btnPressedAudioOne");
var songTextTwo = document.getElementById("btnPressedAudioTwo");
var songTextThree = document.getElementById("btnPressedAudioThree");

var audioMuteOne = document.getElementById("muteAudioOne")
var audioMuteTwo = document.getElementById("muteAudioTwo")
var audioMuteThree = document.getElementById("muteAudioThree")

var myVideo = document.getElementById("myVideo");
var videoPlayPause = document.getElementById("playpauseVideo");
var videoText = document.getElementById("btnPressedVideo");

var closeInstructions = document.getElementById("closeInstructions")
var instructions = document.getElementById("instructions")

var action1 = "playing";
var action2 = "stopped";
var action3 = "mute";
var podcast1 = "audio";
var podcast2 = "video";

var likesOne = 101;
var likesTwo = 176;
var likesThree = 226;
var unlikesOne = 26;
var unlikesTwo = 16;
var unlikesThree = 13;
var likesVideo = 236;
var unlikesVideo = 6;
            
            
/////////////////////// Audio ///////////////////////////////////////////////////                

function myPodcast(action, podcast){ 
        
        //Song One
        songOne.addEventListener("click", function() {
            
            if (myAudioOne.paused) {
                    myAudioOne.play();
                    myAudioTwo.pause();
                    myAudioThree.pause();
                    myAudioOne.loop = true;
                    songTextOne.innerHTML = action1 + " " + podcast1;
                    songTextTwo.innerHTML = action2 + " " + podcast1;
                    songTextThree.innerHTML = action2 + " " + podcast1;
                    songTextOne.style.visibility = "visible";
                    songOne.style.background = "url(images/pause.png) no-repeat";
                    songTwo.style.background = "url(images/play.png) no-repeat";
                    songThree.style.background = "url(images/play.png) no-repeat";
                    
                } else {
                    
                    myAudioOne.pause();
                    songTextOne.innerHTML = action2 + " " + podcast1;
                    songTextOne.style.visibility = "visible";
                    songOne.style.background = "url(images/play.png) no-repeat";
                }
        });
    
            
        //Song Two
        songTwo.addEventListener("click", function() {
            
            if (myAudioTwo.paused) {
                    myAudioTwo.play();
                    myAudioOne.pause();
                    myAudioThree.pause();
                    myAudioTwo.loop = true;
                    songTextTwo.innerHTML = action1 + " " + podcast1;
                    songTextOne.innerHTML = action2 + " " + podcast1;
                    songTextThree.innerHTML = action2 + " " + podcast1;
                    songTextTwo.style.visibility = "visible";
                    songTwo.style.background = "url(images/pause.png) no-repeat";
                    songThree.style.background = "url(images/play.png) no-repeat";
                    songOne.style.background = "url(images/play.png) no-repeat";
                    
                } else {
                    
                    myAudioTwo.pause();
                    songTextTwo.innerHTML = action2 + " " + podcast1;
                    songTextTwo.style.visibility = "visible";
                    songTwo.style.background = "url(images/play.png) no-repeat";
                    
                }
        });
    

        //Song Three
        songThree.addEventListener("click", function() {
            
            if (myAudioThree.paused) {
                    myAudioThree.play();
                    myAudioTwo.pause();
                    myAudioOne.pause();
                    myAudioThree.loop = true;
                    songTextThree.innerHTML = action1 + " " + podcast1;
                    songTextOne.innerHTML = action2 + " " + podcast1;
                    songTextTwo.innerHTML = action2 + " " + podcast1;
                    songTextThree.style.visibility = "visible";
                    songThree.style.background = "url(images/pause.png) no-repeat";
                    songTwo.style.background = "url(images/play.png) no-repeat";
                    songOne.style.background = "url(images/play.png) no-repeat";
                
                } else {
                    
                    myAudioThree.pause();
                    songTextThree.innerHTML = action2 + " " + podcast1;
                    songTextThree.style.visibility = "visible";
                    songThree.style.background = "url(images/play.png) no-repeat";
                }
        });
    
    
        //Mute Song One    
        audioMuteOne.addEventListener("click", function(){
                
                if (myAudioOne.muted) {
                    myAudioOne.muted = false
                    songTextOne.style.visibility = "hidden";
                    audioMuteOne.style.background = "url(images/sound.png) no-repeat";
            
                
                
                } else {
                    
                    myAudioOne.muted = true;
                    songTextOne.innerHTML = action3 + " " + podcast1;
                    songTextOne.style.visibility = "visible";
                    audioMuteOne.style.background = "url(images/mute.png) no-repeat";
                    
                }
                
        });
    
        
        //Mute Song Two
        audioMuteTwo.addEventListener("click", function(){
                
                if (myAudioTwo.muted) {
                    myAudioTwo.muted = false
                    songTextTwo.style.visibility = "hidden";
                    audioMuteTwo.style.background = "url(images/sound.png) no-repeat";
                
                
                
                } else {
                    
                    myAudioTwo.muted = true;
                    songTextTwo.innerHTML = action3 + " " + podcast1;
                    songTextTwo.style.visibility = "visible";
                    audioMuteTwo.style.background = "url(images/mute.png) no-repeat";
                    
                }
                    
        });
    
                
        //Mute Song Three
        audioMuteThree.addEventListener("click", function(){ 

                if (myAudioThree.muted) {
                    myAudioThree.muted = false
                    songTextThree.style.visibility = "hidden";
                    audioMuteThree.style.background = "url(images/sound.png) no-repeat";
                
                } else {
                    
                    myAudioThree.muted = true;
                    songTextThree.innerHTML = action3 + " " + podcast1;
                    songTextThree.style.visibility = "visible";
                    audioMuteThree.style.background = "url(images/mute.png) no-repeat";
                    
                }

        });
    
/////////////////////// Video ///////////////////////////////////////////////////  

        videoPlayPause.addEventListener("click", function() {
                                         
                if (myVideo.paused) {
                    myVideo.play();
                    myVideo.loop = true;
                    videoText.innerHTML = action1 + " " + podcast2;
                    videoText.style.visibility = "visible";
                    videoPlayPause.style.background = "url(images/pause.png) no-repeat";
                
                } else {
                    
                    myVideo.pause();
                    videoText.innerHTML = action2 + " " + podcast2;
                    videoText.style.visibility = "visible";
                    videoPlayPause.style.background = "url(images/play.png) no-repeat";
                    
                }
            })
};

//call the function.
myPodcast(action1, podcast1);
            
/////////////////////// Emoji Rating /////////////////////////////////////////////////// 

function emojiOne() {
            
    emojiRatingOne.innerHTML=likesOne
    likesOne=likesOne+1

};

function uEmojiOne() {
            
    uEmojiRatingOne.innerHTML=unlikesOne
    unlikesOne=unlikesOne+1

};
        
function emojiTwo() {
            
    emojiRatingTwo.innerHTML=likesTwo
    likesTwo=likesTwo+1

};
        
function uEmojiTwo(){
            
    uEmojiRatingTwo.innerHTML=unlikesTwo
    unlikesTwo=unlikesTwo+1

};
        
function emojiThree(){
            
    emojiRatingThree.innerHTML=likesThree
    likesThree=likesThree+1

};
        
function uEmojiThree(){
            
    uEmojiRatingThree.innerHTML=unlikesThree
    unlikesThree=unlikesThree+1
        
};

function emojiVideo(){
            
    emojiRatingVideo.innerHTML=likesVideo
    likesVideo=likesVideo+1
        
};

function uEmojiVideo(){
            
    uEmojiRatingVideo.innerHTML=unlikesVideo
    unlikesVideo=unlikesVideo+1
        
};

window.setTimeout(function(){ 
                
            alert("Instructions" + "\n" + "\n" + 
            "1. Press play button to play the audio or video" + "\n" + 
            "2. Press mute button to mute the audio sound" + "\n" +
            "3. Press the 'happy smiley' to like the audio/video" + "\n" +
            "4. Press the 'unhappy smiley' to dislike the audio/video"
                                )}, 0500)