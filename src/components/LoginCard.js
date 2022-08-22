import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect, useContext } from 'react';
import { Box, FormControl, TextField } from '@mui/material';
import { Button } from 'reactstrap';
//import axios from './api/axios';
const LOGIN_URL = '/auth';


export default function LoginCard() {
    //const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])


    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // console.log(user, pwd);
        // setUser('');
        // setPwd('');
        // setSuccess(true);

        // try {
        //     const response = await axios.post(LOGIN_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     //console.log(JSON.stringify(response?.data));

        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     setSuccess(true);

        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }
    }
    return (
        <Card sx={{ mb: '30px'}}>

        <CardContent>
            <Typography component={'span'} variant="body2" color="text.secondary">
                {success ? (
                    <section>
                        <h1>You are logged in!</h1>
                        <br />
                        <p>
                            <a href="#">Go to Home</a>
                        </p>
                    </section>
                ) : (
                    <section>
                        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}

                        <h2>Logg inn</h2>

                        <FormControl variant="standard">
                            <Box
                            sx={{'& .MuiTextField-root': { m: 1, width: '100%' },}}
                            noValidate
                            autoComplete="off"
                            >
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="username">Brukernavn:</label>
                                    <TextField
                                        id="outlined-required username"
                                        label="Brukernavn"
                                        type="text"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                    />

                                    <label htmlFor="password">Password:</label>
                                    <TextField
                                        id="outlined-required password"
                                        label="Passord"
                                        type="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                    <Button variant='contained' sx={{ backgroundColor: 'darkgrey' }}>Logg inn</Button>
                                </form>
                            </div>
                            </Box>
                        </FormControl>
                        <Box
                            sx={{ m: 1, mt: 2, width: '100%' }}
                            noValidate
                            autoComplete="off"
                            >
                            Har du ikke en bruker?<br />
                            <span className="line">
                                {/*put router link here*/}
                                <a href="#">Registrer deg her</a>
                            </span>
                        </Box>
                    </section>
                )}
            </Typography>
        </CardContent>
        </Card>
    );
}
