import React, {useState, useEffect} from 'react';
import ActivityList from '../Components/ActivityList';
import Navbar from '../Components/Navbar';

function Home() {
    const [activities, setActivity] = useState([]);

    useEffect(() => {
        async function fetchActivity() {
            try {
                const response = await fetch('http://localhost:3111/activities');
                const data = await response.json();
                console.log(data);
                setActivity(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchActivity();
    }, [])


    return (
        <div>
            <ActivityList activities={activities} />
        </div>
    )
}

export default Home
