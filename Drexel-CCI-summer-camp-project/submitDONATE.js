function validateName() {
  let x = document.forms["myForm"]["name"].value;
  if(x=="") {
    alert("Must be filled out")
    return false;
  }
  return true;
}

const form = document.getElementByID("myForm");
form.addEventListener("submit", function(event) {
  if(validateName()) {
    const name = form.elements.name.value;
    const music = document.querySelect('input[name="genre"]:checked'').value;

    const text = document.createElement("p");
    const response = document.createTextNode("Name: " + name + ", Answer: " + music);
    text.appendChild(response);
    const textSection = document.getElementById("responses");
    textSelection.appendChild(text);

    myForm.reset();
  }

  event.preventDefault();
  
});