/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

// Material Components

import {
  Avatar,
  Badge,
  Box,
  Chip,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

// icons
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useMutation, useQuery, useSubscription } from '@apollo/client';
import {
  DoneRounded,
  ExpandLess,
  FileCopyOutlined,
  LogoutOutlined,
  LoopRounded,
  SettingsBackupRestoreOutlined,
  SettingsOutlined,
  StarBorderOutlined,
  SupervisorAccountOutlined,
} from '@mui/icons-material';
import { RootState } from '../../../app/store';
import { UseSignout } from '../../../hooks/auth/UseSignout';
import CustomTextField from '../inputs/CustomTextField';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export default function Navbar() {
  const user = useSelector((state: RootState) => state.auth.user);

  const navigate = useNavigate();

  const { signout } = UseSignout();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = async (destination?: string) => {
    if (destination === 'profile')
      navigate(`/user/${user.username}`, { preventScrollReset: false });
    if (destination === 'settings')
      navigate(`/settings`, { preventScrollReset: false });

    setMenuIsOpen(false);
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ backgroundColor: 'white' }}>
      <Container sx={{ m: 0 }} maxWidth={false}>
        <Toolbar disableGutters>
          <Stack
            alignContent="center"
            justifyContent="center"
            direction="row"
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/', { preventScrollReset: false })}
          >
            <Box sx={{ mr: 1 }}>
              <img src="/logo.png" alt="ECNAM Icon" width="90px" />
            </Box>
            <Typography
              variant="h6"
              lineHeight="3rem"
              fontWeight={700}
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'black',
                textDecoration: 'none',
              }}
            >
              E-CNAM
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 0, ml: 'auto' }}>
            <Stack direction="row-reverse" spacing={2}>
              <Box
                display={{ xs: 'none', sm: 'none', md: 'block' }}
                sx={{
                  cursor: 'pointer',
                  display: 'flex',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                onClick={handleOpenUserMenu}
              >
                <Tooltip title="open menu">
                  {anchorElUser ? (
                    <ExpandLess
                      sx={{ color: 'black', my: 'auto', cursor: 'pointer' }}
                    />
                  ) : (
                    <ExpandMoreIcon
                      sx={{ color: 'black', my: 'auto', cursor: 'pointer' }}
                    />
                  )}
                </Tooltip>
              </Box>
              <Stack
                sx={{
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
                display={{ xs: 'none', sm: 'none', md: 'block' }}
              >
                <Typography
                  color="black"
                  fontSize=".8rem"
                  fontWeight="500"
                  textTransform="capitalize"
                >
                  <Link
                    preventScrollReset
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/user/${user.username}`}
                  >
                    {`${user.firstname} ${user.lastname}`}
                  </Link>
                </Typography>

                <Chip
                  sx={{ width: '100%' }}
                  label="Kinesietherapeute"
                  size="small"
                  variant="outlined"
                  color="primary"
                />
              </Stack>

              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Avatar" src="" />
              </IconButton>
            </Stack>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              PaperProps={{
                style: {
                  minWidth: '350px',
                  width: '350px',
                  padding: 5,
                  borderRadius: '.5rem',
                },
              }}
              open={Boolean(anchorElUser)}
              onClose={() => handleCloseUserMenu()}
            >
              <Box>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        py: 1,
                        borderRadius: 3,
                        backgroundColor: '#F0F0F0',
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ justifyContent: 'space-between', px: 1 }}
                      >
                        <Stack
                          direction="row"
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <IconButton sx={{ my: 'auto' }}>
                            <Avatar
                              alt="Avatar"
                              sx={{ width: 30, height: 30 }}
                              src=""
                            />
                          </IconButton>
                          <Typography
                            fontWeight={500}
                            fontSize={14}
                            textTransform="capitalize"
                          >
                            <Link
                              preventScrollReset
                              style={{
                                textDecoration: 'none',
                                color: 'black',
                              }}
                              to={`/user/${user.username}`}
                            >{`${user.firstname} ${user.lastname}`}</Link>
                          </Typography>
                        </Stack>
                        <IconButton disabled>
                          <DoneRounded />
                        </IconButton>
                      </Stack>
                    </Box>

                    <Divider sx={{ my: 1 }} />
                    <Stack>
                      <MenuItem
                        sx={{ borderRadius: 2 }}
                        onClick={() => handleCloseUserMenu('settings')}
                      >
                        <Stack spacing={1} direction="row">
                          <SettingsOutlined />
                          <Typography textAlign="center">Parametres</Typography>
                        </Stack>
                      </MenuItem>
                      <MenuItem
                        sx={{ borderRadius: 2 }}
                        onClick={() => signout()}
                      >
                        <Stack spacing={1} direction="row">
                          <LogoutOutlined />
                          <Typography textAlign="center">
                            Se deconnecter
                          </Typography>
                        </Stack>
                      </MenuItem>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
