$(document).ready(function(){
	var model = {

		catCount : 5,
		curCatNum: null,
		
		cats : [{ 
				  clickCount :0,
				  name:"cuteCat",
				  url: "images/image0.jpg",
				  admin:false
				},
				{ 
				  clickCount :0,
				  name:"prettyCat",
				  url: "images/image1.jpg",
				  admin:false
				},
				{ 
				  clickCount :0,
				  name:"niceCat",
				  url: "images/image2.jpg",
				  admin:true
				},
				{ 
				  clickCount :0,
				  name:"cutiePie",
				  url: "images/image3.jpg",
				  admin:false
				},
				{ 
				  clickCount :0,
				  name:"NicePic",
				  url: "images/image4.jpg",
				  admin:false
				},

		],

		init:function() {
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

 		setCurrentCatName: function(name) {
 			this.cats[this.curCatNum].name = name;
 		},

 		setCurrentCatUrl: function(url) {
 			this.cats[this.curCatNum].url = url;
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
			adminView.init();
		},
		
		addCount: function(val) {
			this.setCurrentCatClickCount(this.getCurrentCatClickCount(val) + 1);
			view.changeCountText();	
		},
		
		setCurrentCat: function(index) {
			model.setCurrentCat(index);
			view.render(index);
			adminView.render(index);
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

 		setCurrentCatName: function(name) {
 			model.setCurrentCatName(name);
 		},

 		setCurrentCatUrl: function(url) {
 			model.setCurrentCatUrl(url);
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
	
	var adminView = {
		init: function() {
			this.render(0);			
		},

		render:function(index) {
			if(controller.getSelectedCat(index).admin == true) {
				$('#adminView').show();
				this.showControls(index);
			}
			else {
				$('#adminView').hide();
			}

			$('#saveButton').click(function(){
				//alert($('#catNameInput').val());
				var cat = controller.getSelectedCat(controller.getCurrentCat());
				cat.name = $('#catNameInput').val();
				cat.clickCount = $('#catClickCount').val();
				cat.url = $('#catImgUrl').val();
				
			});

			$('#cancelButton').click(function() {
				$('#catNameInput').val(controller.getSelectedCat(controller.getCurrentCat()).name);	
				$('#catClickCount').val(controller.getSelectedCat(controller.getCurrentCat()).clickCount);	
				$('#catImgUrl').val(controller.getSelectedCat(controller.getCurrentCat()).url);	
			});
		},

		showControls: function(index) {
			$('#catNameInput').val(controller.getSelectedCat(index).name);	
			$('#catClickCount').val(controller.getSelectedCat(index).clickCount);	
			$('#catImgUrl').val(controller.getSelectedCat(index).url);	
		}
	};
	controller.init();	
});