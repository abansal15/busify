import {useTheme, Box, Button, Grid, Typography, styled} from '@mui/material';
import bgimg from '../../assets/bgimg.png';
import bus from '../../assets/busIcon.svg';
import person from '../../assets/personIcon.svg';
import ticket from '../../assets/ticketIcon.svg';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Grid container direction="column" marginTop="2rem">
      <Grid item>
        <HeroContainer>
          <Typography
            variant="h2"
            color="white"
            fontSize={{xs: '2rem', md: '4rem'}}
            maxWidth={{xs: '90%', md: '50%'}}
            textAlign="center"
            fontWeight="700"
          >
            Effortless transportation for students.
          </Typography>
          <CTA
            variant="contained"
            color="primary"
            onClick={() => navigate('/bus-schedule')}
          >
            See Schedule
          </CTA>
        </HeroContainer>
        <Box marginBottom="4rem">
          <Typography
            variant="h2"
            color={theme.palette.secondary.main}
            fontWeight="700"
            margin="2rem 0"
            textAlign="center"
          >
            How to Book
          </Typography>
          <Grid container spacing={{xs: 4, md: 12}} padding={{md: '0 2rem'}}>
            <Grid item xs={12} md={4}>
              <Card>
                <img
                  src={bus}
                  alt="bus"
                  style={{
                    width: '132px',
                    height: '132px',
                  }}
                />
                <Typography variant="h4" fontWeight="600" marginTop="1rem">
                  Search for Bus
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <img
                  src={ticket}
                  alt="ticket"
                  style={{
                    width: '132px',
                    height: '132px',
                  }}
                />
                <Typography variant="h4" fontWeight="600" marginTop="1rem">
                  Add Tickets
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <img
                  src={person}
                  alt="payment"
                  style={{
                    width: '132px',
                    height: '132px',
                  }}
                />
                <Typography variant="h4" fontWeight="600" marginTop="1rem">
                  Do Payment
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const HeroContainer = styled(Box)({
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${bgimg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '55vh',
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 42,
  marginBottom: '4rem',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)',
});

const CTA = styled(Button)({
  marginTop: '2.5rem',
  borderRadius: 8,
  padding: '0.5rem 2.5rem',
  width: 'fit-content',
  fontSize: '1.2rem',

  '&:hover': {
    backgroundColor: '#FBBC05',
  },
});

const Card = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  justifyContent: 'center',
  gap: '1.5rem',
  alignItems: 'center',
  boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.2)',
  borderRadius: '15px',
  width: '100%',
  padding: '3rem 1rem',
});

export default Home;
