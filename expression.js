var counter = 0;
var temp = 6;
var fps = thisComp.layer("controller").effect("fps")("Slider");
var falseFrames = thisComp.layer("controller").effect("False Frames")("Slider");
var frames = time * fps;
var seconds = 5 * Math.floor(time * (fps / falseFrames));
var tickSwitch = thisComp.layer("controller").effect("Tick Switch")("Checkbox");
var i;
function tick(){
  for (i = frames % falseFrames; i <= temp - 1 && frames >= falseFrames; i += 1) {
    temp -= 1;
    counter = temp + (temp - 1) * (Math.floor(time * (fps / falseFrames)) - 1);
  }
  var result = counter === 0 && frames > falseFrames ? seconds : counter;
  return result;
}
function rotate() {
  var rotation = time * (fps / falseFrames);
  return rotation;
}
var results = tickSwitch == 0 ? rotate() : tick();