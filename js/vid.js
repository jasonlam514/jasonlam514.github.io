$(document).ready(function() {
		  $("#video-view").css('padding-top',$(".navbar-right").height()+10);
		  if((/Android|webOS|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
			//alert('computer');
			$('section:nth-child(even)').css('background-attachment','scroll');
		  };
		  //$("body").attr('data-offset',$("section").height()/0.7);
		  //$("section").attr('data-offset',$("section").height()/0.7);
		  var today = new Date();
		  var date = new Date(1994,5,14,9,0,0);
		  var age = ((today - date)/(1000*60*60*24*365));
		  $("#results").html(Math.floor(age.toFixed(1)).toString());
			$(".bod").click(function(){
				$(".bod").fadeOut();
				$(".bod").fadeIn();
			});
			var bg = 1;
			$("section:nth-child(even)").click(function(){
				if(bg==1){
					$(this).css("background-image", "url()");
					bg = 0;
				} else {
					$(this).css("background-image", "url(img/giraffe.svg)");
					bg = 1;
				}
			});
			$(".popup").click(function () {
				//document.getElementById('about').style.height = $('#video-view').offset()+300+$(window).height();
				$("#video-view").css({"width":"600","max-width":"100vw","max-height":"70vh","margin":"0 auto"});
				var $this = $(this);
				var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width":"100%","height": "40vh"});
				var $title = $("<h2>").text($this.data("title")).attr("class","pad");
				//var $button = $("<button>").text("hide").attr("onclick","hide()");
				$("#video-view").html($title).append($iframe);
				$iframe.wrap("<div class='class-video'>");
				//$("#video-view").css({'background-color':'#FF69B4'});
				//
				$("#video-view").slideToggle('slow',hide);
			});
		});
		
function hide(bool) {
		if($.scrollify.isDisabled()){
			$.scrollify.enable();	
		}
		$.scrollify.update();
		if(bool!=='ab'&&bool!==undefined){
			$('#about').css('height','100vh');
		}
		if(bool==undefined){
			if ($("#video-view").is(':visible')) {
				//var el = document.getElementById("about");
				//var height = el.offsetHeight;
				//$('#video-view').height("+=20");
				//$("#video-view").css({'height':'+=20px'});
				var newHeight = $(window).height() + $('#video-view').outerHeight() + $('.pad').outerHeight();
				//el.style.height = newHeight + 'px';
				$('#about').css('height',newHeight + 'px');
				//$.scrollify.disable();
				//$.scrollify.enable();
				$.scrollify.update();
				if((/Android|webOS|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent) )) {
					$.scrollify.disable();
				}
				//$("html, body").animate({scrollTop: $("#video-view").offset().top},800);
				$("html, body").animate({ scrollTop: $("#contact").offset().top-$(window).height()}, 800);
			}else{
				$("html, body").animate({scrollTop: $("#about").offset().top},800);
				$('#video-view').css('display','none');
				$('#video-view h2').remove(); 
				$('#video-view div').remove();
				$('#about').css('height','100vh');
				$.scrollify.update();
				//$('#video-view').css('padding-top',$(".navbar-right").height()+10);	
				if($.scrollify.isDisabled()){
					$.scrollify.enable();	
				}
			}
		}else{
			if(bool=='ho'||bool=='co'){
				//$('#video-view').css('padding-top',$(".navbar-right").height()+10);	
				$('#video-view').css('display','none');
				$('#video-view h2').remove(); 
				$('#video-view div').remove();
				//$.scrollify.update();
				//document.getElementById("about").style.height = $(window).height() + 'px';
				if($.scrollify.isDisabled()){
					$.scrollify.enable();	
				}
				if(bool=='ho'){
					$.scrollify.move("#home");
				}else{
					$.scrollify.move("#contact");
				}
			}else if(bool=='ab'){
				$.scrollify.move("#about");
			}
		}
		return false;
	  }