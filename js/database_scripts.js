// JavaScript Document
$(document).ready(function(e) {
    	html5sql.openDatabase("com.studybuddy.appdb", "Study Buddy Assignments", 3*1024*1024);
		
		// Index.html
		if(window.location.href.indexOf("index.html") > -1) 
		{
			
			
		html5sql.process(
		["SELECT * FROM test;"],
		function(transaction, results, rowsArray){
			for(var items = 0; items < rowsArray.length; items++){
				var id = rowsArray[items].id;
				var className = rowsArray[items].className;
				var assignmentName = rowsArray[items].assignmentName;
				var assignmentDescription = rowsArray[items].assignmentDescription;	
				
				$("#list").append("<li ><a href='#demo-mail'><h3>" + className + "</h3><p class='topic'><strong>" + assignmentName + "</strong></p><p>" + assignmentDescription + " </p><p class='ui-li-aside'><strong>4:48</strong>PM</br><strong>10/1/2013</strong></p></a><a id='" + id + "' href='#' class='delete'>Delete</a></li>").listview("refresh");
				
				
			}
		
		}, function(error, statement) {
			alert('Error retrieving assignments.');	
		});
		}
		
    });
	
	