const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3000);

//app.use(express.static(__dirname+'/public/wwww'));
app.use(express.static(path.join(__dirname, 'public/www')));

/*app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/www/index.html'));
});*/

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});

