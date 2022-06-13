
import { ListItem, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import {  useSelector } from 'react-redux';


type MenuItemProps = {
  label: string
  onClick: () => void
  icon: JSX.Element
  componentKey?: number,
  hidden?: boolean,
  sidebarExpanded: boolean

}

export function MenuItem({
  componentKey,
  onClick,
  label,
  icon,
  sidebarExpanded

}: MenuItemProps) {
  

  return (
    <ListItem
    button
    key={componentKey}
    onClick={onClick}
    sx={{ p: 2, borderBottom: '1px solid', borderColor: 'primary.light', gap: 2, height: '4rem' }}
  >

    <Tooltip title={sidebarExpanded ? false : label} placement="right" arrow>
      <ListItemIcon sx={{ minWidth: '2rem', color: 'primary.contrastText' }}>{icon}</ListItemIcon>
    </Tooltip>
    <ListItemText primary={label} hidden={!sidebarExpanded} sx={{ fontSize: '0.8125rem', fontWeight: 400, color: 'primary.contrastText' }} />

  </ListItem>
  )
  
}