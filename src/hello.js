/**
 * Created by yoyo on 16-8-4.
 */
let express = require('express');
let app = new express();

app.get('/',function(req,res){
    res.send('Hello Word!');
});

app.listen(3000);
