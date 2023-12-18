import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export function RegisterForm({ onData }) {
  const initialState = {
    name: '',
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    showPassword: false,
  };

  const [state, setState] = useState({ ...initialState });
  const { name, email, password, emailError, passwordError, showPassword } =
    state;

  const validateEmail = email => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = password => {
    return password.length >= 8;
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'email') {
      if (!validateEmail(value)) {
        setState(prevState => ({
          ...prevState,
          emailError: 'Введіть дійсну електронну адресу',
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          emailError: '',
        }));
      }
    }

    if (name === 'password') {
      if (!validatePassword(value)) {
        setState(prevState => ({
          ...prevState,
          passwordError: 'Пароль повинен містити принаймні 8 символів',
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          passwordError: '',
        }));
      }
    }
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      onData({ ...state });
      setState({ ...initialState });
    }
  };

  return (
    <Container component="div" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#938e94ba',
          padding: '30px 40px',
          border: '3px solid gray',
          borderRadius: ' 15px',
        }}
      >
        <Typography variant="h4">Sign Up</Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="User name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            type="email"
            value={email}
            variant="standard"
            onChange={handleChange}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            variant="standard"
            onChange={handleChange}
            error={!!passwordError}
            helperText={passwordError}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="outlined"
            size="small"
            sx={{
              color: 'white',
              backgroundColor: '#1337aeeb',
              '&:hover': {
                backgroundColor: '#003bff',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
