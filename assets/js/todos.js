//Check off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("finished");
});

//Click on Delete
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(function(){
    $(this).remove()
  });
  e.stopPropagation();
});

$("input[type='text']").on("keypress", function(e) {
  if(e.which === 13 && $(this).val() != ""){
    var val = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + val + "</li>");
    $(this).val("")
  }
});

$(".fa.fa-plus").on("click", function(){
  $("input[type='text']").fadeToggle();

});
