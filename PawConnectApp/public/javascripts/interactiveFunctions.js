// functions

function night() {
    console.log("clicked");
    if( document.getElementById("buttonTest").style.backgroundColor == "orange"){
      document.getElementById("buttonTest").style.backgroundColor = "pink";
    } 
    else {
      document.getElementById("buttonTest").style.backgroundColor = "orange";
    }
  }

  module.exports = night;