import {
  Box, Card, CardContent, CardHeader,
} from '@mui/material';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth0 } from '@auth0/auth0-react';

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          width: 500,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <CardContent>
          <LoadingButton
            variant="contained"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
