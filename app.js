const request = require("request");
const express = require("express");
const morgan = require("morgan");

const app = express();

let results = [];


app.listen(3000);

app.set("view engine", 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
})

app.get('/', (req, res) => {
    


    res.render('index', { results });
})

app.post('/', (req, res) => {
    let variables = req.body;

    results = [];


    var authOptions = {
        url: "https://sanctionssearch.ofac.treas.gov/",
        form: {
            
        },
        headers: {
            
        },
        json: true
    };

    request.post(authOptions, (err, response, body) => {


        results.push(body);
        res.redirect('/');
    })






})
