import React from 'react';
import { Link } from 'gatsby';
import { Container, Theme } from '@material-ui/core';
import Layout from '../layouts/default';
import Image from '../components/image';
import SEO from '../components/seo';
import NavBar from '../layouts/default/navbar';

const IndexPage = () => (
  <Layout>
    <section style={{ paddingTop: 64, background: 'blue' }}>
      <NavBar />
      <Container>
        <SEO title="Home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Container>
    </section>
  </Layout>
);

export default IndexPage;
