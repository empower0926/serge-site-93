import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Typography } from '@mui/material';
import useLocales from '../../hooks/useLocales';
import FrqConfig from './FaqConfig';

export default function SimpleAccordion() {
  const { translate } = useLocales();
  return (
    <Container sx={{ maxWidth: '1200px' }}>
      {FrqConfig.map((e, index) => (
        <Accordion key={index} sx={{ mb: 4 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h4" component="h4">
              {translate(e.quiz)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body1"
              component="p"
              sx={{ whiteSpace: `${index === 7 || index === 6 ? 'pre-line' : ''}` }}
            >
              {translate(e.answere)}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
