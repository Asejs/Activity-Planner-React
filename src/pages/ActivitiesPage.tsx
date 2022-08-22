import Activity from '../components/Activity';
import AddActivity from '../components/AddActivity';


const ActivitiesPage: React.FunctionComponent = () => {
    const loggedIn = true;

    return (
        <>
            <h1>Utforsk aktiviteter</h1>
            {loggedIn && <AddActivity />}
            <Activity />
        </>
    )
}

export default ActivitiesPage
