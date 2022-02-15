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
            value={store.name}
            onChange={(e) => store.setName(e.target.value)}
          />
          <TextField 
            size="small"
            label="Surname"
            disabled={store.isFetching}
            value={store.surname}
            onChange={(e) => store.setSurname(e.target.value)}
          />
          <TextField 
            size="small"
            label="Email"
            type="email"
            disabled={store.isFetching}
            value={store.email}
            onChange={(e) => store.setEmail(e.target.value)}
          />
          <TextField 
            size="small"
            label="Password"
            type="password"
            disabled={store.isFetching}
            value={store.password}
            onChange={(e) => store.setPassword(e.target.value)}
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
            disabled={!store.passwordsMatch}
          >
            Sign Up
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  )
});

export default Register;
