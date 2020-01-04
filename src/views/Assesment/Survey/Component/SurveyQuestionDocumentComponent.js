import React from 'react';
import 
{
    Button,
    Table
} from "reactstrap";
import { Link } from 'react-router-dom';

const SurveyQuestionListComponent = props => {

    return(<div className="question-table">
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <span>
                                    <Link className="btn btn-sm btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                </span>
                                &nbsp;
                                <span>
                                <Link className="btn btn-sm btn-danger">
                                        <i className="fa fa-search"></i>
                                </Link>
                                </span>
                            </td>
                        </tr>
                </tbody>
            </Table>
    </div>)
}

export default SurveyQuestionListComponent;
