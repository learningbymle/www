/**
 * A wrapper component that supercedes all pages. Served by the gatsby plugin, `gatsby-plugin-layout`:
 * @see https://www.gatsbyjs.org/packages/gatsby-plugin-layout/
 */

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import SEO from './components/seo';
import theme from './theme';

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    {children}
    <CssBaseline />
  </ThemeProvider>
);
