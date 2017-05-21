router.post('/autosave', function(req, res) {
    var title = req.body.company + '_colmena.js';
    var scriptMin = CODIGO MINIMIZADO DEL SCRIPT
    fs.exists("public/routes/" + title, (exists) => {
        if (exists) {
            res.status(400);
            res.send({
                success: false,
            });
        } else {
            fs.writeFile("public/routes/" + title, scriptMin, function(err) {
                if (err) {
                   res.status(500).send('Archivo no guardado, reintente y si el error persiste pongase en contacto con el soporte');
                }
            });
            res.status(200);
        }
    });
});