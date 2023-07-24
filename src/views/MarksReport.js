import OnlyHeader from "components/Headers/OnlyHeader";
import React from "react";
import { Container, Table } from "reactstrap";

const MarksReport = () => {
  return (
    <div>
      <OnlyHeader />
      <Container>
        <div className="d-flex justify-content-center align-items-center my-4 table-responsive ">
          <Table className="" dark>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>name</th>
                <th>mid term</th>
                <th>final term</th>
                <th>sessional</th>
                <th>obtained marks</th>
                <th>total marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BSCSF19MOO1</td>
                <td>Talha</td>
                <td>24</td>
                <td>44</td>
                <td>14</td>
                <td>82</td>
                <td>100</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default MarksReport;
