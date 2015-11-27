function randomInt(min,max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function selectMole() {
  // here you're going to find what mole is visible
  var $visibleMole = $('tbody').find('.mole').filter(function(){
    return $(this).css('display') == 'block';
  });
  // hide the visible mole
  $visibleMole.hide('slide', {direction: 'down'});
  // select a new mole to visible, making sure it isn't the same as the previous one
  var prevMoleString = $visibleMole.attr('id');
  var newMoleString = "mole-num-"+randomInt(1,9);
  while (newMoleString == prevMoleString) {
    newMoleString = "mole-num-"+randomInt(1,9);
  }
  // and make the new mole visible
  $('#'+newMoleString).show('slide', {direction: 'down'});
}



// the function below is called on game.js and calls on your selectMole() function every second
function play() {
  setInterval(function() {
    selectMole();
  }, 1000);
}
