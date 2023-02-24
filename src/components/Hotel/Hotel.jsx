import { useEffect, useState } from "react";
import {   Col, Container, Row } from "react-bootstrap";
import "./Hotel.css";
const icon = require("..//Hotel/Navbar/img/logo.png");
const icon2 = require("..//Hotel/Navbar/img/translate.png");
const icon3 = require("..//Hotel/Navbar/img/profile.png");

export default function Hotel() {
  const [value, setValue] = useState("");
  console.log(value);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/data");
    const FinalData = await response.json();
    setUsers(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div>

      <Container>
        <Row className="mt-4 justify-content-between">
          <Col xs={4}>
            <div className="nav_left">
              <div className="logo-image">
                <img className="first_logo" src={icon} alt="" />
              </div>
              <div className="left-info-text">
                <h5 className="num">+7 (495) 677-17-79</h5>
                <p className="every">Ежедневно с 10:00 до 20:00 </p>
              </div>
            </div>
          </Col>
          <Col xs={2}>
            <div className="icons mt-3">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-apple"></i>
              <i class="fa-brands fa-instagram"></i>
            </div>
          </Col>
          <Col xs={5}>
            <div className="right_div">
              <div className="flag_div">
                <img src={icon2} className="flag" alt="" />
              </div>
              <div className="flex_icons">
                <div className="image_div">
                  <img src={icon3} className="personal" alt="" />
                </div>
                <p className="text-icon mt-3">Личный кабинет</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="buttons_header">
        <Container>
          <Row className="justify-content-center mt-3">
            <div className="flex-box-bg">
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
              <Col xs={3}>
                <div className="box">
                  <p className="btn-text">О нашей компании</p>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <div className="big">
        <h1 className="just">
          Забронируйте уникальное <br /> жилье быстро и просто
        </h1>
        <br />
        <p className="and">Лучший способ арендовать квартиру</p>
      </div>
      <div className="bigger">
        <input
          placeholder="Search  hotels..."
          className="inp"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      
     







      <div className="container-fluid mt-5">
      <h1 style={{textAlign:"center"}}>List of  hotels</h1>
      <div className="row text-center">
        {users.filter((res) => {
            return res.name.toLocaleLowerCase() === " "
            ? value
            : res.name.toLocaleLowerCase().includes(value);
        }).map((curElem) => {
          console.log(curElem);
          return (
            <div className="col-10 col-md-4 mt-5">
              <div className="card p-2">
                <div className="d-flex align-items-center">
                  <div className="image">
                    <img style={{width:"150px" , height:"120px"}} src={curElem.img} className="rounded" width={155} alt="" />
                  </div>
                  <div className="ml-3 w-100">
                    <h4 className="mb-0 mt-0 textLeft">{curElem.name}</h4>
                    <span className="textLeft">{curElem.title}</span>
                    <span className="textLeft">{curElem.location}</span>
                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white starts">
                      <div className="d-flex flex-column">
                        <span className="articles"></span>{" "}
                        <span className="number1"></span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        <span className="followers">Price</span>{" "}
                        <span className="number2">{curElem.price}</span>{" "}
                      </div>
                      <div className="d-flex flex-column">
                        <span className="rating">Sale</span>{" "}
                        <span className="number3">{curElem.sale}</span>{" "}
                        
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












    </div>
  );
}
