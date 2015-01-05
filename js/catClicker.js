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
			//view.init();
			listView.init();
		},
		selectCat: function(val) {
			//alert();
			view.render(val, model.catClickCount[val]);
		},

		addCount: function(val) {
			model.updateCount(val);
			view.changeCountText(val, model.catClickCount[val]);
		}
	};

	var listView = {
		init: function() {
			for (var i = 0; i < model.catCount; i++) {
				$('#catButtons').append("<button id= '"+model.catNames[i]+i+"'>" +model.catNames[i]+"</button>"); 
				$('#'+model.catNames[i]+i).on( "click", { value: i }, function( event ) {
					controller.selectCat(parseInt(event.data.value));
				});
			}
		},
		render: function() {
		}
	};

	var view = {
		init: function() {
		},

		render: function(index, val) {
			//alert(value);
			$('#dynamicImage').html('');
			$('#dynamicImage').append("<div><label>" +model.catNames[index]+"</label></div><br /> "); 
			$('#dynamicImage').append("<img id = 'image"+index+"' src= 'images/image" +index+".jpg' width = 300px height = 300px> </img>" );
			$('#dynamicImage').append("<div><label id = 'clickCount"+index+"'>"+val+"</label></div><br />"); 
			
			$('#image'+index).on( "click", { value: index }, function( event ) {
					controller.addCount(parseInt(event.data.value));
			});
		},

		changeCountText: function(val, modelVal) {		
			$('#clickCount' + val).text(modelVal);
		}
	};
	
	controller.init();	
});