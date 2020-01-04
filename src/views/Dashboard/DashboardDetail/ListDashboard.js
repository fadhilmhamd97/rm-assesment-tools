import React, { Component } from 'react';
import {
  Row,
  Col,
  CardBody,
  Card,
  Table,
  CardTitle
} from 'reactstrap';


export class ListDashboard extends Component {
  render() {
    return (<div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardBody>
              <Row>
                <Col sm="5">
                  <CardTitle className="mb-0"><h3>Dashboard Corporate Risk Maturity - List</h3></CardTitle>
                </Col>
              </Row>
              <Row style={{ padding: 2 + 'em' }}>
                <Table style={{ marginTop: 4 + 'em', fontWeight: 'bold' }} responsive bordered>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Survey</th>
                      <th>Interview / FGD</th>
                      <th>Observasi & Reservasi Dokumen</th>
                      <th>Nilai Akhir</th>
                      <th>Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Weight</td>
                      <td>20%</td>
                      <td>20%</td>
                      <td>60%</td>
                      <td>100%</td>
                      <td></td>
                    </tr>
                    <tr style={{ backgroundColor: '#4ef559', color: 'white' }}>
                      <td>Risk Strategy</td>
                      <td>3.39</td>
                      <td>3.79</td>
                      <td>2.97</td>
                      <td>3.21</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#4ef559', color: 'white' }}>
                      <td>Risk Appetite</td>
                      <td>3.55</td>
                      <td>3.33</td>
                      <td>2.83</td>
                      <td>3.08</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#4ef559', color: 'white' }}>
                      <td>Risk Profile</td>
                      <td>3.97</td>
                      <td>3.53</td>
                      <td>2.84</td>
                      <td>3.20</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#abb0ab', color: 'white' }}>
                      <td>GRC Structure</td>
                      <td>3.62</td>
                      <td>3.81</td>
                      <td>3.08</td>
                      <td>3.33</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#abb0ab', color: 'white' }}>
                      <td>GRC Structure</td>
                      <td>3.62</td>
                      <td>3.81</td>
                      <td>3.08</td>
                      <td>3.33</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#abb0ab', color: 'white' }}>
                      <td>GRC Policies</td>
                      <td>3.75</td>
                      <td>3.74</td>
                      <td>3.33</td>
                      <td>3.49</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#abb0ab', color: 'white' }}>
                      <td>Monitoring and Reporting</td>
                      <td>3.40</td>
                      <td>3.73</td>
                      <td>2.25</td>
                      <td>2.77</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#abb0ab', color: 'white' }}>
                      <td>Risk Model and Analysis</td>
                      <td>3.59</td>
                      <td>3.12</td>
                      <td>1.96</td>
                      <td>2.52</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#abb0ab', color: 'white' }}>
                      <td>GRC Technology</td>
                      <td>3.04</td>
                      <td>3.10</td>
                      <td>1.57</td>
                      <td>2.23</td>
                      <td>4.2</td>
                    </tr>
                    <tr style={{ backgroundColor: '#848784', color: 'white' }}>
                      <td>Risk Culture</td>
                      <td>3.51</td>
                      <td>3.12</td>
                      <td>2.23</td>
                      <td>2.66</td>
                      <td>4.2</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>);
  }
}

export default ListDashboard;