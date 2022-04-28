import { m } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { MotionContainer, varFade } from './animate';
import useLocales from '../hooks/useLocales';

const RelativeDivStyle = styled('div')({
  position: 'relative',
  '&>div': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) !important',
  },
});
export default function Charter({text}) {
  const { translate } = useLocales();
  return (
    <MotionContainer>
      <RelativeDivStyle>
        <Box
          component="img"
          src="/assets/illustrations/charter.png"
          alt="charter"
          sx={{ minHeight: '130px', width: '100%' }}
        />
        <Box>
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" component="h2" noWrap sx={{ color: '#fff' }}>
              {translate(text)}
            </Typography>
          </m.div>
        </Box>
      </RelativeDivStyle>
    </MotionContainer>
  );
}
