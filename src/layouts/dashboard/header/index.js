import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import useLocales from '../../../hooks/useLocales';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
import LanguagePopover from './LanguagePopover';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  background: '#000',
  height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  // [theme.breakpoints.up('lg')]: {
  //   height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
  //   width: '100%',
  //   ...(isCollapse && {
  //     width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
  //   }),
  //   ...(isOffset && {
  //     height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  //   }),
  //   ...(verticalLayout && {
  //     width: '100%',
  //     height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  //     backgroundColor: theme.palette.background.default,
  //   }),
  // },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool,
  verticalLayout: PropTypes.bool,
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;
  const { translate } = useLocales();
  const isDesktop = useResponsive('up', 'lg');
  const topBarContent = [
    {
      path: "https://backoffice.ollorun.com/login/client",
      name: "CUSTOMER",
    },
    {
      path: "https://backoffice.ollorun.com/",
      name: "ADVISOR_DST",
    }
  ];

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}
        <Box>
          <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: '#fff', fontSize: '36px' }}>
            <Iconify icon="eva:menu-2-fill" />
          </IconButtonAnimate>
        </Box>
        <Box sx={{
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <IconButtonAnimate>
            <Logo />
          </IconButtonAnimate>
        </Box>
        <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
          <Box sx={{ flexGrow: 1, display: {xs:'none',sm:'flex'} }}>
            {topBarContent.map((data) => (
              <IconButtonAnimate
                key={data.name}
                href={data.path}
                sx={{ color: 'white', fontSize: '16px'}}
              >
                {translate(data.name)}
              </IconButtonAnimate>
            ))}
          </Box>
          <LanguagePopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
