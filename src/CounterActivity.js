import React, { useEffect, useState } from "react";

function CounterActivity() {
  const [counterdata, setCounterdata] = useState([
    { id: 1, name: "Counter 1", status: "Active" },
    { id: 2, name: "Counter 2", status: "NotActive" },
    { id: 3, name: "Counter 3", status: "Active" }
  ]);

  // Simulated function to fetch data (instead of Axios)
  const fetchData = () => {
    console.log("✅ Fetching counter data...");
    console.log("Counter Data:", counterdata);
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to change counter status
  const changeCounterStatus = (id) => {
    console.log("🔄 Changing status for Counter ID:", id);

    // Update the counter status locally
    const updatedData = counterdata.map((counter) =>
      counter.id === id
        ? { ...counter, status: counter.status === "Active" ? "NotActive" : "Active" }
        : counter
    );

    setCounterdata(updatedData);
    console.log("✅ Updated Counter Data:", updatedData);

    window.alert("✅ Counter updated successfully!");
  };

  return (
    <div>
      <h3 className="text-center my-3">Counter Activity</h3>
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
                  className={element.status === "Active" ? "btn btn-primary px-5 my-2 w-50" : "btn btn-danger px-5 my-2 w-50"}
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
