function getIt(){
  $('p').on("click", function(){
    alert('Hey!');
    return;
  });
}
function frameIt(){
  $('img').on("load", function(){
    $('img[class]')='.tasty'
    return;
  });

}
function pressIt(){
  $('input').on("keydown", function(key){
    if(key===71){
      alert('Hey! You pressed G!');
    }
    return;
  });
}
function submitIt(){
  $('form').on("submit", function(){
    alert('Your form is going to be submitted now.');
    return;
  });
}
$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
