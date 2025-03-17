import React, { useEffect, useState } from "react";
import axios from "axios";

function Counters() {
  const [counterdata, setCounterdata] = useState([]);
  const [itemsdata, setItemsdata] = useState([]);
  const [counter,setCounter]=useState([]);
  const [cart,setCart]=useState([]);
 
  const fetch = () => {
    axios.get("http://localhost:9090/fetchcounters").then((response) => {
      setCounterdata(response.data);
    });
  };

  const counteritem=(id)=>
  {
    axios.get(`http://localhost:9090/fetchcounter?id=${id}`).then(response=>setItemsdata(response.data.items));
   const count=counterdata.find((element)=>element.id==id)
    setCounter(count.name)

  }
   const Addtocart=(item,counter)=>
   {
    const orderdetils={itemid:item,
                        countername:counter
    }
    setCart([...cart,orderdetils]);
   }
  useEffect(() => {
    fetch();
  }, []);
console.log(cart);
  return (
    <div>
      {/* Display Counter Data */}
      <div className="countercolumn">
        <h4>Counter details</h4>
        {counterdata.map((counter) => (
          <div key={counter.id}>
            <button className="btn btn-warning px-3 mt-2" style={{"width":"20vh"}} onClick={()=>counteritem(counter.id)} >{counter.name}</button>
          </div>
        ))}
      </div>

      {/* Display Items Data */}
      <div className="itemscolumn">
        {<h4>Items Present in {counter}</h4>}
        <div className="itemcardmain">
        {itemsdata
                .filter((items) => items.status === "Available") // Filtering items first
                .map((items) => (
            <div className="itemcard" key={items.id}>
              <table>
                <tr><td><b>Item &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</b></td><td>{items.name}</td></tr>
                <tr><td><b>Quantity :</b></td><td>{items.quantity}</td></tr>
                <tr><td><b>Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :</b></td><td>{items.price}</td></tr>
              </table>
              <button className="btn btn-info" onClick={() => Addtocart(items.id,counter)} >Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Counters;
