import React from 'react';

import Layout from '../components/Layout/Layout';
import CarouselTestimony from '../components/Testimony/CarouselTestimony';
import TestimonySectionTitle from '../components/Testimony/TestimonySectionTitle';

export default function Testimony() {
  return (
    <Layout className="bg-[#f5f0f0]">
      <TestimonySectionTitle />
      <CarouselTestimony />
    </Layout>
  );
}
