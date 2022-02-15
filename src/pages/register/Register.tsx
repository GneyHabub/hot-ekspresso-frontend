import { Box, Card, CardContent, CardHeader, Link, TextField } from '@mui/material'
import React from 'react';
import loginStore from '../../store/login.store';
import LoadingButton from '@mui/lab/LoadingButton';
import { observer } from 'mobx-react';
import registerStore from '../../store/register.store';
import generalStore from '../../store/store';
import { useNavigate } from "react-router-dom";

const Register: React.FC = observer(() => {
  const store = registerStore;
  const navigate = useNavigate();

  React.useEffect(() => {
    if(generalStore.token) {
      navigate('/');
    }
  }, [generalStore.token])
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Card
        sx={{
          width: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <CardHeader title="Sign Up"/>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px"
          }}
        >
          <TextField 
            size="small"
            label="Name"
            disabled={store.isFetching}
            error={store.nameDirty && store.nameError}
            value={store.name}
            onChange={(e) => {
              store.dirtyName();
              store.setName(e.target.value)
            }}
          />
          <TextField 
            size="small"
            label="Email"
            type="email"
            disabled={store.isFetching}
            error={store.emailDirty && store.emailError}
            value={store.email}
            onChange={(e) => {
              store.dirtyEmail();
              store.setEmail(e.target.value)
            }}
          />
          <TextField 
            size="small"
            label="Password"
            type="password"
            disabled={store.isFetching}
            error={store.passwordDirty && store.passwordError}
            value={store.password}
            onChange={(e) => {
              store.dirtyPassword();
              store.setPassword(e.target.value);
            }}
          />
          <TextField 
            size="small"
            label="Repeat password"
            type="password"
            error={!store.passwordsMatch}
            disabled={store.isFetching}
            value={store.repeatPassword}
            onChange={(e) => store.setRepeatPassword(e.target.value)}
          />
          <Link href="/login" variant="body2" underline="hover">
            Already have an account? Log in here!
          </Link>
          <LoadingButton 
            loading={store.isFetching}
            variant="contained"
            onClick={store.submit}
            disabled={
              !store.passwordsMatch ||
              store.passwordError ||
              store.emailError ||
              store.nameError
            }
          >
            Sign Up
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  )
});

export default Register;
