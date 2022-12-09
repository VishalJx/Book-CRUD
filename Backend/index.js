const express = require('express');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors'); // implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources.
const port = process.env.PORT || 5000;
require('./connection/connect');

app.use(cors());
app.use(express.json())
app.use("/api/v1",routes);

if(process.env.NODE_ENV =='production'){
    app.use(express.static('public/frontend/build'));
}

app.listen(port, ()=>{
    console.log(`Server running on port : http://localhost:${port}`);
});