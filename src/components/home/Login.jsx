import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import bgImg from "../../img/bg.png";
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = '/auth';

export default function Login() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleBack = () => {
        navigate('/');
    }

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('user: ', user);
        console.log('pwd: ', pwd);

        // Simulate a successful login
        const role = 'retailer'; // or any other role you want to simulate
        setAuth({ user, pwd, role });
        setUser('');
        setPwd('');
        navigate(`/${role}`, { replace: true });
    };

    return (
        <Box sx={{
            backgroundImage: `url(${bgImg})`,
            minHeight: "80vh",
            backgroundRepeat: "no-repeat",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
        }}>

            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        backgroundColor: '#e3eefc',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        align: "center",

                    }}
                >
                    <Typography component="h1" variant="h5"
                        sx={{
                            textAlign: "center", marginBottom: "3%", marginTop: "3%",
                            fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
                        }}
                    >
                         PIA PLATFORM
                    </Typography>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    {errMsg && <Typography component="h1" variant="body2" color="error" ref={errRef} sx={{marginTop: "2rem"}}>  {errMsg} </Typography>}
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoFocus
                            onChange={(e) => setUser(e.target.value)}

                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >


                            <Button
                                onClick={handleBack}

                            >
                                Back
                            </Button>

                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}