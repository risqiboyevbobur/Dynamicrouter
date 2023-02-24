import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Paper from "@mui/material/Paper";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export default function TableoneRow() {
  const [rows, setRows] = useState();
  console.log(rows);
  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
  // ];

  const getAllData = () => {
    let url = "http://localhost:3000/data";
    axios.get(url).then((data) => setRows(data?.data));
  };

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/data/${id}`)
      .then((res) => alert("Successfully deleted"));
    setRows(rows.filter((el) => el.id !== id));
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={8}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Images</TableCell>
                    <TableCell align="right">
                      <b>Names</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Locations</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Prices</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Sales</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Edit</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Delete</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img src={row?.img} alt="" />
                      </TableCell>
                      <TableCell align="right">{row?.name}</TableCell>
                      <TableCell align="right">{row?.location}</TableCell>
                      <TableCell align="right">{row?.price}</TableCell>
                      <TableCell align="right">{row?.sale}</TableCell>
                      <Link to={`/tableone/edit/${row.id}`}>
                        <TableCell align="right">
                          <Button style={{marginTop:"65px"}} variant="contained">Edit</Button>
                        </TableCell>
                      </Link>
                      <TableCell align="right">
                        {" "}
                        <Button
                          onClick={() => deleteData(row.id)}
                          variant="contained"
                          color="error"
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
