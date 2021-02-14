function checkForName(inputURL) {
    const regex =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi;
    if (regex.test(inputURL)) {
        return true;
    }

    return false;


}

export { checkForName }