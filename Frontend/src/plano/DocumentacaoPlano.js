import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Grid,
  Button,
  MenuItem,
 // Divider,
  Stepper,
  Step,
  StepLabel,
  FormControlLabel,
  Switch,
  //Accordion,
 // AccordionSummary,
 // AccordionDetails,
  Alert
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon, Save as SaveIcon, Check as CheckIcon } from '@mui/icons-material';

const DocumentacaoPlano = () => {
  const [searchParams] = useSearchParams();
  const isNew = searchParams.get('new') === 'true';
  const planoId = searchParams.get('id');
  
  const [activeStep, setActiveStep] = useState(0);
  const [saved, setSaved] = useState(false);
  
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    sistema: '',
    versao: '',
    descricao: '',
    objetivo: '',
    escopo: '',
    metodologia: 'Caixa Preta',
    criteriosAceitacao: '',
    responsavel: '',
    recursos: '',
    cronograma: '',
    riscos: '',
    aprovacao: false
  });

  useEffect(() => {
    if (planoId) {
      // Simulate fetching data
      setFormData({
        id: 'PL001',
        nome: 'Plano de Teste - Portal Web',
        sistema: 'Portal de Clientes',
        versao: '1.2',
        descricao: 'Plano de teste para validação do Portal Web de clientes',
        objetivo: 'Validar todas as funcionalidades do portal web antes do lançamento da versão 2.0',
        escopo: 'Testes de interface, usabilidade, funcionalidade e integração',
        metodologia: 'Caixa Preta',
        criteriosAceitacao: '100% dos testes críticos aprovados, máximo de 5 bugs de baixa severidade',
        responsavel: 'Maria Silva',
        recursos: '2 testadores seniores, 1 desenvolvedor de suporte',
        cronograma: '01/03/2025 a 15/03/2025',
        riscos: 'Atraso na entrega de ambiente de homologação',
        aprovacao: true
      });
    } else if (isNew) {
      // Generate new ID for new plan
      setFormData(f => ({
        ...f,
        id: `PL${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
      }));
    }
  }, [planoId, isNew, formData]);
  

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'aprovacao' ? checked : value
    });
    setSaved(false);
  };

  const handleSave = () => {
    // Simulate saving
    setTimeout(() => {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 500);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = ['Informações Básicas', 'Detalhes do Plano', 'Recursos e Cronograma', 'Aprovação'];

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        {isNew ? 'Criar Novo Plano de Teste' : `Editar Plano de Teste: ${formData.nome}`}
      </Typography>
      
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 2 }}>
        {activeStep === 0 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Informações Básicas</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nome do Plano"
                  fullWidth
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Sistema"
                  fullWidth
                  name="sistema"
                  value={formData.sistema}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Versão"
                  fullWidth
                  name="versao"
                  value={formData.versao}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descrição"
                  fullWidth
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  required
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </Paper>
        )}

        {activeStep === 1 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Detalhes do Plano</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Objetivo"
                  fullWidth
                  name="objetivo"
                  value={formData.objetivo}
                  onChange={handleChange}
                  required
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Escopo"
                  fullWidth
                  name="escopo"
                  value={formData.escopo}
                  onChange={handleChange}
                  required
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Metodologia"
                  select
                  fullWidth
                  name="metodologia"
                  value={formData.metodologia}
                  onChange={handleChange}
                >
                  <MenuItem value="Caixa Preta">Caixa Preta</MenuItem>
                  <MenuItem value="Caixa Branca">Caixa Branca</MenuItem>
                  <MenuItem value="Cinza">Cinza</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Critérios de Aceitação"
                  fullWidth
                  name="criteriosAceitacao"
                  value={formData.criteriosAceitacao}
                  onChange={handleChange}
                  required
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>
          </Paper>
        )}

        {activeStep === 2 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Recursos e Cronograma</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Responsável"
                  fullWidth
                  name="responsavel"
                  value={formData.responsavel}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Recursos"
                  fullWidth
                  name="recursos"
                  value={formData.recursos}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Cronograma"
                  fullWidth
                  name="cronograma"
                  value={formData.cronograma}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Paper>
        )}

        {activeStep === 3 && (
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Aprovação</Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.aprovacao}
                  onChange={handleChange}
                  name="aprovacao"
                />
              }
              label="Plano Aprovado"
            />
          </Paper>
        )}

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button
            color="inherit"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            Voltar
          </Button>
          <Box>
            {saved && (
              <Alert severity="success" sx={{ mb: 2 }}>Plano salvo com sucesso!</Alert>
            )}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              startIcon={<SaveIcon />}
            >
              Salvar
            </Button>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentacaoPlano;
