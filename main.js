var dog = 0
var cat = 0
var lion = 0
var cow = 0

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/M53X3na19/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*225) + 1
        random_number_g = Math.floor(Math.random()*225) + 1
        random_number_b = Math.floor(Math.random()*225) + 1

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+", Detected Cat - "+cat+", Detected Lion - "+lion+", and Detected Cow - "+cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        
        document.getElementById("animal_voices").innerHTML = "Detected Voice is Of - " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById("animal_images");

        if(results[0].label == "Barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
        }
        else if(results[0].label == "Roaring"){
            img.src = "https://imgs.search.brave.com/FvxWJZrZ61PU9HH8ApH2PjCqK1HMqARnCIpJauZ-4xg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91c2Fn/aWYuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9naWYvbGlvbi1y/b2FyLTIuZ2lm.gif";
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://imgs.search.brave.com/Z6wYyNUiF9gsbHwbQjotXpwOWUVYZKlJhpFj1cJg9-0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/YW5pbWF0ZWRpbWFn/ZXMub3JnL2RhdGEv/bWVkaWEvMjExL2Fu/aW1hdGVkLWNvdy1p/bWFnZS0wMTA0Lmdp/Zg.gif";
        }
        else{
            img.src = "https://shravarpatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}