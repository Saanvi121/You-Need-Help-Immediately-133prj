status = ""
objects = ""

function preload()
{
    img1 = loadImage('bedroom.jpg')
}

function setup()
{
    canvas = createCanvas(575, 350)
    canvas.position(450,250)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("bedstat").innerHTML = "Status: Detecting Objects"
}

function modelLoaded()
{
  console.log("Model Loaded")
  status = "Yes";
  objectDetector.detect(img1, gotResult);
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
    image(img1, 0,0,575, 350)

  if(status == "Yes")
  {
    for(i=0; i<objects.length;i++)
    {
      fill("magenta")
      textSize(30)
      text(objects[i].label, objects[i].x, objects[i].y)
      noFill()
      stroke("magenta")
      rect(objects[i].x-150,objects[i].y-50,objects[i].width,objects[i].height)
      document.getElementById("bedstat").innerHTML = "Status: Objects detected"
    }
  }
  
}