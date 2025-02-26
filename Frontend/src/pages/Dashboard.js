import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Divider,
  LinearProgress
} from '@mui/material';
import {
  AssignmentTurnedIn,
  AssignmentLate,
  BugReport,
  CheckCircle
} from '@mui/icons-material';

const Dashboard = () => {
  // Sample data
  const stats = [
    { title: 'Planos Ativos', value: 15, icon: <AssignmentTurnedIn color="primary" fontSize="large" />, color: '#1976d2' },
    { title: 'Testes Pendentes', value: 27, icon: <AssignmentLate color="warning" fontSize="large" />, color: '#ed6c02' },
    { title: 'Bugs Reportados', value: 42, icon: <BugReport color="error" fontSize="large" />, color: '#d32f2f' },
    { title: 'Testes Concluídos', value: 78, icon: <CheckCircle color="success" fontSize="large" />, color: '#2e7d32' },
  ];

  const recentTests = [
    { id: 'TST-001', name: 'Login Validation', status: 'Concluído', date: '18/02/2025' },
    { id: 'TST-002', name: 'User Registration', status: 'Pendente', date: '19/02/2025' },
    { id: 'TST-003', name: 'Payment Processing', status: 'Em Progresso', date: '20/02/2025' },
    { id: 'TST-004', name: 'Order Checkout', status: 'Concluído', date: '21/02/2025' },
  ];

  const progressData = [
    { system: 'Sistema ERP', progress: 75 },
    { system: 'Sistema CRM', progress: 45 },
    { system: 'Portal do Cliente', progress: 90 },
    { system: 'App Mobile', progress: 30 },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Paper elevation={2} sx={{ 
              p: 2, 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center',
              minHeight: 140,
              position: 'relative',
              overflow: 'hidden',
              borderTop: `4px solid ${stat.color}`
            }}>
              <Box sx={{ mb: 2, mt: 1 }}>{stat.icon}</Box>
              <Typography variant="h4" component="div" sx={{ mb: 1, fontWeight: 'bold' }}>
                {stat.value}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stat.title}
              </Typography>
            </Paper>
          </Grid>
        ))}

        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardHeader title="Testes Recentes" />
            <Divider />
            <CardContent sx={{ p: 0 }}>
              <List>
                {recentTests.map((test, index) => (
                  <React.Fragment key={test.id}>
                    <ListItem>
                      <ListItemText
                        primary={`${test.id}: ${test.name}`}
                        secondary={`Status: ${test.status} | Data: ${test.date}`}
                      />
                    </ListItem>
                    {index < recentTests.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={2}>
            <CardHeader title="Progresso de Testes por Sistema" />
            <Divider />
            <CardContent>
              {progressData.map((item) => (
                <Box key={item.system} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">{item.system}</Typography>
                    <Typography variant="body2">{item.progress}%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={item.progress} 
                    sx={{ height: 8, borderRadius: 5 }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;