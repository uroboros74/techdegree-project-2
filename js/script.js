/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

"use strict";
var studentItems = $('.student-item');
var studentSearch ='<div class="student-search"><input id="search" placeholder="Search for students..."><button>Search</button></div>';
var pagination ='<div class="pagination"><ul></ul></div>';
var studentList = pages(studentItems);

// Appends
$('.page-header.cf').append(studentSearch);



// Generate an array of students for each page. Limit each page to a max of 10 students.
function pages(list) {
	var oldList = list.slice();
	var pagesArray = [];
	while (oldList.length) {
		pagesArray.push(oldList.splice(0,10));
	}
	return pagesArray;
}

// After generating the pages array of students, display the first page, hide the rest. 
function showPages(pageNumber, pageList) {
  $(".student-list li").hide();
  $.each(pageList, function(index, page){
      if (pageNumber === index) {
        $.each(page, function(i, listItem){
          $(listItem).fadeIn('fast');
        });
      }
  });
}

// Append buttons to page. The number of pages to show is found from the pageList.length. Add & remove active class on click, and on pageload add active class to first button.
function appendButtons(pageList) {
	$('.page').append(pagination);
	var numPages = pageList.length;
	for (var i = 1; i <= numPages; i++) {
		var buttons = '<li><a href="#">' + i + '</a></li>';
		$('.pagination ul').append(buttons);
	}
	$('.pagination ul li a').first().addClass('active');

	//Add click listeners
	  $(".pagination ul li a").on("click", function(e) {
	    var pageSelection = parseInt($(this)[0].text) - 1;
	    showPages(pageSelection, pageList);
	    $(".pagination ul li a").removeClass();
	    $(this).addClass("active");
	    e.preventDefault();
	  });
}

	
// Search function finds both name and/or email. If no results are found, change the header H2 to display No Results, otherwise display default Students title. On firing of the searchList, check input value to see if matches, if there are matches, generate the new student array & display appropriate list of buttons.
function searchList() {	
    var searchTerm = $('#search').val().toLowerCase().trim();

        var filteredStudents = studentItems.filter(function(i) {
        	var studentEmail = $(this).find('.email').text();
            var studentNames = $(this).find('h3').text();
            if (studentNames.indexOf(searchTerm) > -1 || studentEmail.indexOf(searchTerm) > -1) {
                return true;
            }
            return false;
        });
        if (filteredStudents.length === 0 ) {
        	$('.page-header h2').text('No Results');
        } else {
        	$('.page-header h2').text('STUDENTS');
        }
        var paginated_students = pages(filteredStudents);
        $('.pagination').remove();
        if (filteredStudents.length >= 10) {
          appendButtons(paginated_students);
        }
        showPages(0, paginated_students);
}

// Inits
appendButtons(studentList);
showPages(0, studentList);

// Event Handlers
$('.student-search').find('button').on('click', searchList);
$('.student-search').find('input').keyup(searchList);



/*** 
   The student 'list item' DOM elements are stored in the global variable 'studentList'. 
   need to reference and/or manipulate. 
   
   The number of items to show on each page, 'numItem', is set to a constant, 10.


var studentList= document.querySelectorAll('.student-item');
var numItem= 10;

var studentItems = $('.student-item');
var studentSearch ='<div class="student-search"><input id="search" placeholder="Search for students..."><button>Search</button></div>';
var pagination ='<div class="pagination"><ul></ul></div>';
var studentList = pages(studentItems);
$('.page-header.cf').append(studentSearch);

function pages(list) {
	var oldList = list.slice();
	var pagesArray = [];
	while (oldList.length) {
		pagesArray.push(oldList.splice(0,10));
	}
	return pagesArray;
}


/*** 
   `showPage` function hides all of the items in the 
   list except for the ten you want to show.
   The start and end index of the list in that given page, is calculated as startidx and endidx.
   The list parameter is looped over to display the index between startidx and endidx.

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



 /*** 
const appendPageLinks(studentList){

   var child = document.createElement('div');

  
   var pgNeeded = ceil(studentList.length / numItem);
      var pagination=
   "<div class=\"pagination\">"
   +"<ul>"

   for (var j = 0; j<pgNeeded; j++){
   +"<li>"
   +"<a href=\"#\">"+ pgNeeded +"</a>"
   +"</li>"
   
   pagination = pagination 
   +"</ul>"
   +"</div>";
 

   child.innerHTML = pagination;
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
***/