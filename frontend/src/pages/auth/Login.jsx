import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, TextField, Button, Checkbox, Link, IconButton, Paper, InputAdornment, Stack } from '@mui/material';
import CustomButton from '../../components/CustomButton';

// Icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

// Outer container for the whole page - Ensures true centering horizontally and vertically
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f4f6f8',
  padding: theme.spacing(3),
  boxSizing: 'border-box',
}));

// Main card is centered and more balanced in width
const MainCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  borderRadius: '28px',
  overflow: 'hidden',
  maxWidth: '950px', // Reduced for better visual balance
  width: '100%',
  boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
}));

// Both panels now have equal flex for true centering
const PromoPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  padding: 0,
  background: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  minHeight: 600,
}));

const PromoImageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(90deg, #191919 55%, #ededed 100%)',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  minHeight: 600,
  alignItems: 'stretch',
  justifyContent: 'center',
}));

const PromoTextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '32%',
  left: '7%',
  zIndex: 2,
  background: 'rgba(255,255,255,0.85)',
  borderRadius: '8px',
  padding: theme.spacing(2.5, 3.5),
  maxWidth: 350,
}));

const PromoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2.5rem',
  color: '#191919',
  marginBottom: theme.spacing(1),
  lineHeight: 1.1,
}));

const PromoSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  color: '#3c3c3c',
  marginBottom: theme.spacing(0.5),
}));

const PromoTagline = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  color: '#4d4d4d',
}));

const BuyNowButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: '7%',
  bottom: '11%',
  backgroundColor: '#fff',
  color: '#000',
  fontWeight: 'bold',
  padding: theme.spacing(1.2, 3.5),
  borderRadius: '4px',
  fontSize: '1rem',
  boxShadow: '0px 2px 8px rgba(0,0,0,0.13)',
  border: '2px solid #fff',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const LoginFormPanel = styled(Box)(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  padding: theme.spacing(5, 4),
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 600,
  justifyContent: 'center',
}));

const TopNavButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: theme.spacing(4),
}));

const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '2rem',
  marginBottom: theme.spacing(1),
  color: '#222',
}));

const FormSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '0.98rem',
  color: '#555',
  marginBottom: theme.spacing(4),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    backgroundColor: '#ede6d8',
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
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

const RememberMeLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.93rem',
  color: theme.palette.grey[700],
}));

const ForgotPasswordLink = styled(Link)(({ theme }) => ({
  fontSize: '0.92rem',
  color: theme.palette.grey[600],
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const SocialLoginContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(3),
}));

const SocialLoginText = styled(Typography)(({ theme }) => ({
  fontSize: '0.93rem',
  color: theme.palette.grey[600],
  marginBottom: theme.spacing(2),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.grey[700],
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function EvooSignInPage() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <PageContainer>
      <MainCard>
        {/* Left Promotional Panel */}
        <PromoPanel>
          <PromoImageBox>
            {/* Insert images and overlays here as needed */}
            <PromoTextOverlay>
              <PromoTitle>Men's & Women<br />Style Event</PromoTitle>
              <PromoSubtitle>
                Gear up, gentlemen.
              </PromoSubtitle>
              <PromoTagline>
                Fashion deals made for you!
              </PromoTagline>
            </PromoTextOverlay>
            <BuyNowButton>BUY NOW</BuyNowButton>
          </PromoImageBox>
        </PromoPanel>

        {/* Right Login Form Panel */}
        <LoginFormPanel>
          <TopNavButtons>
            <CustomButton variantType="contained" style={{ marginRight: '12px' }}>
              Log in
            </CustomButton>
            <CustomButton variantType="outlined">
              Sign up
            </CustomButton>
          </TopNavButtons>

          <FormTitle>Welcome Back</FormTitle>
          <FormSubtitle>
            To keep connected with us please login with your personal information by email address and password
          </FormSubtitle>

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
              <Checkbox size="small" sx={{ paddingLeft: 0 }} />
              <RememberMeLabel>Remember me</RememberMeLabel>
            </Stack>
            <ForgotPasswordLink href="#">Forgot Password?</ForgotPasswordLink>
          </RememberForgotRow>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ marginBottom: 3 }}>
            <CustomButton variantType="contained" fullWidth>Log in</CustomButton>
            <Link
              component="button"
              variant="body2"
              sx={{
                whiteSpace: 'nowrap',
                color: 'black',
                fontWeight: 500,
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Create account
            </Link>
          </Stack>

          <SocialLoginContainer>
            <SocialLoginText>or you can join with</SocialLoginText>
            <Stack direction="row" justifyContent="center" spacing={2}>
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