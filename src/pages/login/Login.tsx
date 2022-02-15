import { Box, Card, CardContent, CardHeader, Link, TextField } from '@mui/material'
import React from 'react';
import loginStore from '../../store/login.store';
import LoadingButton from '@mui/lab/LoadingButton';
import { observer } from 'mobx-react';
import generalStore from '../../store/store';
import { useNavigate } from "react-router-dom";

const Login: React.FC = observer(() => {
  const store = loginStore;
  const navigate = useNavigate();
  const token = generalStore.token;

  React.useEffect(() => {
    if(token) {
      navigate('/');
    }
  }, [token]);

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
        <CardHeader title="Log In"/>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "20px",
          }}
        >
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
          <Link href="/register" variant="body2" underline="hover">
            No account yet? Sign up here!
          </Link>
          <LoadingButton 
            loading={store.isFetching}
            variant="contained"
            onClick={store.submit}
          >
            Log In
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  )
});

export default Login;
