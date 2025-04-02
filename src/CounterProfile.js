import React, { useEffect, useState, useCallback } from "react";

function CounterActivity() {
  const [counterdata, setCounterdata] = useState([]);
  const [counter, setCounter] = useState({});

  // Function to fetch data from API
  const fetchData = useCallback(() => {
    // Simulated API response data
    const fakeData = [
      { id: 1, name: "Counter 1", status: "Active", orders: 10 },
      { id: 2, name: "Counter 2", status: "NotActive", orders: 5 },
    ];
    setCounterdata(fakeData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const changeCounterStatus = (id) => {
    const updatedData = counterdata.map((c) =>
      c.id === id ? { ...c, status: c.status === "Active" ? "NotActive" : "Active" } : c
    );
    setCounterdata(updatedData);
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {counterdata.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>
                <button
                  className={
                    element.status === "Active" ? "btn btn-primary px-5 my-2 w-50" : "btn btn-danger px-5 my-2 w-50"
                  }
                  onClick={() => changeCounterStatus(element.id)}
                >
                  {element.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CounterActivity;
