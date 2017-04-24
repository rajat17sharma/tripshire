$(document).ready(function() {
	$("#login").css("visibility","hidden");
	$("#logindetails").css("visibility","hidden");
	$("#signin").on('click',function () {
		console.log("hello");
		setTimeout(function() {

			$("#signupdetails").css("visibility", "hidden");
		}, 1000);


		setTimeout(function() {
			$("#signup").css("visibility", "hidden");
			$("#login").css("visibility","initial");
			$("#logindetails").css("visibility","initial")
		}, 1000);
		$("#signup").css("animation",  "signupanimation 1s 0s");
		$("#signupdetails").css("animation","animate 1s 0s");	
	});


	$("#signupbutton").on("click",function(){
		console.log("h2");
		setTimeout(function(){

			$("#login").css("visibility", "hidden");
			$("#signup").css("visibility", "initial");
			$("#logindetails").css("visibility", "hidden");
			$("#signupdetails").css("visibility", "initial");
			location.reload();

		},1000);

		$("#login").css("animation","loginanimate 1s 0s");
		$("#logindetails").css("animation","logindetailsanimate 1s 0s");


	});

});
