import { Button, Container } from '@mui/material';
import { useState } from 'react';
import ActivityButton from '../../components/ActivityButton';
import Activity from './Activity';
import AddActivityForm from './AddActivityForm';
import { containerStyle, iconAlignment } from '../../muiStyles';
import AddIcon from '@mui/icons-material/Add';
import AddActivityButton from './AddActivityButton';

const ActivitiesPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [showAddActivityForm, setShowAddActivityForm] = useState<boolean>(false);

    const onClick = () => {
        setShowAddActivityForm(!showAddActivityForm)
    }
    return (
        <>
            <Container sx={containerStyle}>
                <h1>Utforsk aktiviteter</h1>

                {isLoggedIn &&
                (<>
                    <AddActivityButton onClick={onClick} />
                    {showAddActivityForm &&
                    <AddActivityForm onClick={onClick} showAddActivityForm={showAddActivityForm} />}
                    
                </>)}

                <Activity />
            </Container>
        </>
    );
}



export default ActivitiesPage;
