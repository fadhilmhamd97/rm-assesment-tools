import React, { Component } from "react";
import {
	Col,
	Card,
	CardBody
} from "reactstrap";
import { Radar } from "react-chartjs-2";


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

export class DashboardComponent2 extends Component {
	render() {
		return (<div classNames="animated fadeIn">
			<Col sm="12" md="6">
				<Card>
					<CardBody>

					</CardBody>
				</Card>
			</Col>
			<Col sm="12" md="6">
				<Card>
					<CardBody>
						<div className="chart-wrapper" style={{ height: 450 + 'px' }}>
							<Radar data={radar} height={140 + 'px'}></Radar>
						</div>
					</CardBody>
				</Card>
			</Col>
		</div>)
	}
}

export default DashboardComponent2;