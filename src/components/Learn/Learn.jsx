import React, { useEffect, useState } from "react";
import SocialCard from "../SocialCard/SocialCard";

export default function Learn() {
  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     (async () => {
//       let userData;
//       try {
//         const response = await fetch("https://randomuser.me/api/");
//         userData = (await response.json()).results;
//       } catch (error) {
//         console.log(error);
//         userData = [];
//       }

//       setUsers(userData);
//     })();
//   }, []);

  useEffect(() => {
    (async () => {
        let userData;
        try {
          const response = await fetch("https://randomuser.me/api/");
          userData = (await response.json()).results;
        } catch (error) {
          console.log(error);
          userData = [];
        }
  
        setUsers(userData);
      })();
  }, [])

  return (
    <div>
      {users.map((user, index) => (
        <SocialCard userData={user} key={index} />
      ))}
      {/* <h1>Hello from learn page</h1> */}
    </div>
  );
}
