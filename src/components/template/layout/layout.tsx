import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import {Sidebar} from '../sidebar';

export function Layout(props: any) {
  const sidebar = useSelector((state: any) => state.sidebar)
  // const [isSidebarExpanded, setIsSidebarExpanded] = useState<Boolean>(true)

  const { children } = props
  // const classes = useStyles()
  const navigate = useNavigate()
  const location: any = useLocation()

  // const { loggedUser } = useContext(LoggedUserContext)

  // const handleLogout = () => {
  //   auth.onSignOut()
  //   navigate('/')
  // }


  // const breadcrumbsPaths: any = location.pathname.split('/')
  // const breadcrumbsPaths: any = location.pathname.split('/').filter((path: any) => path)



  // const menuItems: any = menu[props.userRole]

  return (
    <>

      <Sidebar />

      <Box sx={{ pl: sidebar.expanded ? '240px ' : '60px' }}>
        <Box sx={{ px: 3, pt: 3 }}>
          {children}
        </Box>
        {/* <ToastComponent /> */}
      </Box>
    </>
  )
}