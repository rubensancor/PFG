var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'colmenadeusto@gmail.com', 
        pass: '****' 
    }
});