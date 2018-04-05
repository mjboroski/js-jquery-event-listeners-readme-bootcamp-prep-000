function getIt(){
  $('p').on("click", function(){
    alert('Hey!');
    return;
  });
}
function frameIt(){
  $('img').on("load", function(){
    $('img.class')='.tasty'
    return;
  });

}
function pressIt(){
  $('p').on("click", function(){
    alert('Hey!');
    return;
  });
}
function submitIt(){
  $('p').on("click", function(){
    alert('Hey!');
    return;
  });
}
$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
});
