/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   The student 'list item' DOM elements are stored in the global variable 'studentList'. 
   need to reference and/or manipulate. 
   
   The number of items to show on each page, 'numItem', is set to a constant, 10.
***/

var studentList= document.querySelectorAll('.student-item');
var numItem= 10;






/*** 
   `showPage` function hides all of the items in the 
   list except for the ten you want to show.
   The start and end index of the list in that given page, is calculated as startidx and endidx.
   The list parameter is looped over to display the index between startidx and endidx.
***/
function showPage(studentList, page){
   var startidx = (page * numItem) - numItem;
   var endidx = page * numItem;

   for (x=0; x< studentList.length; x++){
      
      if (x< endidx && x>=startidx){
         studentList[x].style.display = 'block';

      } else {
         
         studentList[x].style.display = 'none';

      }
   
   }
}





/*** 
   `appendPageLinks function` generates, appends, and add 
   functionality to the pagination buttons.

   A container DIV element with a class name of “pagination” houses the div element with the class name of page.

   'click' event listener uses a loop to capture each 'a' element and remove 'active' class names from all pagination links. 
   It also adds 'active' class name to the link that was just clicked.
***/

function appendPageLinks(studentList){

   var child = document.createElement('div');
      var pagination=
   "<div class=\"pagination\">"
   +"<ul>"
   +"<li>"
   +"<a class=\"active\" href=\"#\">1</a>"
   +"</li>"
   +"<li>"
   +"<a href=\"#\">2</a>"
   +"</li>"
   +"<li>"
   +"<a href=\"#\">3</a>"
   +"</li>"
   +"<li>"
   +"<a href=\"#\">4</a>"
   +"</li>"
   +"<li>"
   +"<a href=\"#\">5</a>"
   +"</li>"
   +"</ul>"
   +"</div>";
   child.innerHTML = pagination;98
   child = child.firstChild;
   
   
   document.querySelector('.page').appendChild(child);



var deleteActive = document.querySelectorAll('a');
for (var i = 0; i < deleteActive.length; i++){

   deleteActive[i].addEventListener("click", function(event){
      var element = document.querySelector(".active");
      event.preventDefault();
      event.target.classList.add("active");
      var page = event.target.textContent;
      showPage(studentList, parseInt(page));

  element.classList.remove("active");
   }
   

   );
}
}
   showPage(studentList, 2);
   appendPageLinks(studentList);
