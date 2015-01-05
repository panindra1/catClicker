$(document).ready(function(){
	var model = {

		catCount : 5,
		curCatNum: null,
		catClickCount : [],
		
		cats : [{ 
				  clickCount :0,
				  name:"cuteCat",
				  url: "images/image0.jpg"
				},
				{ 
				  clickCount :0,
				  name:"prettyCat",
				  url: "images/image1.jpg"
				},
				{ 
				  clickCount :0,
				  name:"niceCat",
				  url: "images/image2.jpg"
				},
				{ 
				  clickCount :0,
				  name:"cutiePie",
				  url: "images/image3.jpg"
				},
				{ 
				  clickCount :0,
				  name:"NicePic",
				  url: "images/image4.jpg"
				},

		],

		init:function() {
			for(var i = 0; i < model.catCount; i++) {
				model.catClickCount[i] = 0;
			}
 		},

 		updateCount: function(val) {
 			model.catClickCount[val] = model.catClickCount[val] + 1;
 		},

 		setCurrentCat: function(selectedCat) {
 			model.curCatNum = selectedCat;
 		},

 		getCurrentCat: function() {
 			return model.curCatNum;
 		},

 		getSelectedCat: function(index) {
 			return model.cats[index];
 		},

 		setCurrentCatClickCount: function(index) {
 			this.cats[this.curCatNum].clickCount = index;
 		},


 		getCurrentCatClickCount: function(index) {
 			return this.cats[index].clickCount;
 		}
	};

	var controller = {
		init : function() {
			model.init();
			view.init();
			listView.init();
		},
		
		addCount: function(val) {
			
			this.setCurrentCatClickCount(this.getCurrentCatClickCount(val) + 1);
			view.changeCountText();	
		},
		
		setCurrentCat: function(index) {
			model.setCurrentCat(index);
			view.render(index);
		},

		getCurrentCat: function() {
			return model.getCurrentCat();
		},

		getSelectedCat: function(index) {
 			return model.getSelectedCat(index);
 		},

 		setCurrentCatClickCount: function(index) {
 			model.setCurrentCatClickCount(index);
 		},

 		getCurrentCatClickCount: function(index) {
 			return model.getCurrentCatClickCount(index);
 		}
	};

	var listView = {
		init: function() {
			listView.render();
		},

		render: function() {
			for (var i = 0; i < model.catCount; i++) {
				$('#catButtons').append("<button id= '"+controller.getSelectedCat(i).name+i+"'>" +controller.getSelectedCat(i).name+"</button>"); 
				$('#'+controller.getSelectedCat(i).name+i).on( "click", { value: i }, function( event ) {
					controller.setCurrentCat(parseInt(event.data.value));
				});
			}
		}
	};

	var view = {
		init: function() {
			controller.setCurrentCat(0);
			var currentItem = controller.getCurrentCat();
			this.render(currentItem);
		},

		render: function(index) {
			$('#catName').text(controller.getSelectedCat(index).name);
			$('#dynamicImage').html("<img id = 'image"+index+"' src= '"+controller.getSelectedCat(index).url+"' width = 300px height = 300px> </img>" );
			$('#catCount').text(controller.getSelectedCat(index).clickCount);

			$('#image'+index).on( "click", { value: index }, function( event ) {
				controller.addCount(parseInt(event.data.value));
			});
		},

		changeCountText: function() {		
			$('#catCount').text(controller.getSelectedCat(controller.getCurrentCat()).clickCount);
		}
	};
	
	controller.init();	
});