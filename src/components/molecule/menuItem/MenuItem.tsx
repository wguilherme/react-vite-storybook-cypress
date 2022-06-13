import { ArrowBackIos, ArrowForwardIos, Dashboard, ExitToApp, Favorite, Group, Inbox, LabelImportantTwoTone, Layers } from '@mui/icons-material';
import { Box, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggle } from '../../../features/sidebar';
import {LoggedUserContext} from '../../../contexts/User'
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';


type MenuItemProps = {
  label: string
  onClick: () => void
  icon: JSX.Element
  key?: number,
  // position?: string
  hidden?: boolean

}

export function MenuItem({
  key,
  onClick,
  label,
  icon,

}: MenuItemProps) {
  const sidebar = useSelector((state: any) => state.sidebar)
  const dispatch = useDispatch()

  return (
    <ListItem
    button
    key={key}
    onClick={onClick}
    sx={{ p: 2, borderBottom: '1px solid', borderColor: 'primary.light', gap: 2, height: '4rem' }}
  >

    <Tooltip title={sidebar.expanded ? false : label} placement="right" arrow>
      <ListItemIcon sx={{ minWidth: '2rem', color: 'primary.contrastText' }}>{icon}</ListItemIcon>
    </Tooltip>
    <ListItemText primary={label} hidden={!sidebar.expanded} sx={{ fontSize: '0.8125rem', fontWeight: 400, color: 'primary.contrastText' }} />

  </ListItem>
  )
  
}