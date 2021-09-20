import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../common/Spinner/Spinner";
import Message from "../common/Message/Message";
import ProductCard from "../common/ProductCard/ProductCard";

import SlideShow from "../SlideShow/SlideShow";

import { listProduct } from "../../actions/product";
import { PRODUCT_UPDATE_RESET } from "../../constants/product";
import banner from './banner.jpg'
import "./home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productCreate = useSelector((state) => state.productCreate);
  const { product } = productCreate;

  const productUpdate = useSelector((state) => state.productUpdate);
  const { success: successUpdate } = productUpdate;

  const productDelete = useSelector((state) => state.productDelete);
  const { success: successDelete } = productDelete;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
    } else {
      dispatch(listProduct());
    }
  }, [product, successUpdate, successDelete]);

  return (
    <>
    
    <hr/>
     <h1 style={{ color: "green",textAlign:'center',fontFamily:'cursive'}}>Welcome to fastRest</h1>
     <br/>
     <div className="banner">
       <img className="banner" style={{backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'550px',width:'100rem'}} src={banner} alt='banner'/>
     </div>
     <hr/>
     <hr/>
     
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <SlideShow />
          <h1 style={{ color: "green",textAlign:'center',fontFamily:'cursive'}}>The menu</h1>
          <div className="home">
            <div className="home-grip">
              {  products.map((product) => (
                <div key={product._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="container">
        <h3
          style={{ color: "red", fontSize: "50px", fontFamily: "cursive" }}
          className="py-4"
        >
          <hr className="py-3" />
          About us
        </h3>
        <h2 style={{fontSize: "30px", fontFamily: "cursive"}}>
          Tasty cuisine, dishes from around the world, wood-fired pizzas and
          home-cooked gourmet burgers to eat in or take away. The restaurant
          receives groups and birthdays. Exploiting the richness of the world's
          culinary heritage is our passion! Putting it at your service to
          restore the pleasure of eating is our daily commitment. All our dishes
          are made with fresh vegetables from the market. The bread we use for
          all of our burgers is fresh grain bread, worked and delivered every
          day by a real baker.
        </h2>
        <hr className="py-3" />
      </div>
          </div>
          <hr/>
         <hr/>
          
          <Footer/>
        </>
      )}
    </>
  );
};

export default Home;
