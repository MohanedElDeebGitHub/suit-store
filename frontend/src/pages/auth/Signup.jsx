import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, TextField, Button, Checkbox, Link, IconButton, Paper, InputAdornment, Stack } from '@mui/material';
import CustomButton from '../../components/CustomButton'; // Assuming CustomButton.jsx is in src/components/

// Icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter'; // Assuming X is Twitter for icon purposes

// Overall Page Container - References ![image3](image3) (the entire page layout)
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f4f6f8', // Light grey background for the page
  padding: theme.spacing(3),
}));

// Main Card for the login form and promo - References ![image3](image3) (the white rounded card)
const MainCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  borderRadius: '20px',
  overflow: 'hidden',
  maxWidth: '1200px',
  width: '100%',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
}));

// Left Promotional Panel - References ![image3](image3) (left side with "Men's & Women Style Event")
const PromoPanel = styled(Box)(({ theme }) => ({
  flex: 1.2, // Takes up a bit more space than the form
  padding: theme.spacing(5),
  backgroundColor: '#1a1a1a', // Dark background for promo
  color: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative', // For positioning elements like the "BUY NOW" button if needed
  // Placeholder for the background image/collage - References ![image3](image3) (the image collage on the left)
  // In a real app, you'd use an img tag or background-image CSS property here.
  // For simplicity, we'll just use a dark background.
}));

const StoreLogo = styled(Typography)(({ theme }) => ({
  // References ![image3](image3) (the "EVOO STORE" logo)
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: '#e0e0e0', // Light grey, adjust as per actual logo color
  letterSpacing: '1px',
  marginBottom: theme.spacing(4),
}));

const PromoContent = styled(Box)({
  // References ![image3](image3) (the "Men's & Women Style Event" text block)
  textAlign: 'left',
});

const PromoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '3.5rem',
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
}));

const PromoSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#bdbdbd', // Lighter text color
  marginBottom: theme.spacing(4),
}));

const BuyNowButton = styled(Button)(({ theme }) => ({
  // References ![image3](image3) (the "BUY NOW" button)
  backgroundColor: '#fff',
  color: '#000',
  fontWeight: 'bold',
  padding: theme.spacing(1.5, 4),
  borderRadius: '4px',
  fontSize: '1rem',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
  // This is a simplified version. The image shows a more complex graphic layout for "BUY NOW".
}));


// Right Login Form Panel - References ![image3](image3) (the right side with the login form)
const LoginFormPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(5, 6),
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
}));

const TopNavButtons = styled(Box)(({ theme }) => ({
  // References ![image3](image3) (the "Log in" and "Sign up" buttons at the top right)
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(4),
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  // References ![image3](image3) (the "Welcome Back" title)
  fontWeight: 'bold',
  fontSize: '2rem',
  marginBottom: theme.spacing(1),
  color: '#333',
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  // References ![image3](image3) (the text below "Welcome Back")
  fontSize: '0.9rem',
  color: '#757575',
  marginBottom: theme.spacing(4),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  // References ![image3](image3) (the Email and Password input fields)
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#f5f5f5', // Light beige/grey background for inputs
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.grey[400],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.grey[600],
  },
}));

const RememberForgotRow = styled(Box)(({ theme }) => ({
  // References ![image3](image3) (the row with "Remember me" and "Forgot Password?")
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const RememberMeLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.grey[700],
}));

const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  // References ![image3](image3) (the "Forgot Password?" link)
  fontSize: '0.875rem',
  color: theme.palette.grey[600],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialLoginContainer = styled(Box)(({ theme }) => ({
  // References ![image3](image3) (the "or you can join with" and social icons section)
  textAlign: 'center',
  marginTop: theme.spacing(3),
}));

const SocialLoginText = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.grey[600],
  marginBottom: theme.spacing(2),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  // References ![image3](image3) (the circular social media icons: Facebook, Google, X)
  margin: theme.spacing(0, 1),
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));


export default function EvooLoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <PageContainer>
      <MainCard>
        {/* Left Promotional Panel - Corresponds to the left part of ![image3](image3) */}
        <PromoPanel>
          <Box>
            <StoreLogo>EVOO STORE</StoreLogo>
            <PromoContent>
              <PromoTitle>Men's & Women Style Event</PromoTitle>
              <PromoSubtitle>
                Gear up, gentlemen. Fashion deals made for you!
              </PromoSubtitle>
            </PromoContent>
          </Box>
          {/* The "BUY NOW" button is more complex graphically in the image. This is a simplified version. */}
          {/* References ![image3](image3) (the "BUY NOW" button section) */}
          <BuyNowButton>BUY NOW</BuyNowButton>
        </PromoPanel>

        {/* Right Login Form Panel - Corresponds to the right part of ![image3](image3) */}
        <LoginFormPanel>
          <TopNavButtons>
            {/* Using CustomButton from previous example */}
            {/* References ![image3](image3) (the "Log in" and "Sign up" buttons at top right) */}
            <CustomButton variantType="contained" style={{ marginRight: '8px' }}>Log in</CustomButton>
            <CustomButton variantType="outlined">Sign up</CustomButton>
          </TopNavButtons>

          <FormTitle>Welcome Back</FormTitle>
          <FormSubtitle>
            To keep connected with us please login with your personal information by email address and password
          </FormSubtitle>

          {/* Email Input - References ![image3](image3) (Email field) */}
          <StyledTextField
            fullWidth
            label="Email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          {/* Password Input - References ![image3](image3) (Password field) */}
          <StyledTextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <VisibilityOutlinedIcon color="action"/>
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <RememberForgotRow>
            <Stack direction="row" alignItems="center">
              {/* References ![image3](image3) ("Remember me" checkbox) */}
              <Checkbox size="small" sx={{ paddingLeft: 0 }} />
              <RememberMeLabel>Remember me</RememberMeLabel>
            </Stack>
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </RememberForgotRow>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
            {/* References ![image3](image3) (the main "Log in" button and "Create account" link) */}
            <CustomButton variantType="contained" fullWidth>Log in</CustomButton>
            <Link component="button" variant="body2" sx={{ whiteSpace: 'nowrap', color: 'black', fontWeight:'medium', textDecoration:'none', '&:hover': {textDecoration:'underline'} }}>
              Create account
            </Link>
          </Stack>

          <SocialLoginContainer>
            <SocialLoginText>or you can join with</SocialLoginText>
            <Stack direction="row" justifyContent="center" spacing={2}>
              {/* References ![image3](image3) (Social login icons: Facebook, Google, X) */}
              <SocialIconButton aria-label="login with facebook">
                <FacebookIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="login with google">
                <GoogleIcon />
              </SocialIconButton>
              <SocialIconButton aria-label="login with x/twitter">
                <TwitterIcon />
              </SocialIconButton>
            </Stack>
          </SocialLoginContainer>
        </LoginFormPanel>
      </MainCard>
    </PageContainer>
  );
}
