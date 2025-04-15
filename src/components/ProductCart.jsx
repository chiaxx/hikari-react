import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';

const ProductCart = (props) => {
    const carts = useSelector(store => store.cart.items);
    const{id, name, author, price, image, slug} = props.data
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
    }
  return (
    <div className='manga-container'>
        <Link to={slug}>
             <img src={image} alt="" className='manga-img'/>
        </Link>
        <p className='manga-title'>{name}</p>
        <p className='author-name'>{author}</p>
        <span className='manga-price'>${price}</span>
        <button className='manga-btn' >
        <ShoppingBagIcon className='w-5'/> Add to Cart</button>

    </div>
    



  )
}

export default ProductCart