import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import { SvgIcon } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PsychologyIcon from '@mui/icons-material/Psychology';
export const items = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Calibrate Yourself',
    path: '/calibrate',
    icon: (
      <SvgIcon fontSize="small">
        <MicrosoftIcon  />
      </SvgIcon>
    )
  },
  {
    title: 'Posture History',
    path: '/posture',
    icon: (
      <SvgIcon fontSize="small">
        <FavoriteIcon  />
      </SvgIcon>
    )
  },
  {
    title: 'Productivity History',
    path: '/productivity',
    icon: (
      <SvgIcon fontSize="small">
        <TimerIcon  />
      </SvgIcon>
    )
  },{
    title: 'Eye Health History',
    path: '/eye',
    icon: (
      <SvgIcon fontSize="small">
        <VisibilityIcon />
      </SvgIcon>
    )
  },{
    title: 'Stress Monitoring',
    path: '/stress',
    icon: (
      <SvgIcon fontSize="small">
        <PsychologyIcon />
      </SvgIcon>
    )
  },
];


export const others = [
  {
    title: 'Accounts',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <SettingsIcon />
      </SvgIcon>
    )
  }
];