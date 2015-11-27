$( document ).ready(function() {
  

  
  // create your click handler here
  var score = 0;
  $('.mole').on('click', function() {
    if ($(this).css('display') == 'block') {
      $(this).hide();
      score++;
      $("#counter").text(score);
    }
  });


  // the below code calls on the play function found in game-functions.js
  // the play function calls on selectMole, then waits a second, then calls
  // on selectMole, then waits a second, you get the idea :)
  play();

});