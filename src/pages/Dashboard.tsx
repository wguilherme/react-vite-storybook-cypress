import { Box, Grid, Paper, Typography } from '@mui/material'
import Header from '../components/HeaderPage'
function Dashboard() {

  const mockData = [
    {
      title: 'Projects',
      count: 3
    },
    {
      title: 'Goals',
      count: 2
    },
    {
      title: 'Tasks',
      count: 1

    }, {
      title: 'MVPs',
      count: 1

    }
  ]


  return (
    <>
      <Header title="Dashboard" />
      <Grid container gap={2}>
        {mockData.map((item, index): any => (
          <Grid item xs>
            <Paper sx={{ p: 2, textAlign: 'center' }}>
              <Typography sx={{ fontWeight: 400, }} variant="h4">03</Typography>
              <Typography variant="subtitle1">projetos</Typography>
            </Paper>
          </Grid>

        ))}
      </Grid>

    </>
  )
}
export default Dashboard