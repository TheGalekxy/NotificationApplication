exports.hello = (request, response) => {
    response.render('hello');
}

exports.secondHello = (request, response) => {
    response.send('This is page two of saying hello :O');
} 

exports.sendToFrontend = (request, response) => {
    response.json({
        'hello': ['adam', 'charlotte', 'bart']
    });
} 
