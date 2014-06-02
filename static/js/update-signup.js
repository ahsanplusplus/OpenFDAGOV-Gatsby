$("button#listserv-signup").click(function() {
	var email = $("input#email").val();
	$.ajax({
		type: "POST",
		crossDomain: true,
		url: "http://dbaxqhkdmfkhz.cloudfront.net/https://list.nih.gov/cgi-bin/wa.exe",
		headers: ['origin', 'x-requested-with'],
		beforeSend: function() {
		    $("div#contact-form").html('One moment. Signing you up...');
		  },
		data: { SUBED2: "OPENFDA", A: "1", p: email, s: email, L: "OPENFDA", b: "Subscribe (OPENFDA)" }
	})
	.done(function() {
		$("div#contact-form").html("Thanks for your interest in openFDA. You'll receive an automated email with a link to confirm your subscription.");
	})
	.fail(function() {
		$("div#contact-form").html("We ran into a technical problem signing you up from this page. Please <a href='https://list.nih.gov/cgi-bin/wa.exe?SUBED1=openfda'>sign up at the NIH web site.</a>");
	})
});