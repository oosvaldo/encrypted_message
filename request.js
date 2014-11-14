function sendRequest (operation){
	$.ajax({
		type: "POST",
		url: "encryptor.py",	
		data: {'message': $("#message").val(), 'operation':operation },
		success: function(result){
			$("#result-phrase").html(result);
		}
	});
}
