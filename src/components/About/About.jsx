import "./About.css";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  console.log(value);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const FinalData = await response.json();
    setUsers(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <input type="" onChange={(e) => setValue(e.target.value)} />

      {users
        .filter((res) => {
          return res.name.toLocaleLowerCase() === " "
          ? value
          : res.name.toLocaleLowerCase().includes(value);
        })
        .map((curElem) => {
          console.log(curElem.name);
          return (
            <div className="card_item" key={curElem.id}>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={3}>
                    <Card style={{ width: "17rem" }}>
                      <Card.Body>
                        <img
                          src="https://d3vgmmrg377kge.cloudfront.net/about/PublishingImages/campus-donors/hbs_aerial_shot_philanthroopy_home_640x360.jpg"
                          alt=""
                        />
                        <Card.Title>
                          <b>NAME: </b>
                          {curElem.name}
                        </Card.Title>
                        <Card.Title>
                          <b>EMAIL: </b>
                          {curElem.email}
                        </Card.Title>
                        <Card.Title>
                          <b>USERNAME: </b>
                          {curElem.username}
                        </Card.Title>
                        <Card.Title>
                          <b>PHONENUMBER: </b>
                          {curElem.phone}
                        </Card.Title>
                        <Card.Text></Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
    </div>
  );
};

export default About;
