// @ts-nocheck
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Page from '../../components/_reusables/Page';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { AuthContext } from '../../context/AuthContext';

const Login: React.FC = () => {

    const { authState } = useContext(AuthContext);

    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');

    const handleSubmit = () => {
        console.log(email, pass);

    };

    return (
        <Page>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { width: '45ch' },
                    display: 'grid',
                    placeContent: 'center',
                    height: 'calc(80vh - 57px)',
                }}
                noValidate
                autoComplete="on">
                <Paper variant="outlined">

                    <Stack spacing={4} direction="column"
                        sx={{ p: 8, }}>
                        <Typography variant='h5'>Giris {email}</Typography>

                        <TextField
                            id="email"
                            size='medium'
                            label="Email"
                            variant="outlined"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}

                        />


                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPass(event.target.value)}

                        />

                        <Button onClick={handleSubmit} variant="contained">Giriş</Button>
                    </Stack>

                </Paper>
            </Box>

        </Page>
    )
}

export default Login