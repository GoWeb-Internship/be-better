import * as React from 'react';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Price from '../components/Price';

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
      <Form />
      <Price />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
