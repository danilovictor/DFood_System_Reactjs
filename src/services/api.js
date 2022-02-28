let baseUrl = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories : async () => {

        const response = await fetch(baseUrl+'/categories');
        const json = response.json();
        return json;

    },

    getProducts : async ( category , page , search) => {

        // let fields = {}

        // if(category != 0){
        //     fields.category = category;
        // }

        // if(page > 0){  
        //     fields.page = page;

        // }

        // if(search != ''){
        //     fields.search = search;
        // }

        // let queryString = new URLSearchParams(fields).toString();

        const response = await fetch(baseUrl+'/products');
        const json = response.json();
        return json;
    }


};