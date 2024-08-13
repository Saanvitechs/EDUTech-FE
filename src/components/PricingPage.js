import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CardHeader } from '@mui/material';

const PricingPage = () => {
  const pricingPlans = [
    {
      title: 'Basic <br />Package',
      price: 499,
      features: ['3 Hours of Consulting', 'Email Support', 'Basic Report'],
      buttonText: 'Get Started',
      color: 'linear-gradient(135deg, #E0F7FA, #80DEEA)', // Teal gradient
      buttonColor: '#007bff',
    },
    {
      title: 'Standard Package',
      price: 999,
      features: ['5 Hours of Consulting', 'Email and Phone Support', 'Detailed Report'],
      buttonText: 'Get Started',
      color: 'linear-gradient(135deg, #FFF3E0, #FFE0B2)', // Beige gradient
      buttonColor: '#ff9800',
    },
    {
      title: 'Professional Package',
      price: 1499,
      features: ['8 Hours of Consulting', 'Email, Phone, and Chat Support', 'Detailed Report with Recommendations'],
      buttonText: 'Get Started',
      isFeatured: true,
      color: 'linear-gradient(135deg, #EDE7F6, #D1C4E9)', // Purple gradient
      buttonColor: '#6f42c1',
    },
    {
      title: 'Enterprise Package',
      price: 1600,
      features: ['12 Hours of Consulting', 'Email, Phone, and Chat Support', 'Detailed Report with In-depth Analysis'],
      buttonText: 'Get Started',
      color: 'linear-gradient(135deg, #E3F2FD, #90CAF9)', // Dark Blue gradient
      buttonColor: '#3f51b5',
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '150px' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ fontWeight: 700, marginBottom: '50px' }}
      >
        Consulting Packages & Pricing
      </Typography>
      <Grid container spacing={10} justifyContent="center">
        {pricingPlans.map((plan, index) => (
          <Grid
            item
            xs={12}          // Full width on extra-small screens (mobile)
            sm={6}           // Half width on small screens (tablets)
            md={3}           // One-quarter width on medium screens and up (desktops)
            key={index}
            style={{ display: 'flex' }}
          >
            <Card
              style={{
                background: plan.color,
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Ensures content is evenly distributed
                height: '100%',  // Make all cards the same height
                borderRadius: '15px',
                boxShadow: plan.isFeatured
                  ? '0 15px 30px rgba(0, 0, 0, 0.3)'
                  : '0 10px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.25)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <CardHeader
                title={<span dangerouslySetInnerHTML={{ __html: plan.title }} />}  // Render title with line break
                titleTypographyProps={{ align: 'center', fontWeight: 600 }}
                style={{ backgroundColor: '#f5f5f5', borderRadius: '15px 15px 0 0' }}
              />
              <CardContent style={{ flexGrow: 1 }}>
                <Typography
                  component="h2"
                  variant="h4"
                  align="center"
                  color="textPrimary"
                  style={{ fontWeight: 700 }}
                >
                  ${plan.price}
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
                  /month
                </Typography>
                <ul style={{ paddingLeft: '20px', listStyle: 'disc', margin: 0 }}>
                  {plan.features.map((feature, idx) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="left"
                      key={idx}
                      style={{ marginBottom: '10px' }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <Button
                fullWidth
                variant="contained"
                style={{
                  backgroundColor: plan.buttonColor,
                  color: '#fff',
                  marginTop: '20px',
                  borderRadius: '0 0 15px 15px',
                  padding: '12px',
                  fontWeight: 600,
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = plan.buttonColor)}
              >
                {plan.buttonText}
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PricingPage;
