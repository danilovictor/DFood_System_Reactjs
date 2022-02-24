import React , {useState , useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container , CategoryArea , CategoryList , ProductArea , ProductList } from './styled';

import ReactTooltip from 'react-tooltip';

import api from '../../services/api';

import foodicon from '../../assets/food-and-restaurant.png';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';


   


export default () => {
    
    const history = useHistory();

    const [headerSearch , setHeaderSearch] = useState('');

    const [categories , setCategories] = useState([]);

    const [products , setProducts] = useState([]);

    const [activeCategory , setActiveCategory] = useState(0);


    const getProducts = async () => {
        const prods = await api.getProducts()

        if( prods.error == ''){
            setProducts(prods.result.data)
        }
    }


    useEffect(() => {

        const getCategories =  async ()=>{
            const cat = await api.getCategories();

            if(cat.error == ''){
                setCategories( cat.result);
            }

            ReactTooltip.rebuild();
        };

        getCategories();

       
    }, [])

    useEffect(() => {
        getProducts();

    }, [activeCategory])

    // const loadCategory = async () => {
    //     let response = await fetch('https://api.b7web.com.br/devsfood/api/categories')
    //     let json = response.json();
    //     return json;

    //     setCategories(json)

    //     console.log(json);
    // Metodo usando a FETCH API do javascript
    // }

   
  

    return (
        
        <Container>
          
           <Header search={headerSearch} onSearch={setHeaderSearch}/>

           { categories.length > 0 && 
               <CategoryArea>
                   Selecione uma categoria
                   <CategoryList>

                       <CategoryItem data={{ id : 0 , name : 'Todas as categorias' , image :foodicon}} activeCategory={ activeCategory} setActiveCategory={setActiveCategory} />
                       {categories.map( ( item , index) =>(
                           <CategoryItem key={index} data={item} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
                       ) )}
                   </CategoryList>
               </CategoryArea>
            
           }
            {products.length > 0 &&
                 <ProductArea>
                 <ProductList>
                     {products.map((item , index)=>(
                         
                         <ProductItem key={index} data={item}/>
                     ))}
                 </ProductList>
             </ProductArea>
            }
          
        
        </Container>
    );
}