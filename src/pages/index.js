import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Price from '../components/Price';

const IndexPage = () => {
  return (
    <Layout>
      <main className="container text-center mt-4 ">
        <h1 className="">Congratulations</h1>
        <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
        <Form />
        <Price />
        <Link to="/pk">Политика конфеденциальности</Link>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
