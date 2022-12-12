import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';


import './ActivityForm.css'
import { act } from '@testing-library/react';

function ActivityForm() {
    const [date, setDate] = useState(new Date());
    const [project, setProject] = useState("");
    const [activitiesField, setActivitiesField] = useState(1);
    const [activities, setActivities] = useState([]);
    const history = useHistory();

    const handleAdd = () => {
        setActivitiesField(activitiesField + 1)
    }

    const handleSubs = () => {
        if (activitiesField > 1) {
            setActivitiesField(activitiesField - 1)
        }
    }

    var array = [];
    var name = "";
    const onchangeInput = (e) => {
        let key = e.target.name.slice(-1);
        array[key] = e.target.value;
        setActivities({
            ...activities,
            [key] : array[key]
        })
    };

    var input = [];
    for (var i = 0; i < activitiesField; i++) {
        let name = "activities"+i;
        input.push(
                <input type="text" name={name} key={name} onChange={onchangeInput}/>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newActivity = {
            project: project,
            activity: activities,
            date: date,
            id: Math.floor(Math.random() * 10000)
        }
        fetch('http://localhost:3111/activities', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(newActivity)
        }).then(() => {
            history.push('/');
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="container-form">
            <form onSubmit={typeof id !== 'undefined' ? "" : handleSubmit}>
                <div className="title">
                    <h4>Add Activity</h4>
                </div>
                <div className="date-picker flex">
                    <label htmlFor="">Tanggal Aktivitas</label>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker 
                            label="Activity Date"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className="title-activity flex">
                    <label htmlFor="">Projek</label>
                    <input type="text" name="project" onChange={(e) => {setProject(e.target.value)}}/>
                </div>
                <div className="activities">
                    <div className="activities-counter flex">
                        <label htmlFor="">Aktivitas</label>
                        <div className="counter">
                            <button type="button" onClick={handleAdd}>+</button>
                                <input type="text" readOnly value={activitiesField}/>
                            <button type="button" onClick={handleSubs}>-</button>
                        </div>
                    </div>
                    <div className="activities-field">
                        {input}
                    </div>
                </div>
                <button class="btn-submit" type="submit">{typeof id !== 'undefined' ? "Edit" : "Add"} Activity</button>
            </form>
        </div>
    )
}

export default ActivityForm
