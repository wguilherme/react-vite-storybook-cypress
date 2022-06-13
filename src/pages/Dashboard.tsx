import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, Paper, Typography } from '@mui/material'
import Header from '../components/HeaderPage'
import { useQuery } from "@apollo/client";
import {INFO_PERSON} from "../queries";

function Dashboard() {
  const { loading, error, data } = useQuery(INFO_PERSON);
  console.log('data', data)
  

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

  if (loading) {
    return <p>Carregando dados graphql...</p>;
  }
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

      <Box sx={{mt:5}}>


        <Typography variant="body1">Data from GraphQL</Typography>
      <List>
        {data?.characters?.results?.map((character:any, index:number)=>(
          <ListItem>
            <ListItemAvatar>
              <Avatar src={character.image}>
                {character?.name?.charAt(0)}
              </Avatar>
            </ListItemAvatar>
          <Typography variant="body1">{character?.name}</Typography>
        </ListItem>
        ))}
      </List>
        </Box>



    </>
  )
}
export default Dashboard