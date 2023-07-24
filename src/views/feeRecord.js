import OnlyHeader from "components/Headers/OnlyHeader";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Container, Table } from "reactstrap";

const feeRecord = () => {
  return (
    <div>
      <OnlyHeader />
      <Container className="my-4 ms-4">
        <h1>Fee Record</h1>
        <div className="">
          <div className="d-flex">
            <h3>Name: </h3>
            <span> _____________</span>
          </div>
          <div className="d-flex">
            <h3>Student rollNo: </h3>
            <span> _____________</span>
          </div>
          <div className="d-flex">
            <h3>FatherName: </h3>
            <span> _____________</span>
          </div>
          <div className="d-flex">
            <h3>Department Name: </h3>
            <span> _____________</span>
          </div>
        </div>
      </Container>
      <Container>
        <div className="d-flex justify-content-center align-items-center my-4 table-responsive ">
          <Table className="" dark>
            <thead>
              <tr>
                <th>Semester</th>
                <th>Roll number</th>
                <th>Challan no</th>
                <th>Total amount</th>
                <th>Due Date</th>
                <th>Fee status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>BSCSF19M032</td>
                <td>12309123423</td>
                <td>24,032</td>
                <td>20/10/2020</td>
                <td>PAID</td>
              </tr>
              <tr>
                <td>2</td>
                <td>BSCSF19M032</td>
                <td>234523312325</td>
                <td>24,032</td>
                <td>20/9/2023</td>
                <td>PAID</td>
              </tr>
              <tr>
                <td>3</td>
                <td>BSCSF19M032</td>
                <td>3464563212</td>
                <td>24,032</td>
                <td>20/10/2022</td>
                <td>NOT PAID</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
      <div className="m-4">
        <h1>
          Download Challan From Here: <FaFileDownload className="text-danger" />
        </h1>
      </div>
    </div>
  );
};

export default feeRecord;
