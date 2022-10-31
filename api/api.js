const ApiGetUser = () => {
    const promise = new Promise((resolve) => {
        fetch('/data/user.json')
        .then(response => resolve(response.json()))
    })
    return promise
}

export { ApiGetUser }