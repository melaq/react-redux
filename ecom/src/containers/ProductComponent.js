import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ProductComponent = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const renderList = products.map((product) => {

    const {id, title, category, image, price} = product;

        return (
            <div className="four wide column" key={id}> 
            <Link to={`/product/${id}`}>
            <div className="ui link cards">
                <div className="card">
                     <div className="image"><img src={image} alt={title}/></div>
                     <div className="content">
                        <div className="Header">{title}</div>
                        <div className="meta price">{price} Birr</div>
                        <div className="meta">{category}</div>
                     </div>
                </div>
            </div>
                </Link>
        </div>
        );
    })
    // const {id, title, category, image, description, price} = products[0];

    return (
        <>{renderList}</>
    )
}
export default ProductComponent


