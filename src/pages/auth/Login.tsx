/* eslint-disable @typescript-eslint/no-unused-vars */
import { authService } from 'services/auth.service';
import { notifyError } from 'utils/notifications';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Page from 'components/_reusables/Page';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './login.css'

type IFormData = {
    email: string;
    password: string;
};


const Login: React.FC = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormData>();

    const [busy, setBusy] = useState(false);

    async function go(credentials: IFormData) {
        const response = await authService.login(credentials);
        if (response) navigate('/projeler', { replace: true })
        else notifyError('Hatali kullanici ismi veya parola');
    }

    const handleFormSubmit = async (credentials: IFormData) => {
        setBusy(true)
        // Simulate network latency
        setTimeout(() => {
            go(credentials)
        }, 1500);
        try {

        } catch (err) {
            console.log(err);
        } finally {
            setTimeout(() => setBusy(false), 1500);
        }

    };

    return (
        <Page>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Box
                    component="div"
                    sx={{
                        '& > :not(style)': { width: '45ch' },
                        display: 'grid',
                        placeContent: 'center',
                        height: 'calc(80vh - 57px)',

                    }}
                >
                    <Paper variant="outlined">

                        <Stack spacing={4} direction="column" sx={{ p: 8, }}>
                            <Typography sx={{ fontSize: '1rem' }} textAlign="center" variant='h6'>Devam etmek için giriş yapınız</Typography>
                            <div className="field">
                                <TextField
                                    id="email"
                                    size='medium'
                                    label="Email"
                                    variant="outlined"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="form-error">Email adresinizi giriniz</span>}</div>
                            <div className="field">
                                <TextField
                                    id="password"
                                    label="Parola"
                                    type="password"
                                    autoComplete="current-password"
                                    {...register("password", { required: true, minLength: 6 })}
                                />
                                {errors.password && <span className="form-error">Parolanız minimum 6 karakter olmalı</span>}
                            </div>

                            <Button disabled={busy} type='submit' variant="contained">Giriş Yap</Button>
                        </Stack>

                        {busy && <div className="overlay">
                            <div className="cent">
                                <div className="lds-ripple">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>}
                    </Paper>
                </Box>
            </form>
        </Page>
    )
}

export default Login

// onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
// onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPass(event.target.value)}
