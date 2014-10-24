var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(express.static(__dirname + '/assets'));

app.use(bodyParser());

app.post('/order', function(req,res){
    var email = req.body.email,
        tel = req.body.tel,
        oras = req.body.orase,
        adresa = req.body.adresa;
    var html = "<p>"+email+tel+oras+adresa+"</p>";
    res.send(html);
});

app.listen(process.env.PORT || 5000);