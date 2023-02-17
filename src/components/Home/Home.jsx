import React, { useState } from "react";
import { Col, Container, Form, Row, Table } from "react-bootstrap";

export default function Home() {
  const arr = [
    "Uzbekistan",
    "USA",
    "UK",
    "Russia",
    "India",
    "Poland",
    "China",
    "Korea",
    "Africa",
    "Avstralia",
    "Turkey",
  ];
  const [value, setValue] = useState();
  console.log(value);
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={6}>
            <Form.Group>
              <Form.Control
                placeholder="Search country"
                onChange={(e) => setValue(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>
                {arr
                  .filter((res) => {
                    return res.toLocaleLowerCase() === " "
                      ? value
                      : res.toLocaleLowerCase().includes(value);
                  })
                  .map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item}</td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
