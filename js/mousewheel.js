/* 
  Found on vielhuber's github
  https://gist.github.com/vielhuber/6a894f6fa083949f6a3b4ea4c8a350fe
*/

document.addEventListener('wheel', function (e) {
  if (e.type != 'wheel') {
    return;
  }
  let delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
  delta = delta * (-60);
  document.documentElement.scrollLeft -= delta;
  document.getElementById('horizontalWrapper').scrollLeft -= delta;
  // safari needs also this
  document.body.scrollLeft -= delta;
});