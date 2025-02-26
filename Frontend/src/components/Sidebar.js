import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  Box,
  Typography,
  Collapse,
  Avatar
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Description as PlanIcon,
  BugReport as TestIcon,
  People as UserIcon,
  Computer as SystemIcon,
  Assessment as ReportIcon,
  ChevronLeft as ChevronLeftIcon,
  ExpandLess,
  ExpandMore,
  DocumentScanner,
  Settings,
  PlayArrow,
  ManageAccounts,
  ExitToApp as LogoutIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [planoExpanded, setPlanoExpanded] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handlePlanoClick = () => {
    setPlanoExpanded(!planoExpanded);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { 
      text: 'Planos de Teste', 
      icon: <PlanIcon />, 
      path: '/plano',
      subItems: [
        { text: 'Documentação', icon: <DocumentScanner />, path: '/plano/documentacao' },
        { text: 'Execução', icon: <PlayArrow />, path: '/plano/execucao' },
        { text: 'Configuração', icon: <Settings />, path: '/plano/configuracao' },
        { text: 'Gerenciamento', icon: <ManageAccounts />, path: '/plano/gerenciamento' },
      ]
    },
    { text: 'Testes', icon: <TestIcon />, path: '/teste' },
    { text: 'Usuários', icon: <UserIcon />, path: '/usuario' },
    { text: 'Sistemas', icon: <SystemIcon />, path: '/sistema' },
    { text: 'Relatórios', icon: <ReportIcon />, path: '/relatorio' },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          justifyContent: 'space-between',
          backgroundColor: 'primary.main',
          color: 'white'
        }}
      >
        <Typography variant="h3" noWrap component="div">
          SGT-S
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>U</Avatar>
        <Box>
          <Typography variant="subtitle2">Usuário Logado</Typography>
          <Typography variant="body2" color="text.secondary">Admin</Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.text}>
            {item.subItems ? (
              <>
                <ListItem
                  button
                  onClick={handlePlanoClick}
                  selected={location.pathname.startsWith(item.path)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                  {planoExpanded ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={planoExpanded} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem
                        button
                        key={subItem.text}
                        sx={{ pl: 4 }}
                        onClick={() => handleNavigation(subItem.path)}
                        selected={location.pathname === subItem.path}
                      >
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.text} />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                button
                onClick={() => handleNavigation(item.path)}
                selected={location.pathname === item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={onLogout}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Sair" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;