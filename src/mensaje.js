var message = {
	from: 'sender@server.com',
	to: 'receiver@sender.com',
	subject: 'Message title',
	text: 'Plaintext version of the message',
	html: '<p>HTML version of the message</p>'
};
transporter.sendMail(data);