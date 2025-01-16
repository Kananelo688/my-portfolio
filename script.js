/***
 * Description: Javascript file for the webpage interactivity.
 * 
 * Filename: script.js
 * 
 * Author:Kananelo Chabeli
 */

// Add click event listeners to all clickable bars

function clickableBarEventHandler(){
    //add some annimation

    //First check to see if the event is close or open(by checking the display status of the nextElementSibing)
    if(this.nextElementSibling.style.display == "none"){
        //check the button icon to drop-up
        this.lastElementChild.src = "images/drop_up.webp";

        //display the content: about section must be block,and the rest 'flex'
        if (this.nextElementSibling.id == "about"){
            this.nextElementSibling.style.display="block";
        }else{
            // if the required content is not the about display it in flex mode.
            this.nextElementSibling.style.display="grid";
        }
    }else{
        //if the button pressed is now the drop-up, hide the content
        this.nextElementSibling.style.display= "none";
        //change the icon to drop up
        this.lastElementChild.src = "images/dropdown.png";
    }

}

function main(){
    //Add event listeners for clickable bars
    document.querySelectorAll(".clickable-bar").forEach(bar =>{
        bar.nextElementSibling.style.display = "none"; //ensure that the content is initially hidden
        bar.addEventListener('click',clickableBarEventHandler);
    });
}

window.onload = main;