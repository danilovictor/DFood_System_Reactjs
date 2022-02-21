let baseUrl = 'https://api.b7web.com.br/devsfood/api/categories';

export default {
    getCategories : async () => {

        const response = await fetch(baseUrl);
        const json = response.json();
        return json;

    }


};