import React from 'react';
import ActivityItem from './ActivityItem';

import './ActivityList.css'

function ActivityList(props) {
    return (
        <div className="container">
            {props.activities.map(activity =>
                <ActivityItem activities={activity} key={activity.id}/>
            )}
        </div>
    )
}

export default ActivityList
