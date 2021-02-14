function checkForName(inputURL) {
    const regex = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gi);
    if (regex.test(inputURL)) {
        return true;
    }

    return false;


}

export { checkForName }