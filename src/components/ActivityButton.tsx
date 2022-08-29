import { Button } from '@mui/material';

type ActivityButtonProps = {
    color?: "inherit" | "primary" | "secondary";
    handleClick?: () => void;
    children?: React.ReactNode
}

const ActivityButton = (props: ActivityButtonProps): JSX.Element => {
    return (
        <Button color={props.color} variant='contained' onClick={props.handleClick}>
            {props.children}
        </Button>
    )
}

export default ActivityButton;

