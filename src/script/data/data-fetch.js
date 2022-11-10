class DataFetch {
    static fetchAnime(keyword) {
        return fetch(`https://kitsu.io/api/edge/anime`, {
            method: 'GET',
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json'
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.data) {
                    return Promise.resolve(responseJson.data);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            }).catch(error => {
                console.log(error);
            });
    }
}

export default DataFetch;