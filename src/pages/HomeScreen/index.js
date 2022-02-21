import React , {useState , useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container , CategoryArea , CategoryList} from './styled';

import api from '../../services/api'

import foodicon from '../../assets/food-and-restaurant.png'

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';

export default () => {
    const history = useHistory();

    const [headerSearch , setHeaderSearch] = useState('');

    const [categories , setCategories] = useState([]);

    useEffect(() => {

        // const getCategories =  async ()=>{
        //     const cat = await api.getCategories();

        //     if(cat.error == ''){
        //         setCategories( cat.result);
        //     }
        // };

        // getCategories();

        ( async ()=> {
            const categories = await api.getCategories();
        })();

        console.log(categories);
       
    }, [])

  

    return (
        
        <Container>
          
           <Header search={headerSearch} onSearch={setHeaderSearch}/>

           { categories.length > 0 && 
               <CategoryArea>
                   <CategoryList>

                       <CategoryItem title="todas as categorias" image={foodicon}/>
                   </CategoryList>
               </CategoryArea>
            
           }
        
        </Container>
    );
}