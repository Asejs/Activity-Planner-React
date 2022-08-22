import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from './logo.png'
import { Link } from 'react-router-dom';



const pages: { name: string; path: string }[] = [
    {name: 'Hjem', path: '/'},
    {name: 'Utforsk aktiviteter', path: '/aktiviteter'}
];

const settings: { name: string; path: string }[] = [
    {name: 'Profil', path: '/'},
    {name: 'Registrer ny bruker', path: '/'},
    {name: 'Logg inn', path: '/login'},
    {name: 'Logg ut', path: '/'}
];


const ResponsiveAppBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#789778', mb: '30px'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            {/* Nedtrekksmeny - vises bare når siden er xs */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                <MenuIcon />
                </IconButton>

                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {pages.map((page, id) => (
                    <Link to ={page.path} key={id}>
                        <MenuItem onClick={handleCloseNavMenu}>
                                <Typography component={'span'}>{page.name}</Typography>
                        </MenuItem>
                    </Link>
                ))}
                </Menu>
            </Box>


            {/* Logo */}
            <Box sx={{ flexGrow: 1 }}>
                <Link to ="/">
                    <img className="logo" src={ logo }/>
                </Link>
            </Box>


            {/* Knapper i meny */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page, id) => (
                <Link to ={page.path} key={id}>
                    <Button
                    sx={{ my: 2, color: 'white', display: 'block' }}>
                    {page.name}
                    </Button>
                </Link>
                ))}
            </Box>


            {/* Profil meny */}
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Profil">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Profil" />
                </IconButton>
                </Tooltip>
                
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
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                {settings.map((setting, id) => (
                    <Link to ={setting.path} key={id}>
                        <MenuItem>
                            <Typography component={'span'} textAlign="center">{setting.name}</Typography>
                        </MenuItem>
                    </Link>
                ))}
                </Menu>
            </Box>
        </Toolbar>

      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
