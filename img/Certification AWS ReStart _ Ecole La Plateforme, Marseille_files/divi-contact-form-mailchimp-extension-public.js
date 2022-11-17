(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */

	/*$(document).on("click", ".et_pb_contact_submit", function(){
		var user_email = "";

		if ($('input[data-field_type="email"]').length > 0) {
			user_email = $('input[data-field_type="email"]').val();
		}

		var first_name = "";
		var last_name = "";

		if ( $('input[data-field_type="first_name"]').length > 0 ) {
			first_name = $('input[data-field_type="first_name"]').val();
		} else if($('input[data-original_id="name"]').length > 0){
			first_name = $('input[data-original_id="name"]').val();
		}

		if ( $('input[data-field_type="last_name"]').length > 0 ) {
			last_name = $('input[data-field_type="last_name"]').val();
		}

		if (user_email !== "") {

			 var datas = {
			  'action': 'send_user_data_to_mailchimp_rc_server',
			  'user_email': user_email,
			  'first_name': first_name,
			  'last_name': last_name,
			  'post_id': dcfme.post_id
			};
			
			$.ajax({
			    url: dcfme.ajax_url,
			    data: datas,
			    type: 'post',
			
			    success: function(r){
			    	console.log(r);
			    }, error: function(){
			    	alert('Something went wrong !');
			  }
			});
		}
	});


$(document).on("click", ".et_pb_contact_submit", function(e){

	var mailing_list = $('#mailing_list');

	if(mailing_list.is(":checked")){
		e.preventDefault();

		 var datas = {
		  'action': 'save_dcfme_mailchimp_rc_cookie',
		  't': "g"
		};
		
		$.ajax({
		    url: dcfme.ajax_url,
		    data: datas,
		    type: 'post',
		
		    beforeSend: function(){
		
		    },
		    success: function(r){
		    	console.log(r);
		    	$('.et_pb_contact_form').submit();
		    }, error: function(){
		    	
		  }
		});
	} else {
		console.log('zc');
	}
	
});
*/

})( jQuery );
