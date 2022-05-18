    function startClassification() {
        navigator.mediaDevices.getUserMedia({ audio: true});
        classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/pRf-aokZl/model.json' , modelReady);
    }
    
    function modelReady() {
        classifier.classify(gotResults);
    
    }
    
    function gotResults(error,results) {
        if(error) {
            console.error(error);
        }
            console.log("results");
            r = Math.floor(Math.random() * 255) + 1;
            g = Math.floor(Math.random() * 255) + 1;
            b = Math.floor(Math.random() * 255) + 1;

            document.getElementById("result_label").innerHTML = "I can hear -"+ results[0].label;
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
        document.getElementById("result_accuracy").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("result_accuracy").style.color = "rgb("+r+","+g+","+b+")";

        img = document.getElementById('bird.png');
        img1 = document.getElementById('cat.png');
        img2 = document.getElementById('dog.png');
        img3 = document.getElementById('lion.png');

        if (results[0].label == "Bird") {
            img.src = 'bird-chirp.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == 'Cat') {
            img.src = 'aliens-01.png';
            img1.src = 'cat-meow.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        }
        else if (results[0].label == 'Dog') {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'dog-bark.gif';
            img3.src = 'aliens-04.png';
    }
        else {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'lion-roar.gif';  
        }   

}
}