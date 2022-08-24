﻿import { useState } from 'react';
import Activity from '../../components/Activity';
import AddActivity from '../../components/AddActivity';


const ActivitiesPage = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(true);
    
    return (
        <>
            <h1>Utforsk aktiviteter</h1>
            {loggedIn &&
            <AddActivity />}
            <Activity />
        </>
    );
}



export default ActivitiesPage;