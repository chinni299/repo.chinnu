import style from "../products/style.module.css";
import Image from "next/image";
import Link from "next/link"

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}

export default async function Products() {
  const products = await getProducts();

  return (
    <div className={style.head}>
      {products.slice(0, 10).map((product) => (
        <div key={product.id} className={style.card}>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={250}
            height={220}
            className={style.image}
          />

          <h2 className={style.title}>{product.title}</h2>
  
       <Link href="/dhasboard       ">
  <button className={style.category}>
    {product.category}
  </button>
</Link>
           
          

          <p className={style.brand}>
            Brand: {product.brand}
          </p>

          <p className={style.description}>
            {product.description}
          </p>

          <p className={style.price}>
            ${product.price}
          </p>
        </div>
      ))}
    </div>
  );
}