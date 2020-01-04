import React from 'react';
import 
{
    Row,
    Col,
    Table,
} from "reactstrap";
import { Link } from "react-router-dom";

const SurveyResultDetailComponent = props => {
    return(<div className="animated fadeIn">
        <Row>
            <Col>
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Question Code</th>
                        <th>Question</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>
                                <span>
                                    <Link className="btn btn-sm btn-primary" to={`/#`}>
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                </span>
                            </td>
                        </tr>
                </tbody>
            </Table>
            </Col>
        </Row>
    </div>);
}

export default SurveyResultDetailComponent;