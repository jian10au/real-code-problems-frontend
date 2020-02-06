import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './AttemptTableHeadings.module.css'

const AttemptTableHeadings = () => {

    return(
        <thead>
        <tr>
            <th>Challenge</th>
            <th>Developer</th>
            <th>Status</th>
            <th>Date Submitted</th>
            <th>Actions</th>
        </tr>
        </thead>
    );
}

export default AttemptTableHeadings;