var perc = 0;

// var nameArray = ['Dennis', 'Ragina', 'Sybil', 'Neo', 'Yan', 'Chelsea']

setInterval(function() {

	perc++;

	if (perc <= 100) {

	$('#progress').css('width',perc + '%');

	} 

	if (perc == 100) {

		var total = buyerList.length;
		var randomIndex = Math.floor(Math.random()*total);

		$('#username, #buy').remove();

		$('#panel').append('<h1>' + buyerList[randomIndex] + '</h1>');

		console.log(buyerList[randomIndex])

	}



}, 100);

var buyerList = [];

$('#buy').click(function() {

	var username = $('#username').val();

	if (username != '' && buyerList.indexOf(username) === -1) {

		buyerList.push(username);
		console.log(buyerList);	
	}


})

