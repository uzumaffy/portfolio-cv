import React from 'react';

import Layout from '../components/Layout/Layout';
import CarouselTestimony from '../components/Testimony/CarouselTestimony';
import TestimonySectionTitle from '../components/Testimony/TestimonySectionTitle';

export default function Testimony() {
  return (
    <Layout>
      <TestimonySectionTitle/>
      <CarouselTestimony/>
      </Layout>
  )
}
