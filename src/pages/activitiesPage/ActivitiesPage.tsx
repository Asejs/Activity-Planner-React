import { Container } from '@mui/material';
import { useState } from 'react';
import Activity from '../../components/Activity';
import AddActivity from '../../components/AddActivity';

const cardStyle = {
    width: '900px',
    ml: 'auto',
    mr: 'auto',
    mb: '30px'
}

const ActivitiesPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

    return (
        <>
            <Container sx={cardStyle}>
                <h1>Utforsk aktiviteter</h1>
                {isLoggedIn &&
                <AddActivity />}
                <Activity />
            </Container>
        </>
    );
}



export default ActivitiesPage;
