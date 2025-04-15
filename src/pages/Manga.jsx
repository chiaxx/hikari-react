import cover from '../assets/img/manga.svg'
import { Link } from 'react-router-dom'
import { products } from '../products'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';
import ProductCart from '../components/ProductCart'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
// import Cart from '../components/Cart'
// import Details from '../pages/Details'


const Manga = (props) => {
    const carts = useSelector(store => store.cart.items);
    const {id, name, price, image, slug} = props.data;
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }));
  }

  return (
    <div id='product'>
       <img src={cover} alt="" className='manga-cover'/>

      {
        products.map((product, key) => 
          <ProductCart key={key} data={product}/>
      )}
    </div>

    
  )
}

export default Manga