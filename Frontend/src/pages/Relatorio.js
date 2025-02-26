import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { LineChart, Line, PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

const dataLine = [
  { name: 'Jan', testes: 10 },
  { name: 'Fev', testes: 20 },
  { name: 'Mar', testes: 30 },
];

const dataPie = [
  { name: 'Baixa', value: 30 },
  { name: 'Média', value: 50 },
  { name: 'Alta', value: 20 },
];

const dataBar = [
  { name: 'Funcionalidade A', aprovados: 50, reprovados: 10 },
  { name: 'Funcionalidade B', aprovados: 40, reprovados: 15 },
];

const Relatorio = () => {
  const [filtro, setFiltro] = useState('mensal');

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Relatórios de Testes</Typography>
      
      <Select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        <MenuItem value="diário">Diário</MenuItem>
        <MenuItem value="mensal">Mensal</MenuItem>
        <MenuItem value="anual">Anual</MenuItem>
      </Select>
      
      <Button variant="contained" color="primary" style={{ marginLeft: 10 }}>Exportar PDF</Button>
      
      <Box mt={4}>
        <Typography variant="h6">Progresso dos Testes</Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dataLine}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="testes" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      
      <Box mt={4} display="flex" justifyContent="space-between">
        <Box width="48%">
          <Typography variant="h6">Distribuição de Bugs</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={dataPie} dataKey="value" nameKey="name" fill="#82ca9d" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
        <Box width="48%">
          <Typography variant="h6">Resultados por Funcionalidade</Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dataBar}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="aprovados" fill="#4CAF50" />
              <Bar dataKey="reprovados" fill="#F44336" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
      
      <Box mt={4}>
        <Typography variant="h6">Execuções de Testes</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Data</TableCell>
                <TableCell>Sistema</TableCell>
                <TableCell>Testes Executados</TableCell>
                <TableCell>Aprovação (%)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>10/02/2025</TableCell>
                <TableCell>SGT-S</TableCell>
                <TableCell>50</TableCell>
                <TableCell>90%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>11/02/2025</TableCell>
                <TableCell>SGT-S</TableCell>
                <TableCell>45</TableCell>
                <TableCell>85%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Relatorio;
