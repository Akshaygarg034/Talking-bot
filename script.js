var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

const main = document.querySelector('#main');
const main_back = document.querySelector('#main-back');
const main_back_back = document.querySelector('#main-back-back');
const robo_gif = document.querySelector('.robo-gif');
const music = document.querySelector('#music');

var music_collection = ["audios/a.mp3", "audios/b.mp3", "audios/c.mp3"]
var num = Math.floor(Math.random() * music_collection.length)
var random_music = new Audio(music_collection[num]);

var meme_collection = ['memes/Abeh Tu thoda sa bahan ka loda hai kya.mp3', 'memes/Chus Mera Lauda.mp3', 'memes/Lode Ho tum wo bhi Tede Wale.mp3', 'memes/Nahi.mp3', 'memes/Tatte chahiye na.mp3', 'memes/Yahi Patak Ke Chod Denge Chal Nikal Madharchod.mp3', 'memes/Ye to very nice bund hai.mp3']
var num1 = Math.floor(Math.random() * music_collection.length)
var random_meme = new Audio(meme_collection[num]);

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
        main.classList.add('main-music');
        main_back.classList.add('main-back-music');
        main_back.style.visibility = 'visible';
        robo_gif.style.display = 'block';

        setTimeout(() => {
            music.play();
            main_back_back.style.visibility = 'visible';
        }, 3000);
    }
    else if (transcript === "stop music" || transcript === "stop") {
        recognition.stop();
        main.classList.remove('main-music');
        main_back.classList.remove('main-back-music')
        main_back.style.visibility = 'hidden'

        music.pause();
        music.currentTime = 0;
        random_music.pause();
        random_music.currentTime = 0;

        random_meme.pause();
        random_meme.currentTime = 0;

        robo_gif.style.display = 'none';
        main_back_back.style.visibility = 'hidden';
    }
    else if (transcript === "play random music") {
        recognition.stop();
        main.classList.add('main-music');
        main_back.classList.add('main-back-music');
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
    else if (transcript === "show me some latest news") {
        recognition.stop();
        utter.text = "Showing top 20 latest news by NDTV!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
        window.open("News Website/index.html");
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
    ///////////////////***********Memes***********//////////////////

    // else if (transcript === "bol") {
    //     recognition.stop();
    //     main_back.style.visibility = 'visible';
    //     random_meme.play();
    // }
    // else if (transcript === "Kisi Samjha yaar") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Abey Padhai Likhai Karo IAS Bano.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "play Rupali song") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Ae Rupali.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "Aisa ho sakta hai kya") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Asambhav.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "play Chut song") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Choot Vol 1 - Yo Yo Honey Singh Badshah.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "Arjun is very smart") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Haha Noob laughing.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "play harmonium song") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Harmane.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "Thug life") {
    //     recognition.stop();
    //     let meme = new Audio('memes/I am the one.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "play Kache Badam") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Kacha Badam.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "kya Lag Gaye") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Lode Lag Gaye.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "kya kar sakta hai") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Lund krva dunga fund krva dunga.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "Maa chuda") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Maa Chuda.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "who is arjun?") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Maa Chuda.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "kya koi Fark padta hai") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Maa ki chut farak hi ni padta.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "play Teri Chu") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Teri Chu.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    // else if (transcript === "play thukra ke mera pyar") {
    //     recognition.stop();
    //     let meme = new Audio('memes/Thukra Ke Mera Pyar Mera Intekam Dekhegi.mp3');
    //     meme.play();
    //     main_back.style.visibility = 'visible';
    // }
    else {
        recognition.stop();
        utter.text = "Please say it again!";
        synth.speak(utter);
        main_back.style.visibility = 'visible';
    }
}
