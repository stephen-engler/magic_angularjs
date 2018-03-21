let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const PORT = 8001;

app.use(express.static('server/public'));

app.listen(PORT, ()=>{
    console.log('listening on port ', PORT);
});