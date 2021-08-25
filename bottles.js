status = ""
objects = ""

function preload()
{
    img2= loadImage('bottles.jpg')
}

function setup()
{
    canvas = createCanvas(575, 350)
    canvas.position(450,250)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("bottlestat").innerHTML = "Status: Detecting Objects"
}

function modelLoaded()
{
  console.log("Model Loaded")
  status = "Yes";
  objectDetector.detect(img2, gotResult);
}

function gotResult(error, results)
{
  if (error)
  {
    console.log(error);
  }
  else{
  console.log(results);
  objects = results
  }
}

function draw()
{
    image(img2, 0,0,575, 350)

  if(status == "Yes")
  {
    for(i=0; i<objects.length;i++)
    {
      fill("magenta")
      textSize(30)
      text(objects[i].label, objects[i].x, objects[i].y)
      noFill()
      stroke("magenta")
      rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
      document.getElementById("bottlestat").innerHTML = "Status: Objects detected"
    }
  }
  
}