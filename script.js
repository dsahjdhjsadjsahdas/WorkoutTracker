
const exerciseInputEl = document.getElementById("exerciseinput");

const bodyEl = document.getElementById("body");

let mainContainer = null;

let addSetButton = null;

let setInfo = null;





function addExercise()
{

    if(exerciseInputEl.value == ""){
        alert("Add Exercise First!")
        return;
    }

    

    mainContainer = document.createElement("div");
    let button = document.createElement("button");
    button.innerHTML = "Remove";
    button.style.background = "#d83131";
    button.addEventListener("click",removeExercise)
    mainContainer.appendChild(button);
    mainContainer.classList.add("MainContainer");
    bodyEl.appendChild(mainContainer);
    let exerciseName = document.createElement("h1");
    exerciseName.innerHTML = exerciseInputEl.value;
    mainContainer.appendChild(exerciseName);
    setInfo = document.createElement("div");
    setInfo.classList.add("setinfo");
    mainContainer.appendChild(setInfo);
    let weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.id = "exerciseweight";
    weightInput.placeholder = "Weight";
    setInfo.appendChild(weightInput);
    let repsInput = document.createElement("input");
    repsInput.type = "number";
    repsInput.id = "exercisereps";
    repsInput.placeholder = "Reps";
    setInfo.appendChild(repsInput);
     addSetButton = document.createElement("button");
     addSetButton.style.background = "#FFC436";
    addSetButton.innerHTML = "Add Set"
    mainContainer.appendChild(addSetButton);
    addSetButton.addEventListener("click", addSet);


    exerciseInputEl.value = "";


}

function removeExercise(e){
    let itemToRemove = e.target.parentNode;
   
    document.body.removeChild(itemToRemove);
    
   
}

function addSet(e){
    
    mainContainer = e.target.parentNode;
    addSetButton = e.target;
    let SetInfo = document.createElement("div");
    SetInfo.classList.add("setinfo");
    mainContainer.appendChild(SetInfo);
    let weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.id = "exerciseweight";
    weightInput.placeholder = "Weight";
    SetInfo.appendChild(weightInput);
    let repsInput = document.createElement("input");
    repsInput.type = "number";
    repsInput.id = "exercisereps";
    repsInput.placeholder = "Reps";
    SetInfo.appendChild(repsInput);
    mainContainer.removeChild(addSetButton);
    addSetButton = document.createElement("button");
    addSetButton.style.background = "#FFC436";
    addSetButton.innerHTML = "Add Set"
    mainContainer.appendChild(addSetButton);
    addSetButton.addEventListener("click", addSet);
    setInfo = SetInfo;
  

}




