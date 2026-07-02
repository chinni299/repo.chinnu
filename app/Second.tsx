

 async function getproducts(){
  const greet = await fetch("https://jsonplaceholder.typicode.com/albums")
  const products = await greet.json();
  return products
 }

 export default async  function Second (){
 const lastValue =  await getproducts()
 return(<div>
      {lastValue.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>User ID: {item.userId}</p>
          <p>Album ID: {item.id}</p>
        </div>
      ))}
    </div>)
 }