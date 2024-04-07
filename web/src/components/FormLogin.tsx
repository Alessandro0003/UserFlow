import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import '../index.css'

export function FormLogin() {
  return (
    <Box position="absolute" right={0}>
      <Card
        sx={{ width: 400, height: '100vh', backgroundColor: 'var(--zinc-800)' }}
      >
        <Typography
          variant="h4"
          color="white"
          textAlign="center"
          marginTop={10}
        >
          Login Up
        </Typography>
      </Card>
    </Box>
  )
}
