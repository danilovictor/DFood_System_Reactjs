const initialState = {
    products : [] ,
    adress: [] ,
    discount: 0,
    delivery: 0
};

export default (state = initialState, action) => {

    let products = [...state.products]

    switch(action.type) {

        

        case 'ADD_PRODUCT':

            

            let id = action.payload.data.id

            let index = products.findIndex( item => item.id === id);

            if(index > -1) {
                products[index].quantily += action.payload.quantily
            }

            else{
                products.push({
                    ...action.payload.data,
                    quantily : action.payload.quantily
                })
            }

            console.log(products);

            return{...state , products}
            break;
        // case 'SET_TOKEN':
        //     return {...state , token : action.payload.token}

        // break
        // case 'SET_NAME':
        //     return {...state, name: action.payload.name};
        // break;

        case 'CHANGE_PRODUCT' :
            let products = [...state.products]
            
            switch (action.payload.type){
                case '-':
                    if(products[action.payload.key]){
                        products[action.payload.key].qt--
                    }
                break;

                case '+':
                    if(products[action.payload.key]){
                        products[action.payload.key].qt++
                    }
                break;
            }
            
            return{...state , products}

        break;
    }

    return state;
}