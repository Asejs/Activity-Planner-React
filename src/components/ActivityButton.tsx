import { Button } from '@mui/material';

type ActivityButtonProps = {
    color?: "inherit" | "primary" | "secondary";
    onClick: () => void;
    children?: React.ReactNode
}

const ActivityButton = ({color, onClick, children}: ActivityButtonProps): JSX.Element => {
    return (
        <Button color={color} variant='contained' onClick={onClick}>
            {children}
        </Button>
    )
}

export default ActivityButton;