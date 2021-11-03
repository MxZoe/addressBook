function addNewAddress(color){
  let newButton = document.createElement("button");
  newButton.style.width("10%");

  return newButton;
}

$(document).ready(function(){
  $("form#formOne").submit(function(event){

    let color = $("#color").val();
    let firstName = $("#firstName").val();
    let firstInitial = firstName.charAt(0);
    let lastName =$("#lastName").val();
    let lastInitial = lastName.charAt(0);
    let initials = firstInitial.toUpperCase() + lastInitial.toUpperCase();
    let addressOne = $("#addressOne").val();
    let addressTwo = $("#addressTwo").val();
    let city = $("#city").val();
    let state = $("#state").val();
    let notes = $("#notes").val();
    const butt = addNewAddress(color);
    $("#display").append(butt);

    event.preventDefault();

  });
});