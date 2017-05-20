    var json = {};
    json.data = script;
    json.company = empresa;
    json.mail = email;
    var jsonReady = JSON.stringify(json);
        $.ajax({
        type: "POST",
        url: "http://IPSERVIDOR/autosave",
        data: jsonReady ,
        success: function( success ){
          if(!success) alert("Ese nombre ya existe");
        },
        dataType: "json",
        contentType: "application/json"
    });