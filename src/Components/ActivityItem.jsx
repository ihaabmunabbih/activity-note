import React from 'react';
import format from 'date-fns/format';

import './ActivityItem.css' ;

function ActivityItem(props) {
    return (
        <div className="card">
            <div className="header flex">
                <h4>{props.activities.project}</h4>
                <label>{format(new Date(props.activities.date), 'yyyy/MM/dd') }</label>
            </div>
            <div className="activities">
                <label>Activities</label>
                <ol>
                    {Object.keys(props.activities.activity).map((activity, index) =>
                        <li key={activity}>{props.activities.activity[activity]}</li>    
                    )}
                </ol>
            </div>

        </div>
    )
}

export default ActivityItem
