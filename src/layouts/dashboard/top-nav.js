import PropTypes from 'prop-types';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import Bars3Icon from '@heroicons/react/24/solid/Bars3Icon';
import {
  Badge,
  Box,
  IconButton,
  Stack,
  SvgIcon,
  Tooltip,
  useMediaQuery
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useRouter } from 'next/navigation';


const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

export const TopNav = (props) => {
  const { onNavOpen } = props;
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const router = useRouter();


  const logout = ()=>{
    localStorage.removeItem('email');
    router.push('/');
  }


  return (
    <>
      <Box
        component="header"
        
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`
          },
          top: 0,
          width: {
            lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`
          },
          zIndex: (theme) => theme.zIndex.appBar
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
          }}
        >
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >
         

          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
          >

            <Tooltip title="log out">
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <SvgIcon fontSize="small" onClick={logout}>
                    <UsersIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Box>

    </>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func
};
