import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx, type }) {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR
  // const logo = <img style={{width: '60px'}} src = '/logo/logo_single.png' alt='aa'/>;

  const logo = (
    <Box>
      {!type ? (
        <img src="/logo/logo_single.png" width='60px' height='60px' alt="single logo" />
      ) : (
        <img src="/logo/logo_full.svg" width='150px' height='125px' alt="full logo" />
      )}
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
