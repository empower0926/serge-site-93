import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Container, Box, Typography } from '@mui/material';
import useLocales from '../../hooks/useLocales';
import FrqConfig from './FaqConfig';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  borderLeft: `6px solid #2B82BA`,
  borderRadius: '8px',
  '&:not(:last-child)': {
    borderBottom: 0,
    borderTop: 0,
  },
  '&:before': {
    display: 'none',
  },
  marginBottom: '16px',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: 'rgba(43, 130, 186, 0.14)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');
  const text = 'panel';
  const text1 = 'd-header';
  const text2 = 'd-content';
  const { translate } = useLocales();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sx={{ maxWidth: '1200px', px: '0' }}>
      {FrqConfig.map((e, index) => (
        <Accordion
          key={index}
          expanded={expanded === text + Number(index + 1)}
          onChange={handleChange(`${text + Number(index + 1)}`)}
        >
          <AccordionSummary
            aria-controls={text + Number(index + 1) + text2}
            id={text + Number(index + 1) + text1}
            sx={{ py: 2 }}
          >
            <Typography variant="h4" component="h4" sx={{ fontWeight: 'lighter' }}>
              {translate(e.quiz)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {index !== 8 ? (
              <Typography
                variant="p"
                component="p"
                sx={{ whiteSpace: `${index === 7 || index === 6 ? 'pre-line' : ''}`, fontWeight: 'lighter' }}
              >
                {translate(e.answere)}
              </Typography>
            ) : (
              <Box component="img" src="/assets/images/other/warning.png" sx={{width: '600px',maxWidth:'100%', mx: 'auto'}}/>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
