import React, { useEffect, useState } from "react";

function Counters() {
  const [counterdata, setCounterdata] = useState([]);
  const [itemsdata, setItemsdata] = useState([]);
  const [counter, setCounter] = useState("");
  const [cart, setCart] = useState([]);

  // Simulated API fetch
  const fetch = () => {
    const fakeCounterData = [
      { id: 1, name: "Counter 1", status: "Active" },
      { id: 2, name: "Counter 2", status: "Inactive" },
    ];
    setCounterdata(fakeCounterData);
  };

  const counteritem = (id) => {
    const count = counterdata.find((element) => element.id === id);
    if (count) {
      setCounter(count.name);
      setItemsdata([
        { id: 101, name: "Item A", quantity: 10, price: 20, status: "Available" },
        { id: 102, name: "Item B", quantity: 5, price: 15, status: "Unavailable" },
      ]);
    }
  };

  const Addtocart = (item, counter) => {
    const orderDetails = { itemid: item, countername: counter };
    setCart([...cart, orderDetails]);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {/* Display Counter Data */}
      <div className="countercolumn">
        <h4>Counter details</h4>
        {counterdata.map((counter) => (
          <div key={counter.id}>
            <button className="btn btn-warning px-3 mt-2" style={{ width: "20vh" }} onClick={() => counteritem(counter.id)}>
              {counter.name}
            </button>
          </div>
        ))}
      </div>

      {/* Display Items Data */}
      <div className="itemscolumn">
        <h4>Items Present in {counter}</h4>
        <div className="itemcardmain">
          {itemsdata
            .filter((items) => items.status === "Available") // Filtering items first
            .map((items) => (
              <div className="itemcard" key={items.id}>
                <table>
                  <tbody>
                    <tr>
                      <td><b>Item:</b></td>
                      <td>{items.name}</td>
                    </tr>
                    <tr>
                      <td><b>Quantity:</b></td>
                      <td>{items.quantity}</td>
                    </tr>
                    <tr>
                      <td><b>Price:</b></td>
                      <td>{items.price}</td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn btn-info" onClick={() => Addtocart(items.id, counter)}>
                  Add to cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Counters;
