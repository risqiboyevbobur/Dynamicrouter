import React, { useEffect, useState } from "react";
import "./SocialCard.css";
const SocialCard = ({ userData }) => {
  const [user, setUser] = useState([]);

  const getUsers = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
    const response = await fetch("https://api.github.com/users");
    
    setUser(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container-fluid mt-5">
      <h1 style={{textAlign:"center"}}>List of Github users</h1>
      <div className="row text-center">
        {user.map((curElem) => {
          console.log(curElem);
          return (
            <div className="col-10 col-md-4 mt-5">
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img src={curElem.avatar_url} className="rounded" style={{width:"200px"}} width={155} alt="" />
                  </div>
                  <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-0 textLeft"><b>Username:</b>{curElem.login}</h4>{" "}
                    <span className="textLeft"><b>Type:</b>{curElem.type}</span>
                    <br />
                    <span className="textLeft"><b>Github url:</b>{curElem.html_url}</span>
                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white starts">
                      <div className="d-flex flex-column">
                        <span className="articles">Articles</span>{" "}
                        <span className="number1">38</span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        <span className="followers">Followers</span>{" "}
                        <span className="number2">980</span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        <span className="rating">Rating</span>{" "}
                        <span className="number3">8.9</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialCard;
