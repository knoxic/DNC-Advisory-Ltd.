console.log('1')
$('#submit-button').click(function(){
		
	$('#error-message').remove();
			
		var contact = {
			firstName: $('#first-name').val(),
			lastName: $('#last-name').val(),
			phoneNumber: $('#phone-number').val(),
			message: $('#message').val()
		};

		if (contact.firstName 
			&& contact.lastName 
			&& contact.phoneNumber 
			&& contact.message ) {
			console.log(contact);
		
		// clear input boxes
			$('#first-name').val('');
			$('#last-name').val('');
			$('#phone-number').val('');
			$('#message').val('');
		} else {
			$('#submit-button').after('<p class="serror-message" id="error-message">Please validate your inputs.</p>');

				}})