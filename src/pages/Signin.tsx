import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Grid,Button  } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {TextField,Typography, Link} from '@mui/material';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {LoggedUserContext} from '../contexts/User'
import {api} from '../services/api';
import auth from "../services/auth";
import { LockOutlined } from '@mui/icons-material';

export function Signin() {
  
  const navigate = useNavigate()
  const { setAuthenticated } = React.useContext(LoggedUserContext)
  const [loginLoading, setLoginLoading] = React.useState<any>(false)


  const validationSchema: any = yup.object().shape({
    email: yup.string().email("Por favor, informe um e-mail válido").required("O email é obrigatório"),
    password: yup.string().min(8, "A senha deve ter no mínimo 8 caracteres").required("A senha é obrigatória")
  });

  const handleLogin: any = async (credentials: any) => {
    try {
      setAuthenticated(true)
      setTimeout(() => {
        setAuthenticated(true)
      },2000)

      // const { data: loginUser }: any = await api.post("/user/login", { email: credentials.email, password: credentials.password });
      // await auth.onSignIn(loginUser.data.token)

      // navigate(`/dashboard`)

      // setLoginLoading(false)
      // setToast({ ...toast, open: true, message: 'Logado com sucesso!' })
      // setRefreshData(!refreshData)

    } catch (error: any) {
      // setLoginLoading(false)
      // setToast({
      //   ...toast,
      //   open: true,
      //   message: error?.response?.data?.message
      // })
      return error
    }
  }

  const formik: any = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      handleLogin(values)
    },
  });


  return (

    <Box  
    sx={{
      display:'flex',
      minHeight: "100%",
      flexDirection:'column',
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: '#f8f8f8'
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          p:4,
          border:'1px dashed gray',
          backgroundColor: 'white'
        }}
      > 


   <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>

        <form onSubmit={formik.handleSubmit}>

          <TextField
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            autoComplete="email"
            margin="normal"
            fullWidth
            autoFocus

          />

          <TextField
            id="password"
            name="password"
            type="password"
            label="Senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            autoComplete="current-password"
            margin="normal"
            fullWidth
          />


          <LoadingButton
            loading={loginLoading}
            disabled={loginLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </LoadingButton>


          <Box sx={{mt: 2}}>

          <Typography variant="body2" align="center" sx={{mb:1.5}}>
            Ou crie sua conta:
          </Typography>

          <Button onClick={()=>navigate('/signup')} variant="outlined" color="primary" fullWidth>
            Criar conta
          </Button>
          </Box>


          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                {"Não possui uma conta? Cadastre-se"}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box >
  )
}