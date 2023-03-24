import React from 'react';
import { Layout, SEO, Container } from '@components/common';
import { PageWrapper } from '@/styles/404';

export default () => (
  <Layout>
    <PageWrapper>
      <SEO title="404: Not found" location="/404" />
      <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Container>
    </PageWrapper>
  </Layout>
);
