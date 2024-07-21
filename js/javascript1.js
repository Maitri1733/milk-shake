function login()
		{
			var txt=document.getElementById("txt").value;
			var txt1=document.getElementById("txt1").value;
			var txt2=document.getElementById("txt2").value;
			var psw=document.getElementById("psw").value;
			if(txt=="Maitri"&&psw=="1234"&&txt1=="7096392571"&&txt2=="ma@gmail.com")
			{
				/*window.location.replace("home.html");*/
				window.alert("Your Login Susseccefully...");
			}
			else
			{
				window.alert("Your Login failed...");
				window.location.replace("login.html");
			}
		};