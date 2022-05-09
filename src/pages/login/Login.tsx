import {
  Box, Card, CardContent, CardHeader, IconButton, Input, InputAdornment, InputLabel, TextField,
} from '@mui/material';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, Controller } from 'react-hook-form';
import { observer } from 'mobx-react';
import { AccountCircle, Visibility } from '@mui/icons-material';
import store from '../../store/store';

interface FormData {
  username: string;
  password: string;
}

const Login: React.FC = observer(() => {
  const { control, handleSubmit } = useForm<FormData>(
    {
      mode: 'onChange',
      defaultValues: {
        username: '',
        password: '',
      },
    },
  );
  const submit = (data: FormData) => {
    store.login(data.username, data.password);
  };
  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
      onSubmit={handleSubmit(submit)}
    >
      <Card
        sx={{
          width: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardHeader title="Login" />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="standard-adornment-username"
                type="text"
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                    >
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
        )}
              />
            )}
          />
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="standard-adornment-password"
                type="password"
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
            )}
              />
            )}
          />
          <LoadingButton
            variant="contained"
            type="submit"
          >
            Log In
          </LoadingButton>
        </CardContent>
      </Card>
    </form>
  );
});

export default Login;
