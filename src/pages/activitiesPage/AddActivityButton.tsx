import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { iconAlignment } from '../../muiStyles';

type AddActivityButtonProps = {
    onClick: () => void
}

const AddActivityButton = ({onClick}: AddActivityButtonProps): JSX.Element => {
    return (
        <Button color='secondary' variant='contained' onClick={onClick}>
            <AddIcon sx={ iconAlignment }/>
            Legg til ny aktivitet
        </Button>
    )
}

export default AddActivityButton;