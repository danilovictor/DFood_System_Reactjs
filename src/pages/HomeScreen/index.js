import React , {useState , useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container , CategoryArea , CategoryList , ProductArea , ProductList , ProductPaginationArea , ProductPaginationItem } from './styled';

import ReactTooltip from 'react-tooltip';

import api from '../../services/api';

import foodicon from '../../assets/food-and-restaurant.png';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';
import Modal from '../../components/Modal';


   let searchTimer = null;


export default () => {
    
    const history = useHistory();

    const [headerSearch , setHeaderSearch] = useState('');

    const [categories , setCategories] = useState([]);

    const [products , setProducts] = useState([]);

    const [activeCategory , setActiveCategory] = useState(0);

    const [totalPages , setTotalPages] = useState(0);
   
    const [activePage , setActivePage] = useState(1);

    const [activeSearch , setActiveSearch] = useState('');

    const [modalActive , setModalActive] = useState(false);


    const getProducts = async ( activeCategory , activePage , activeSearch) => {
        const prods = await api.getProducts()

        if( prods.error == ''){
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page);
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

        clearTimeout(searchTimer);

        searchTimer = setTimeout(() =>{

            setActiveSearch(headerSearch)
            } , 2000)

        }, [headerSearch])



    useEffect(() => {
        getProducts();

    }, [activeCategory , activeSearch])

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

            {totalPages  > 0 &&

                <ProductPaginationArea>
                    {Array(totalPages).fill(0).map((item , index)=>(
                        <ProductPaginationItem key={index} active={activePage} current={ index + 1}> 
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductPaginationArea>
                
            }

            <Modal status={activeModal}>
                Conteudo do modal
            </Modal>
          
        
        </Container>
    );
}