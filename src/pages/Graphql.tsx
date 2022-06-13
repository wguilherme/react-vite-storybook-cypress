import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, Paper, Typography } from '@mui/material'
import Header from '../components/HeaderPage'
import { useQuery } from "@apollo/client";
import {INFO_PERSON} from "../queries";

export function Graphql() {
  const { loading, error, data } = useQuery(INFO_PERSON);


  if (loading) {
    return <p>Carregando dados graphql...</p>;
  }
  return (
    <>
      <Header title="GraphQL " />

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