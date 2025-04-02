import React from "react";
function Counter() {
  const data = [
    {
      name: "Counter Profile",
      image: "/counterprofile.jpg",

      icon: "/counteractivityicon.jpg",
      description:
        "Manage and update counter staff profiles. \nEnsure accurate records of staff details. \nImprove efficiency with well-maintained data.",
    },
    {
      name: "Counter Activity",
      image: "/counteractivity.jpg",
      icon: "/userincon.jpg",
      description:
        "Monitor real-time counter transactions and activities. \nTrack sales and interactions efficiently. \nEnhance business decisions with live data insights.",
    },
    {
      name: "Counter",
      image: "/counter.jpg",
      icon: "/countericon.jpg",
      description:
        "Handle counter operations and daily transactions. \nEnsure smooth and secure payment processing. \nOptimize workflow for better customer service.",
    },
    {
      name: "Settings",
      image: "/settings.jpg",
      icon: "/settingicon.jpg",
      description:
        "Customize and manage counter system settings. \nConfigure security and access controls easily. \nAdapt system preferences to business needs.",
    },
  ];

  return (
    <div>
      <div className="countercard">
        {data.map((element) => (
          <div className="counter">
            <h5>
              {/* <img className="icon" src={element.icon} /> */}
              {element.name}
            </h5>{" "}
            <hr />
            <img src={element.image} />
            <hr />
            <p>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
