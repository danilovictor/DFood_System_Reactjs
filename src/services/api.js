let baseUrl = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories : async () => {

        const response = await fetch(`${baseUrl}/categories`)
        const json = response.json();
        return json;

    }


};