import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import styled from '@emotion/styled';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from '../animate';
import useLocales from '../../hooks/useLocales';

const ButtonStyle = styled(Button)({
  border: '1px solid #D2D2D2',
  borderRadius: '20px',
  color: '#ABABAB',
  marginRight: '4px',
  marginBottom: '4px',
  padding: '2px 16px'
});
export default function KeyButton({ title, path }) {
  const { translate } = useLocales();
  return <ButtonStyle>{title}</ButtonStyle>;
}
