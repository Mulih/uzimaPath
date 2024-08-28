import React from 'react';
import Goals from '@/models/Goals';

import { Bar } from 'react-chartjs-2';


const Progress = () => {
	// Fetch goals from the Goals model
	const goals = Goals.getGoals();

	// Prepare data for the chart
	const chartData = {
		labels: goals.map((goal) => goal.title),
		datasets: [
			{
				label: 'Progress',
				data: goals.map((goal) => goal.progress),
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				borderColor: 'rgba(75, 192, 192, 1)',
				borderWidth: 1,
			},
		],
	};

	return (
		<div>
			{/* Render the chart */}
			<Bar data={chartData} />

			{/* Render the goals */}
			{goals.map((goal) => (
				<div key={goal.id}>
					<h3>{goal.title}</h3>
					<p>{goal.description}</p>
					{/* Add more goal-related components here */}
				</div>
			))}
		</div>
	);
};

export default Progress;
