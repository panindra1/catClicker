var catCount = 2;

$(document).ready(function(){
	var catClickCount = [];
	for(var i = 0; i < catCount; i++) {
		catClickCount[i] = 0;
	}

	var catNames = ["cuteCat", "prettyCat"];

	for (var i = 0; i < catCount; i++) {
		$('#dynamicImage').append("<div><label>" +catNames[i]+"</label></div><br />"); 
		$('#dynamicImage').append("<img id = 'image"+i+"' src= 'images/image" +i+".jpg' width = 300px height = 300px> </img>" );
		$('#dynamicImage').append("<div><label id = 'clickCount"+i+"'>image" +0+"></label></div><br />"); 
		$('#image'+i).on( "click", { value: i }, function( event ) {
			var val = parseInt(event.data.value)
			catClickCount[val] = catClickCount[val] + 1;
			$('#clickCount' + val).text(catClickCount[val]);
		});
	}
	});