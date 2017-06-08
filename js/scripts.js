$(document).ready(function() {
  $("form#same").submit(function(event) {
    var sibling = $("input[name=sibling]:checked").val();
    var bad = $("input[name=bad]:checked").val();
    var color = $("select#class").val();
    var result = 'Ron <br> <img src="img/ron.jpg" alt="Picture of Ron">';
    if (sibling === 'No' && bad === 'Me? Mischievious??' || color === 'Red'){
      result = 'Hermoine <br> <img src="img/her.jpg" alt="Picture of Hermoine">';
    }
    if (bad === 'What can I say? I am a trouble maker.' && sibling === 'No') {
      result = 'Malfoy <br> <img src="img/malfoy.jpg" alt="Picture of Malfoy">';
    }
    if (sibling === 'No' && bad === 'I sometimes get in trouble or do not always follow the rules.'){
      result = 'Harry <br> <img src="img/harry.jpg" alt="Picture of Harry>';
    }
    $("#answer").show();
    $("#result").empty().append(result);
    $("#result").show();

    event.preventDefault();
  });
});
