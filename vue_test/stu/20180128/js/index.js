$("div").html
			("你好我是div"
				);
			$(".div1").html
			("你好！通过学学习慕课网才是最佳途径"
				);
			$("#div2").html
			("你好！我事div2"
				);
			// $("#div2").hide()
			// 点击事件
			// $("button").click(function(){
			// 	console.log("12111");
			// 	 $("#div2").toggle()
			// 	});
			// $(".div1").click(function(){
			// 	$("#div2").show()
			// })
			// 
			// 
			//淡入淡出
			 $(".btn1").click(function(){
				console.log("fadeOut");
				 $("#div2").fadeToggle(1000)
				});
			 $(".btn2").click(function(){
				console.log("fadeIn");
				 $("#div2").fadeIn(1000)
				});
			