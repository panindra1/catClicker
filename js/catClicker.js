
$(document).ready(function(){
	var model = {

		catCount : 5,
		catClickCount : [],
		catNames : ["cuteCat", "prettyCat", "niceCat", "cutiePie", "NicePic"],

		init:function() {
			for(var i = 0; i < model.catCount; i++) {
				model.catClickCount[i] = 0;
			}
 		},

 		updateCount: function(val) {
 			model.catClickCount[val] = model.catClickCount[val] + 1;
 		}
	};

	var controller = {
		init : function() {
			model.init();
			view.init();
		},
		addCount: function(val) {
			//model.catClickCount[val] = model.catClickCount[val] + 1;	
			model.updateCount(val);
			view.changeCountText(val, model.catClickCount[val]);
		}
	};

	var view = {
		init: function() {
			for (var i = 0; i < model.catCount; i++) {
			$('#dynamicImage').append("<div><label>" +model.catNames[i]+"</label></div><br />"); 
			$('#dynamicImage').append("<img id = 'image"+i+"' src= 'images/image" +i+".jpg' width = 300px height = 300px> </img>" );
			$('#dynamicImage').append("<div><label id = 'clickCount"+i+"'></label></div><br />"); 
			$('#image'+i).on( "click", { value: i }, function( event ) {
				controller.addCount(parseInt(event.data.value));
			});		
		  }
		},

		changeCountText: function(val, modelVal) {		
			$('#clickCount' + val).text(modelVal);
		}
	};
	
	controller.init();	
});