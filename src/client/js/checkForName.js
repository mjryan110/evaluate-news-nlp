function checkForName(inputURL) {
    var regex =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
    return regex.test(inputURL);
}

export { checkForName }