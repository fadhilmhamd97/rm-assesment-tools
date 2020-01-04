import React, { Component } from 'react';
import {
	Row,
	Col,
	Card,
	CardBody,
	FormGroup,
	Input,
	Label
} from "reactstrap";
import { Radar } from "react-chartjs-2";
import { Link } from "react-router-dom";

const radar = {
	labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(179,181,198,0.2)',
			borderColor: 'rgba(179,181,198,1)',
			pointBackgroundColor: 'rgba(179,181,198,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(179,181,198,1)',
			data: [65, 59, 90, 81, 56, 55, 40],
		},
		{
			label: 'My Second dataset',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [28, 48, 40, 19, 96, 27, 100],
		},
	],
};

export class DashboardComponent1 extends Component {
	render() {
		return (
			<div className="chart-wrapper" style={{ height: 450 + 'px' }}>
				<Row>
					<Col sm="12" md="8">
						<Radar data={radar} height={140 + 'px'} />
					</Col>
					<Col sm="12" md="4">
						<Card>
							<CardBody>
								<h4><i className="fa fa-filter"></i> &nbsp; Filter</h4>
								<p><strong>Level Organisasi Peserta (Khusus survei dan interview)</strong></p>
								<FormGroup check className="checkbox">
									<Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
									<Label check className="form-check-label" htmlFor="checkbox1">&nbsp; Strategic</Label>
								</FormGroup>
								<FormGroup check className="checkbox">
									<Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
									<Label check className="form-check-label" htmlFor="checkbox1">&nbsp; Tactical</Label>
								</FormGroup>
								<FormGroup check className="checkbox">
									<Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
									<Label check className="form-check-label" htmlFor="checkbox1">&nbsp; Operasional</Label>
								</FormGroup>
								<p style={{ marginTop: 1 + 'em' }}><strong>Jenis Nilai</strong></p>
								<FormGroup check className="checkbox">
									<Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
									<Label check className="form-check-label" htmlFor="checkbox1">&nbsp; Survei dan Interview</Label>
								</FormGroup>
								<FormGroup check className="checkbox">
									<Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
									<Label check className="form-check-label" htmlFor="checkbox1">&nbsp; Document Review dan Observasi</Label>
								</FormGroup>
								<FormGroup check className="checkbox">
									<Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
									<Label check className="form-check-label" htmlFor="checkbox1">&nbsp; Nilai Akhir</Label>
								</FormGroup>
								<FormGroup check className="checkbox">
									<Input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" value="option1" />
									<Label check className="form-check-label" htmlFor="checkbox1">&nbsp; Target</Label>
								</FormGroup>
							</CardBody>
						</Card>
						<Row>
							<Link to="/dashboard/list" style={{ marginLeft: 15 + 'px' }} className="btn btn-lg btn-success">Open List</Link>
						</Row>
					</Col>
				</Row>
			</div>
		)
	}
}

export default DashboardComponent1;