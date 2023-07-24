import OnlyHeader from "components/Headers/OnlyHeader";
import React from "react";
import { Col, Container, Row, Table } from "reactstrap";

const TimeTable = () => {
  return (
    <div>
      <OnlyHeader />
      <Container>
        <div className=" table-responsive">
          <Table hover bordered className="my-5">
            <thead>
              <tr>
                <th className="table-main-font">Days</th>
                <th className="table-main-font__time">8:00 - 9:00</th>
                <th className="table-main-font__time"> 9:00 - 10:00</th>
                <th className="table-main-font__time">10:00 - 11:00</th>
                <th className="table-main-font__time">11:00 - 12:00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="table-main-font" scope="row">
                  Monday
                </th>
                <td>Operating System</td>
                <td>Pakistan Studies</td>
                <td>Database</td>
                <td>English</td>
              </tr>
              <tr>
                <th className="table-main-font" scope="row">Tuesday</th>
                <td>LinearAlgebra</td>
                <td>Compiler</td>
                <td>Database</td>
                <td>Compiler</td>
              </tr>
              <tr>
                <th className="table-main-font" scope="row">Wednesday</th>
                <td>Operating System</td>
                <td>English</td>
                <td>Compiler</td>
                <td>{""}</td>
              </tr>
              <tr>
                <th className="table-main-font" scope="row">Thursday</th>
                <td>pakistan Studies</td>
                <td> Compiler</td>
                <td>{""}</td>
                <td>Database</td>
              </tr>
              <tr>
                <th className="table-main-font" scope="row">Friday</th>
                <td> {""}</td>
                <td>operating System</td>
                <td>compiler</td>
                <td>English</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default TimeTable;
