import { Typography } from '@mui/material'
export default function HeaderPageComponent({ title }: any) {
  return (
    <Typography sx={{ mb: 3 }} variant="h4">{title || 'Page'}</Typography>
  )
}