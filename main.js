status = "";
object = "";

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object";
    document.getElementById("input").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function draw()
{
    image(video, 0, 0, 380, 380);

    if(status != "")
    {
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i++) 
        {
            document.getElementById("status").innerHTML = "Status : object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of object detected are : " + object.length;
        }

    }

}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    object = results;
}
