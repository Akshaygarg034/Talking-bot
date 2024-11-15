const assets = [
    "audios/a.mp3",
    "audios/b.mp3",
    "audios/c.mp3",
    "audios/Shape of You.mp3",
    "robos/1.gif",
    "robos/2.gif",
    "robos/3.gif",
    "robos/4.gif",
    "robos/5.gif",
    "robos/7.gif",
    "robos/8.gif",
    "robos/9.gif",
    "robos/10.gif",
    "robos/a.gif",
    "robos/b.gif",
    "robos/c.gif",
    "robos/d.gif",
    "robos/e.gif",
    "robos/f.gif",
    "robos/g.gif",
    "robos/h.gif",
    "robos/i.gif",
];

function preloadAssets(assets) {
    const promises = assets.map(asset => {
        return new Promise((resolve, reject) => {
            if (asset.endsWith('.gif') || asset.endsWith('.jpg') || asset.endsWith('.png')) {
                // Preload images
                const img = new Image();
                img.src = asset;
                img.onload = resolve;
                img.onerror = reject;
            } else if (asset.endsWith('.mp3')) {
                // Preload audio
                const audio = new Audio();
                audio.src = asset;
                audio.onloadeddata = resolve;
                audio.onerror = reject;
            } else {
                resolve();
            }
        });
    });

    return Promise.all(promises);
}


var loader = document.getElementById("preloader");
window.addEventListener("load", ()=> {
    preloadAssets(assets)
    .then(() => {
        loader.style.display = "none";
    })
    .catch(error => {
        loader.style.display = "none";
    });
})

const mainBox = document.querySelector('.main-box');
const subMainBox = document.querySelector('.sub-main-box');
const main = document.querySelector('.main-img');
const main_back = document.querySelector('.main-back-img');
const main_back_back = document.querySelector('.main-back-back-img');
const robo_gif = document.querySelector('.robo-gif');
const music = document.querySelector('#music');

var music_collection = ["audios/a.mp3", "audios/b.mp3", "audios/c.mp3"]
var num = Math.floor(Math.random() * music_collection.length)
var random_music = new Audio(music_collection[num]);

var num1 = Math.floor(Math.random() * music_collection.length)

const recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const synth = window.speechSynthesis;

main.addEventListener("click", () => {
    recognition.start();
});

let utter = new SpeechSynthesisUtterance();
utter.pitch = 1.8;
utter.rate = 1;
utter.volume = 1;
utter.lang = "hi-IN" && "en-US";

utter.onend = () => {
    main_back.style.visibility = 'hidden';
    recognition.start();
};

recognition.onresult = (e) => {
    const transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript);

    // recognition.stop();
    // utter.text = transcript;
    // synth.speak(utter);
    // main_back.style.visibility='visible';

    if (transcript === "hello") {
        recognition.stop();
        utter.text = "Hi";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "how are you") {
        recognition.stop();
        utter.text = "perfect as always!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "thank you") {
        recognition.stop();
        utter.text = "your welcome";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "good morning") {
        recognition.stop();
        utter.text = "very good morning!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "good afternoon") {
        recognition.stop();
        utter.text = "very good afternoon!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "good evening") {
        recognition.stop();
        utter.text = "very good evening!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "good night") {
        recognition.stop();
        utter.text = "good night!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "goodbye" || transcript === "bye") {
        recognition.stop();
        utter.text = "Hope to see you soon!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
    else if (transcript === "play music") {
        recognition.stop();
        subMainBox.classList.add('main-music');
        main_back.style.visibility = 'visible';
        robo_gif.style.display = 'block';

        setTimeout(() => {
            music.play();
            main_back_back.style.visibility = 'visible';
        }, 3000);
    }
    else if (transcript === "stop music" || transcript === "stop") {
        recognition.stop();
        subMainBox.classList.remove('main-music');
        main_back.style.visibility = 'hidden'

        music.pause();
        music.currentTime = 0;
        random_music.pause();
        random_music.currentTime = 0;

        robo_gif.style.display = 'none';
        main_back_back.style.visibility = 'hidden';
    }
    else if (transcript === "play random music") {
        recognition.stop();
        subMainBox.classList.add('main-music');
        main_back.style.visibility = 'visible';
        robo_gif.style.display = 'block';
        setTimeout(() => {
            random_music.play();
            main_back_back.style.visibility = 'visible';
        }, 3000);
    }
    else if (transcript === "open Google") {
        recognition.stop();
        utter.text = "opening Google for you now!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://www.google.com/");
    }
    else if (transcript === "open Instagram") {
        recognition.stop();
        utter.text = "opening Instagram for you now!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://www.instagram.com/accounts/login/");
    }
    else if (transcript === "open Facebook") {
        recognition.stop();
        utter.text = "opening Facebook for you now!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://www.facebook.com/");
    }
    else if (transcript === "open WhatsApp") {
        recognition.stop();
        utter.text = "opening Whatsapp for you now!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://web.whatsapp.com/");
    }
    else if (transcript === "open LinkedIn") {
        recognition.stop();
        utter.text = "opening Linkedin for you now!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://www.linkedin.com/");
    }
    else if (transcript === "open YouTube") {
        recognition.stop();
        utter.text = "opening Youtube for you now!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://www.youtube.com/");
    }
    else if (transcript === "open my notes") {
        recognition.stop();
        utter.text = "Opening!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://akshay-notes.netlify.app/");
    }
    else if (transcript === "open calculator") {
        recognition.stop();
        utter.text = "Opening calculator!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://akshaygarg-calculator.netlify.app/");
    }
    else if (transcript === "open Tic Tac Toe game") {
        recognition.stop();
        utter.text = "Opening!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://akshay-tic-tac-toe.netlify.app/");
    }
    else if (transcript === "open my into the net project") {
        recognition.stop();
        utter.text = "Opening your project!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://intothenet.netlify.app/");
    }
    else if (transcript === "open my kitten music project") {
        recognition.stop();
        utter.text = "Opening your project!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://kittenmusic.netlify.app/");
    }
    else if (transcript === "open my chatting website project") {
        recognition.stop();
        utter.text = "Opening your project!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("https://akshay-coolchat.herokuapp.com/");
    }
    else {
        recognition.stop();
        utter.text = "Please say it again!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
}
