import React, { useState } from 'react';
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Link
} from '@mui/material';
import { PersonOutline } from '@mui/icons-material';

const Login = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate authentication
    setTimeout(() => {
      if (credentials.username === 'admin' && credentials.password === 'password') {
        onLogin();
      } else {
        setError('Usuário ou senha inválidos');
        // Limpar os campos após erro de login
        setCredentials({ username: '', password: '' });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ 
              m: 1, 
              bgcolor: 'primary.main', 
              color: 'white', 
              width: 50, 
              height: 50, 
              borderRadius: '50%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}>
              <PersonOutline />
            </Box>
            <Typography component="h2" variant="h5" sx={{ mb: 3 }}>
              SGT-S Gerenciamento de Testes de Software
            </Typography>
            {error && <Alert severity="error" sx={{ mb: 2, width: '100%' }}>{error}</Alert>}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Nome de Usuário"
                name="username"
                autoComplete="username"
                autoFocus
                value={credentials.username}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={credentials.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
                disabled={loading}
              >
                {loading ? <CircularProgress size={24} /> : 'Entrar'}
              </Button>
              <Box sx={{ mt: 2, textAlign: 'center' }}>
                <Typography variant="caption" color="text.secondary">
                  Para teste, use: admin / password
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Link href="#" variant="body2" color="primary">
                    Esqueceu a senha?
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
