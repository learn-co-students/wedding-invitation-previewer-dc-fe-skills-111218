document.addEventListener("DOMContentLoaded", function(e) {
  
  //keydown within firm display that keydown within the correct div
form.addEventListener("keyup", displayText);
  function displayText(){
    
    let yourLastNameInput = document.getElementById('yourLastName').value;
    document.getElementById('lastName').innerHTML = yourLastNameInput
    console.log(yourLastNameInput)
    
    let yourFirstNameInput = document.getElementById('yourName').value;
    let partnerNameInput = document.getElementById('yourPartnerName').value;
    
    document.getElementById('namesTogether').innerHTML = yourFirstNameInput + " & " + partnerNameInput
   
   let initialsInput= String(yourFirstNameInput)
    let partnerInitialsInput = String(partnerNameInput)
    document.getElementById('initials').innerHTML = initialsInput.charAt(0) + " & " + partnerInitialsInput.charAt(0)
  
   let dateInput = document.getElementById('yourWeddingDate').value;
   console.log(dateInput)
    document.getElementById('date').innerHTML = dateInput
   
   let weddingVenueInput = document.getElementById('yourWeddingVenue').value;
   document.getElementById('location').innerHTML = weddingVenueInput
                        }
    
    let casualDisplay = document.getElementById('casual')
    casualDisplay.addEventListener("click", switchCasualDisplay);
    
    function switchCasualDisplay(){     
        document.getElementById("elegantLink").href="casual.css";
      } 
    
    let quirkyDisplay = document.getElementById('quirky')
    quirkyDisplay.addEventListener("click", switchQuirkyDisplay);
      
      function switchQuirkyDisplay(){
        document.getElementById("elegantLink").href="quirky.css";
      }
      
      let elegantDisplay = document.getElementById('elegant')
    elegantDisplay.addEventListener("click", switchElegantDisplay); 
      function switchElegantDisplay(){
        document.getElementById("elegantLink").href="elegant.css";
      }
 
 
}) //end of DOMContentLoaded function