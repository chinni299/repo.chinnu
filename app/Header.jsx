import Image from "next/image";

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}

export default async function Header() {
  const products = await getProducts();

  return (
    <div>
      {products.map((item) => (
        <div key={item.id}>
          <Image
            src={item.thumbnail}
            width={200}
            height={200}
            alt={item.title}
          />
          <h2>{item.title}</h2>
          <h3>₹ {item.price}</h3>
        </div>
      ))}
    </div>
  );
}