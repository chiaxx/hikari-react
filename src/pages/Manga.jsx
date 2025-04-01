import cover from '../assets/img/manga.svg'
import { products } from '../products'
import Cart from '../components/Cart'

const Manga = () => {
  return (
    <div>
      <img src={cover} alt="" className='manga-cover'/>
    <div className='manga-container'>
      <div className='manga-item'>
        {products.map((product, key) => 
        <Cart key={key} data={product}/>
      )}
      </div>
    </div>
    </div>

    
  )
}

export default Manga