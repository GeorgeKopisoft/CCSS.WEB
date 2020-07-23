const KnowledgesConfig = {

    ForGetAll: function () {
        var requestHeader = new Headers();

        var requestInit = {
            method: 'GET',
            headers: requestHeader,
            mode: 'cors',
            cache: 'default'
        };

        return new Request(BASE_URL, requestInit);
    },

    ForGet: function () {
        var requestHeader = new Headers();

        var requestInit = {
            method: 'GET',
            headers: requestHeader,
            mode: 'cors',
            cache: 'default',
        };

        return new Request(BASE_URL, requestInit);
    },

    ForPost: function (data) {
        var requestHeader = new Headers();
        requestHeader = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        var requestInit = {
            method: 'POST',
            headers: requestHeader,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data)
        };

        return new Request(BASE_URL, requestInit);
    },

}

//Usar variables de entorno para cambiar las urls según el ambiente
const BASE_URL = "https://localhost:44323/api/knowledges";

export default KnowledgesConfig;