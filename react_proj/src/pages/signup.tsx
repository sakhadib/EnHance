import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'
import {
  Apple as AppleIcon,
  Facebook as FacebookIcon,
  GitHub,
  Google as GoogleIcon,
  Language as LanguageIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material'

export default function signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle login logic here
  }

  return (
    <>

    <Box sx={{ minHeight: '90vh', bgcolor: '#FFF' }}>
      <Container maxWidth="sm" sx={{ pt: 8, pb: 4 }}>
        <Box
          component="main"
          sx={{
            bgcolor: 'white',
            borderRadius: 4,
            p: 4,
            // boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom fontWeight="bold">
            SIGNUP
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" paragraph>
            Hey, create your account and start your journey with us
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <TextField
                fullWidth
                label="Enter Full Name"
                variant="outlined"
                value={fullName} // assuming you have a state variable for full name
                onChange={(e) => setFullName(e.target.value)} // assuming setFullName updates the fullName state
                sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              value={fullName}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Link href="#" underline="hover" sx={{ display: 'block', mt: 1, mb: 3 }}>
              Having trouble in sign in?
            </Link>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                bgcolor: '#FFD7BA',
                color: 'black',
                py: 1.5,
                '&:hover': {
                  bgcolor: '#FFc7AA',
                },
              }}
            >
              Sign in
            </Button>

            <Box sx={{ position: 'relative', my: 4 }}>
              <Divider>
                <Typography color="text.secondary" sx={{ px: 1 }}>
                  Or Sign up with
                </Typography>
              </Divider>
            </Box>

            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton sx={{ border: 1, borderColor: 'divider' }}>
                <GoogleIcon />
              </IconButton>
              <IconButton sx={{ border: 1, borderColor: 'divider' }}>
                <GitHub />
              </IconButton>
            </Stack>

            <Typography align="center" sx={{ mt: 3 }}>
              Already have an account?{' '}
              <Link href="/login" underline="hover" fontWeight="bold">
                Login
              </Link>
            </Typography>
          </Box>
        </Box>

        <Box component="footer" sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Copyright @sakhadib 2024 | <Link href="/policy" underline="hover">Privacy Policy</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
    </>
  )
}