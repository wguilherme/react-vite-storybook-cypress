import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { Icon,  ListItem, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../../features/sidebar';


type Props = {
  expandedLabel: string;
  collapsedLabel: string;
}
export function MenuToggleButton({expandedLabel, collapsedLabel}:Props){
  const sidebar = useSelector((state: any) => state.sidebar)
  const dispatch = useDispatch()

  return (
    <ListItem sx={{ height: '100px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'primary.light' }}>            
    <Typography variant="h6" color="white">{sidebar.expanded ? expandedLabel : collapsedLabel }</Typography>
    <Icon sx={{ cursor: 'pointer', color: 'primary.light' }} onClick={() => dispatch(toggle())}>
      {sidebar.expanded ? <ArrowBackIos /> : <ArrowForwardIos />}
    </Icon>
  </ListItem>
  )
}