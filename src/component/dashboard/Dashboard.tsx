import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import './Dashboard.scss'

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="row">
                <div className="card">
                    <div className="body-small">
                        <div className="col">
                            <span className="label">Member</span>
                            <span className="value">120</span>
                        </div>
                        <div className="icon">
                            <span className="material-icons md-48">person</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="body-small">
                        <div className="col">
                            <span className="label">Student</span>
                            <span className="value">100</span>
                        </div>
                        <div className="icon">
                            <span className="material-icons md-48">person</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="body-small">
                        <div className="col">
                            <span className="label">Teacher</span>
                            <span className="value">20</span>
                        </div>
                        <div className="icon">
                            <span className="material-icons md-48">person</span>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="body-small">
                        <div className="col">
                            <span className="label">Category</span>
                            <span className="value">200</span>
                        </div>
                        <div className="icon">
                            <span className="material-icons md-48">person</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="card">
                    <div className="header-card">Online Formation <div className="badge">10</div></div>
                    <div className="body-big">
                        <div className="row">
                            <div className="col">
                                <span className="value">23</span>
                                <span className="label">Overdue tasks</span>
                            </div>
                            <div className="col">
                            <span className="value">12:00am</span>
                                <span className="label">Schedule</span>
                            </div>
                            <div className="col">
                                <span className="value">11</span>
                                <span className="label">Formation</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col full">
                                <div className="row spaced">
                                    <div>
                                        <span className="material-icons">fiber_manual_record</span>
                                        <span className="chart-label">Language Formation</span>
                                    </div>
                                    <span>10</span>
                                </div>
                                <div className="row spaced">
                                    <div>
                                        <span className="material-icons">fiber_manual_record</span>
                                        <span className="chart-label">Language Formation</span>
                                    </div>
                                    <span>10</span>
                                </div>
                                <div className="row spaced">
                                    <div>
                                        <span className="material-icons">fiber_manual_record</span>
                                        <span className="chart-label">Language Formation</span>
                                    </div>
                                    <span>10</span>
                                </div>
                            </div>
                            <div className="col">
                                <Doughnut
                                    type='doughnut' 
                                    data={{
                                    datasets: [{
                                        data: [300, 50, 100],
                                        backgroundColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(54, 162, 235)',
                                        'rgb(255, 205, 86)'
                                        ],
                                        }]
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="header-card">At the teacher's <div className="badge">10</div></div>
                    <div className="body-big">
                        <div className="col">
                            <div className="row spaced">
                                <span>Teacher 1</span><span className="badge-table mid"> 20% </span>
                            </div>
                            <div className="row spaced">
                                <span>Teacher 1</span><span className="badge-table crit"> 30% </span>
                            </div>
                            <div className="row spaced">
                                <span>Teacher 1</span><span className="badge-table high"> 10% </span>
                            </div>
                            <div className="row spaced">
                                <span>Teacher 1</span><span className="badge-table mid"> 40% </span>
                            </div>
                            <div className="row spaced">
                                <span>Teacher 1</span><span className="badge-table crit"> 50% </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="header-card">At the student <div className="badge">10</div></div>
                    <div className="body-big">
                        <div className="col">
                            <div className="row spaced">
                                <span>Student 1</span><span className="badge-table mid"> 20% </span>
                            </div>
                            <div className="row spaced">
                                <span>Student 1</span><span className="badge-table crit"> 30% </span>
                            </div>
                            <div className="row spaced">
                                <span>Student 1</span><span className="badge-table high"> 10% </span>
                            </div>
                            <div className="row spaced">
                                <span>Student 1</span><span className="badge-table mid"> 40% </span>
                            </div>
                            <div className="row spaced">
                                <span>Student 1</span><span className="badge-table crit"> 50% </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4>The most requested Area</h4>
            <div className="row"></div>
        </div>
    )
}
