var cer = document.getElementById("formCertificateCol");

  var json = {};
  json.id = cer.elements[0].value;
  json.DNI = cer.elements[1].value;
  ...

  var jsonReady = JSON.stringify(json);
  $.ajax({
    type: "POST",
    url: "http://IPSERVIDOR/form2",
    data: jsonReady,
    dataType: "json",
    contentType: "application/json",
    success: function() {
      window.location.href = '/';
    }
  });