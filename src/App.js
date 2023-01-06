import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [isLoading, setLoading] = useState(false);
	const [tours, setTours] = useState(true);

	const fetchTours = async () => {
		setLoading(true);
		const res = await fetch(url);
		const tours = await res.json();
		console.log(tours);
    };
    
    useEffect(() => {
        fetchTours();
    }, [])

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<main>
			<Tours />
		</main>
	);
}

export default App;
