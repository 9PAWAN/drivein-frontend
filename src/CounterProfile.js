import {React,useEffect,useState} from 'react';
import axios from 'axios';

function CounterProfile() {
   const [counter, setCounter] = useState({
      name: "",
      owner: "",
      contact: "",
      email: "",
      image: "",
      status: "Active",
    });
  
    const [counterdata, setCounterdata] = useState([]);
    const fetch = () => {
        axios.get("http://localhost:9090/fetchcounters").then((response) => {
          setCounterdata(response.data);
        });
      };
      useEffect(() => {
          fetch();
        }, []);
        const editprofile=(id)=>
          
        {
          setCounter({
            name: "",
            owner: "",
            contact: "",
            email: "",
            image: "",
            status: "Active",
          });
        }
  return (
    <div>
    <div className="countercard">
      {counterdata.map((element) => (
        <div className="counter">
          <h5>
            {element.name}<span><button onClick={()=>editprofile(element.id)}>Edit</button> </span>
            <h4 className='text-light'>{element.status}</h4>
          </h5>
          <hr />
          <img src={element.image} />
          <hr />
          <p>{element.contact}</p>
          
        </div>
      ))}
    </div>
  </div>
  )
}

export default CounterProfile
