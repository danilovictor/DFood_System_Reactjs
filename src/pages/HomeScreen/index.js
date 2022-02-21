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

    const [activeCategory , setActiveCategory] = useState(0);

    useEffect(() => {

        const getCategories =  async ()=>{
            const cat = await api.getCategories();

            if(cat.error == ''){
                setCategories( cat.result);
            }
        };

        getCategories();

       
    }, [])

    useEffect(() => {

    }, [activeCategory])

    // const loadCategory = async () => {
    //     let response = await fetch('https://api.b7web.com.br/devsfood/api/categories')
    //     let json = response.json();
    //     return json;

    //     setCategories(json)

    //     console.log(json);
    // }

   
  

    return (
        
        <Container>
          
           <Header search={headerSearch} onSearch={setHeaderSearch}/>

           { categories.length > 0 && 
               <CategoryArea>
                   Selecione uma categoria
                   <CategoryList>

                       <CategoryItem data={{ id : 0 , title : 'Todas as categorias' , image :{foodicon}}} activeCategory={ activeCategory} setActiveCategory={setActiveCategory} />
                       {categories.map( ( item , index) =>(
                           <CategoryItem key={index} data={item} activeCategory={activeCategory}/>
                       ) )}
                   </CategoryList>
               </CategoryArea>
            
           }
        
        </Container>
    );
}