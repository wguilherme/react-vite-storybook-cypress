import {  Dashboard, ExitToApp, Favorite, Group, Inbox, Layers } from '@mui/icons-material';
import { Box, Drawer, List, } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
// import { toggle } from '../../../features/sidebar';
import {LoggedUserContext} from '../../../contexts/User'
import { useContext } from 'react';
import { MenuItem } from '../../molecule/menuItem';
import { MenuToggleButton } from '../../molecule/menuToggleButton';



export function Sidebar (props: any) {

  const {setAuthenticated} =  useContext(LoggedUserContext)

  const sidebar = useSelector((state: any) => state.sidebar)
  // const dispatch = useDispatch()

  const navigate = useNavigate()
  // const location: any = useLocation()

  const menu: any = [

    {
      label: 'Página inicial',
      icon: <Dashboard color="primary.light" />,
      path: '/'
    },
    {
      label: 'Minhas tarefas',
      icon: <Layers color="primary.light" />,
      path: '/task'
    },
    {
      label: 'Projetos',
      icon: <Inbox color="primary.light" />,
      path: '/project'
    },
    {
      label: 'Metas',
      icon: <Favorite color="primary.light" />,
      path: '/goal'
    },
    {
      label: 'Mvps',
      icon: <Group color="primary.light" />,
      path: '/mvp'
    },
    {
      label: 'GraphQL',
      icon: <Group color="primary.light" />,
      path: '/graphql'
    },
    {
      label: 'Charts',
      icon: <Group color="primary.light" />,
      path: '/charts'
    },

  ]

  function handleLogout(){
    setAuthenticated(false)
    navigate('/login')
  }

  return (

    <Drawer variant="permanent" anchor="left" >
      <List
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflow: 'hidden',
          p: 0,
          margin: 0,
          listStyle: 'none',
          backgroundColor: 'primary.700'
        }}
      >
        <Box sx={{ height: '100%', transition: 'width ease 200ms', width: sidebar.expanded ? '240px' : '60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Box>
            <MenuToggleButton expandedLabel='W. Guilherme' collapsedLabel='W'/>

            {menu?.map((item: any, index:any) => (
              <MenuItem componentKey={index} onClick={()=>navigate(item.path)} label={item.label} icon={item.icon} sidebarExpanded={sidebar.expanded} />
            ))}

          </Box>
          <MenuItem hidden={!sidebar.expanded} onClick={handleLogout} label="Sair da conta" icon={<ExitToApp sx={{ color: 'primary.light' }} />} sidebarExpanded={sidebar.expanded} />
        </Box>
      </List>
    </Drawer>
  )
}