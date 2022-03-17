/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldWrapper, FieldError } from './style/Styled';
import Ripple from 'components/ripple-loader/Ripple';
import { authService } from 'services/auth.service';
import { notifyError } from 'utils/notifications';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useState } from 'react';

interface ILoginFormData {
    email: string;
    password: string;
};

const Login: React.FC = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ILoginFormData>();

    const [busy, setBusy] = useState(false);

    async function go(credentials: ILoginFormData) {
        const response = await authService.login(credentials);
        if (response) navigate('/projeler', { replace: true })
        else notifyError('Hatali kullanici ismi veya parola');
    }

    const handleFormSubmit = async (credentials: ILoginFormData) => {
        setBusy(true)
        // Simulate network latency
        setTimeout(() => setBusy(false), 1500);
        try {
            setTimeout(() => {
                go(credentials)
            }, 1500);

        } catch (err) {
            console.log(err);
        } finally {
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Box
                    component="div"
                    sx={{
                        '& > :not(style)': { width: '45ch' },
                        display: 'grid',
                        placeContent: 'center',
                        height: 'calc(80vh - var(--navbar-height))',
                    }}
                >
                    <Paper variant="outlined">

                        <Stack spacing={4} direction="column" sx={{ p: 8, }}>
                            <Typography sx={{ fontSize: '1rem' }} textAlign="center" variant='h6'>Devam etmek için giriş yapınız</Typography>
                            <FieldWrapper>
                                <TextField
                                    id="email"
                                    size='medium'
                                    label="Email"
                                    variant="outlined"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <FieldError>Email adresinizi giriniz</FieldError>}</FieldWrapper>
                            <FieldWrapper>
                                <TextField
                                    id="password"
                                    label="Parola"
                                    type="password"
                                    autoComplete="current-password"
                                    {...register("password", { required: true, minLength: 6 })}
                                />
                                {errors.password && <FieldError>Parolanız minimum 6 karakter olmalı</FieldError>}
                            </FieldWrapper>

                            <Button disabled={busy} type='submit' variant="contained">Giriş Yap</Button>
                        </Stack>

                        {busy && <Ripple />}

                    </Paper>
                </Box>
            </form>
        </div>
    )
}

export default Login

// onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
