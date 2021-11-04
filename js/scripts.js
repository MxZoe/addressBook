let counter = 0;
function getName(firstName, lastName){
  return "Name: " + firstName + " " + lastName ;
}

function getAddress(addressOne, addressTwo, city, state){
  if(addressTwo != null){
    return "Address: " + addressOne + " " + addressTwo + " " + city + ", " + state;
  }
  else{
    return "Address: " + addressOne + " " + city + ", " + state;

  }
}




function addDiv(firstName, lastName, addressOne, addressTwo, city, state){
  $(".row").append("<div class='col-sm-3'>" + getName(firstName, lastName) + "\n" + getAddress(addressOne, addressTwo, city, state) + "</div>" );
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
    addDiv(firstName, lastName, addressOne, addressTwo, city, state);
    $("#formOne").trigger("reset");
    event.preventDefault();

  });
});