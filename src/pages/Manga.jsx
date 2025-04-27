import cover from '../assets/img/manga.svg'
import { products } from '../products'
import ProductCart from '../components/ProductCart'



const Manga = () => {
return (
  <div>
    <img src={cover} alt="" className="manga-cover" />
    <section className="manga-container">
      {products.map((product, index) => (
        <div className="manga-item" key={index}>
          <ProductCart data={product} />
        </div>
      ))}
    </section>
  </div>
    
  )
}

export default Manga