import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { loginCardStyle, formStyle, BoxStyle } from '../../muiStyles';

export default function LoginCard() {
    return (
        <Card sx={ loginCardStyle }>

        <CardContent>
            <Typography component={'span'} variant="body2" color="text.secondary">
                <section>
                    <h2>Logg inn</h2>

                    <FormControl variant="standard">
                        <Box sx={ formStyle }>
                        <div>
                            <form>
                                <label htmlFor="username">Brukernavn:</label>
                                <TextField
                                    id="outlined-required username"
                                    label="Brukernavn"
                                    type="text"
                                    autoComplete="off"
                                    required
                                />

                                <label htmlFor="password">Password:</label>
                                <TextField
                                    id="outlined-required password"
                                    label="Passord"
                                    type="password"
                                    required
                                />
                                <Button variant='contained'>Logg inn</Button>
                            </form>
                        </div>
                        </Box>
                    </FormControl>

                    <Box sx={ BoxStyle }>
                        Har du ikke en bruker?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <p>Registrer deg her</p>
                        </span>
                    </Box>

                </section>
            </Typography>
        </CardContent>
        </Card>
    );
}
