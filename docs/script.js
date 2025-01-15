/***********************************************************************************
 * Description: This is script for interactivityand events handling of the page.
 * FileName: code.js
 * @author Kananelo Chabeli
 * @Date: 27/12/2024
 * ********************************************************************************
 */

/**
 * Function that handles events figured by buttons that display detailed project descriptions
 */

function openProjectButtonHandler(){
    //First this is to hide all projects Tabs(Id=="project-titles")
    document.getElementById("project-titles").style.display="none";
    
    //Display the given project's details
    document.getElementById(this.id.substring(0,this.id.lastIndexOf('-'))).style.display="block";

}

/**
 * Function that Handles events fired by the menu button.
 */
function menuButtonHandler(){
    var x=document.getElementById("menu-items");
    if (x.style.display == "none"){
        x.style.display= "block";
    }else{
        x.style.display = "none";
    }

}
/**
 * Function that handles the project close button event.When the button is pressed. 
 * The project description is closed and all project titles are displayed.
 * 
 * The project close button's ID is given the ID names with formmat: project-name-buttonClose
 */
function closeProjectButtonHandler(){

    //close the project description.
    document.getElementById(this.id.substring(0,this.id.lastIndexOf('-'))).style.display="none";

    //now display the project titles
    document.getElementById("project-titles").style.display="grid";
}

/**
 * The main function, attaches handlers and all necessary configuration after the page has loaded
 */

function main(){

    //Attach event Handler of the Menu Button
    document.getElementById("menu-icon").onclick = menuButtonHandler;

    //attach event handler to all the project title buttons(open buttons)
    var projectsButtons= document.getElementById("project-titles").getElementsByClassName("project-tap");

    for (var ind = 0; ind<projectsButtons.length; ind++){
        projectsButtons[ind].getElementsByTagName("button")[0].onclick = openProjectButtonHandler;
    }

    //attach event handler to all project close buttons
    var projectCloseButtons = document.getElementsByClassName("project-header");

    for (var ind =0; ind<projectCloseButtons.length; ind++){
        projectCloseButtons[ind].getElementsByTagName("button")[0].onclick=closeProjectButtonHandler;
    }
}

/**
 * Attach the main function to the window.onload event
 */

window.onload = main;