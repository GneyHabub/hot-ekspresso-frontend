import { Box } from '@mui/system';
import React from 'react';
import * as colors from '@mui/material/colors';
import {
  AppBar, Container, IconButton, Link, Menu, MenuItem, Toolbar, Typography,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
  onSidebarOpen?: () => void
}

const Layout: React.FC<Props> = ({ children, onSidebarOpen }) => {
  const { isAuthenticated, logout } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        rowGap: '30px',
        backgroundColor: colors.grey[50],
        overflowY: 'scroll',
      }}
    >
      <AppBar position="static">
        <Toolbar>
          {isAuthenticated
            && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onSidebarOpen}
            >
              <MenuIcon />
            </IconButton>
            )}
          <Link
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
            }}
            href="/"
            variant="h6"
            component="div"
            underline="none"
            color="white"
          >
            Hot Ekspresso Travel ✈️
          </Link>
          {isAuthenticated
            && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => logout()}>Logout</MenuItem>
              </Menu>
            </div>
            )}
        </Toolbar>
      </AppBar>
      <Container
        maxWidth="lg"
      >
        {children}
      </Container>

    </Box>
  );
};

export default Layout;
