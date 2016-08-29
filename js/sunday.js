$(function(){
	$('footer .fa-qq').click(function(){
		alert("你好，这是我的QQ号：416484274，欢迎联络！");
		 return false;
	});
	$('footer .fa-envelope-o').click(function(){
		alert("你好，这是我的e-mail地址：lxy_jane@126.com，欢迎联络！");
		 return false;
	});
	$('#four .actions').click(function(){
		var name = $('#name').val();
		var email = $('#email').val();
		var message = $('#message').val();
		var args = [];
		var url = "";
		
		if (name == "") {
			alert("请输入您的姓名！");
			return false;
		} else if(email == ""){
			alert("请输入您的E-mail地址！");
			return false;
		} else if(message == ""){
			alert("请输入您要发送的内容！");
			return false;
		} else {
			args.push('subject='+encodeURIComponent(name)+' '+email);
			args.push("body="+encodeURIComponent(message));
			if (args.length>0) {
				url += '?' + args.join('&');
			}
			$('#mailto').attr("href",$('#mailto').attr('href')+url);
			return true;
		}
	})
})
