import { ArrowBackIos, ArrowForwardIos, Dashboard, ExitToApp, Favorite, Group, Inbox, Layers } from '@mui/icons-material';
import { Box, Drawer, Icon, List, ListItem, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { toggle } from '../../../features/sidebar';



export function Sidebar(props: any) {

  const sidebar = useSelector((state: any) => state.sidebar)
  const dispatch = useDispatch()



  // const classes = useStyles()
  const navigate = useNavigate()
  const location: any = useLocation()

  const menu: any = [

    {
      text: 'Página inicial',
      icon: <Dashboard color="primary.light" />,
      path: '/'
    },
    {
      text: 'Minhas tarefas',
      icon: <Layers color="primary.light" />,
      path: '/task'
    },
    {
      text: 'Projetos',
      icon: <Inbox color="primary.light" />,
      path: '/project'
    },
    {
      text: 'Metas',
      icon: <Favorite color="primary.light" />,
      path: '/goal'
    },
    {
      text: 'Mvps',
      icon: <Group color="primary.light" />,
      path: '/mvp'
    },

  ]
  return (

    <Drawer variant="permanent" anchor="left"  >

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
            <ListItem sx={{ height: '100px', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid', borderColor: 'primary.light' }}>
              {/* <img hidden={!sidebar.expanded} style={{ width: '100%', maxWidth: '90px' }} src={logo} alt="logo" /> */}
              <Typography variant="h6" sx={{maxWidth: '90px', color: 'white'}}>
              {sidebar.expanded ? "W.Guilherme" : "W"}
                </Typography>
              <Icon sx={{ cursor: 'pointer', color: 'primary.light' }} onClick={() => dispatch(toggle())}>
                {sidebar.expanded ? <ArrowBackIos /> : <ArrowForwardIos />}
              </Icon>
            </ListItem>

            {menu?.map((item: any) => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{ p: 2, borderBottom: '1px solid', borderColor: 'primary.light', gap: 2, height: '4rem' }}
              >

                <Tooltip title={sidebar.expanded ? '' : item.text} placement="right" arrow>
                  <ListItemIcon sx={{ minWidth: '2rem', color: 'primary.contrastText' }}>{item.icon}</ListItemIcon>
                </Tooltip>
                <ListItemText primary={item.text} hidden={!sidebar.expanded} sx={{ fontSize: '0.8125rem', fontWeight: 400, color: 'primary.contrastText' }} />

              </ListItem>
            ))}
          </Box>

          <ListItem button
            data-cy="logout">
            <ListItemText sx={{ color: 'primary.contrastText' }} hidden={!sidebar.expanded} primary="Sair da conta" />
            <ListItemIcon sx={{ minWidth: '2rem' }}><ExitToApp sx={{ color: 'primary.light' }} /></ListItemIcon>
          </ListItem>
        </Box>

      </List>
    </Drawer>
  )
}