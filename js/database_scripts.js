// JavaScript Document
$(document).ready(function(e) {
    	html5sql.openDatabase("com.studybuddy.appdb", "Study Buddy Assignments", 3*1024*1024);
		
		// Index.html
		if(window.location.pathname == 'index.html') 
		{
			
			
		html5sql.process(
		["SELECT * FROM test;"],
		function(transaction, results, rowsArray){
			for(var items = 0; items < rowsArray.length; items++){
				var id = rowsArray[items].ID;
				var assignmentName = rowsArray[items].assignmentName;
				var assignmentDescription = rowsArray[items].assignmentDescription;	
				
				$("#list").append("<li><a href='#demo-mail'><h3>CSE 3330</h3><p class='topic'><strong>" + assignmentName + "</strong></p><p>" + assignmentDescription + " </p><p class='ui-li-aside'><strong>4:48</strong>PM</br><strong>10/1/2013</strong></p></a><a href='#' class='delete'>Delete</a></li>").listview("refresh");
				
				
			}
		
		}, function(error, statement) {
			alert('Error retrieving assignments.');	
		});
		}

    });