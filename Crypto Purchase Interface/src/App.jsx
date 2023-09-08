import { useEffect, useMemo, useState } from "react";
import Cards from "./components/Cards";
import CartCard from "./components/CartCard";

 
const data = [
  {
    id: 1,
    name: "Bitcoin",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    price: 40000,
  },
  {
    id: 2,
    name: "Ethereum",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    price: 2800,
  },
  {
    id: 3,
    name: "Litecoin",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
    price: 150,
  },
];

function App() {
  const [cartData, setCartData] = useState([]);

  const total = useMemo(() => {
    return cartData.reduce((acc, cur) => {
      return (acc += cur.price * +cur.quantity);
    }, 0);
  }, [cartData]);

  const handleCart = (id, qty) => {
    setCartData((prev) => {
      const exists = prev.some((e) => e.id === id);

      if (!exists) {
        let res1 = [...prev, { ...data.at(id - 1), quantity: +qty }];
  
        return res1;
      } else {
        let res2 = prev.map((e) =>
          e.id === id ? { ...e, quantity: +e.quantity + +qty } : e
        );
       
        return res2;
      }
    });
    
  };

  return (
    <main className="App">
      <section>
        <header>
          <h2>Crypto Purchase Interface</h2>
        </header>
      </section>

      <article className="cardArticle">
        {data.map((e) => (
          <Cards key={e.id} {...e} handleCart={handleCart} />
        ))}
      </article>
      <section>
        <header>
          <h1>Your Cart - ${total.toLocaleString()} </h1>
        </header>
        {cartData.length ? (
          <article>
            {cartData.map((data, i) => (
              <CartCard key={data.id} ind={i + 1} {...data} />
            ))}
          </article>
        ) : (
          <article>
            <p style={{fontSize:'30px', marginTop:"50px"}}>"Your cart is empty!".</p>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;
