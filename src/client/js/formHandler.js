function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    
    if (Client.checkForURL((formText)) {
        console.log("::: Form Submitted :::")

        postData('http://localhost:8080/test')

        .then(function(res) {
        document.getElementById('polarity').innerHTML = 'Polarity: ' + polarityChecker(res.scrore_tag);
        })

    }   

}

const polarityChecker = (score) => {
    let display;
    switch (score) {
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEU':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'without sentiment';
    }
    return display.toUpperCase();
}

export { handleSubmit }
export { polarityChecker }
