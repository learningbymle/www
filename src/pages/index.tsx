import React from 'react';
import {
  Grid,
  Typography,
  Slide,
  Paper,
  useScrollTrigger,
  InputBase,
} from '@material-ui/core';
import Layout from '../layouts/default';
import LandingPageSection from '../layouts/default/section';
import SEO from '../components/seo';
import NavBar from '../layouts/default/navbar';
import SubscribeInput from '../components/subscribe-input';

const IndexPage = () => {
  const [sectionOneRef, setSectionOneRef] = React.useState(undefined);

  const sectionOneTriggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: sectionOneRef,
  });

  return (
    <Layout>
      <SEO title="Home" />

      <LandingPageSection
        ref={ref => setSectionOneRef(ref)}
        before={<NavBar />}
        style={{
          background: 'url(/img/home/girl-reading-1.jpg) no-repeat center',
          backgroundSize: '100%',
        }}
      >
        <Grid container justify="flex-end">
          <Grid item md={7} xs={12}>
            <Slide direction="up" in timeout={500} mountOnEnter unmountOnExit>
              <Paper elevation={8} style={{ padding: 30, opacity: 0.9 }}>
                <Typography variant="h1">Learning by MLE</Typography>
                <Typography variant="body2" style={{ marginTop: 15 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nullam non nisi est sit amet facilisis magna. A condimentum
                  vitae sapien pellentesque habitant morbi tristique senectus.
                </Typography>

                <SubscribeInput style={{ marginTop: 30 }} />
              </Paper>
            </Slide>
          </Grid>
        </Grid>
      </LandingPageSection>

      <LandingPageSection>
        <Grid container justify="space-evenly">
          <Grid item></Grid>
          <Grid item>Test</Grid>
          <Grid item>Test</Grid>
        </Grid>
      </LandingPageSection>
    </Layout>
  );
};

export default IndexPage;
