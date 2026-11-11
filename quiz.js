
function randInt(min, max){
   let num = Math.floor(Math.random() * (max - min + 1)) + min;
   return num;
}

console.log(randInt(100, 200));
//generate random numbers for M, N, and P
let M = randInt(500,700);
document.getElementById("M").innerHTML = M.toString();

let N = randInt(50, 150);
document.getElementById("N").innerHTML = N.toString();

let P = randInt(1, 15);
document.getElementById("P").innerHTML = P.toString();

//update the answer selection
document.querySelector('[value="3"]').nextSibling.nodeValue=M.toString()+"-"+N.toString()+"-"+P.toString();

//change style for the answer block -- click -- selected to unselected, unselected to selected.
function changeStyle(event) {//checkbox has default behavior in HTML
   event.preventDefault();
   console.log(this.getAttribute('class'));
   let classname = this.getAttribute('class');
   if (classname == "answer selected"){
      classname = "answer";
   }//change from answer to answer selectd

   else {
      classname = "answer selected";
   }
   this.setAttribute("class",classname);
}


//event -- action -- add event listener to all the selection item
let answers = document.getElementsByClassName('answer');
for (let i = 0; i < answers.length; i++) {
   answers[i].addEventListener('click', changeStyle);
}

