import { Container } from '@mui/material';
import { useState } from 'react';
import ActivityButton from '../../components/ActivityButton';
import Activity from './Activity';
import AddActivity from './AddActivity';
import { containerStyle, iconAlignment } from '../../muiStyles';
import AddIcon from '@mui/icons-material/Add';

const ActivitiesPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
    const [showAddActivity, setShowAddActivity] = useState<boolean>(false);

    const onClick = () => {
        setShowAddActivity(!showAddActivity)
    }
    return (
        <>
            <Container sx={containerStyle}>
                <h1>Utforsk aktiviteter</h1>

                {isLoggedIn &&
                (<>
                    <ActivityButton color={'secondary'} onClick={onClick}>
                        <AddIcon sx={ iconAlignment }/>
                        Legg til ny aktivitet
                    </ActivityButton>

                    {showAddActivity &&
                    <AddActivity onClick={onClick} showAddActivity={showAddActivity} />}
                    
                </>)}

                <Activity />
            </Container>
        </>
    );
}



export default ActivitiesPage;
