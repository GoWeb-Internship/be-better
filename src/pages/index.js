import * as React from 'react';
import { Link } from 'gatsby';
import 'react-phone-input-2/lib/style.css';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Price from '../components/Price';
import Social from '../components/Social';

const IndexPage = () => {
  return (
    <Layout>
      <main className="container text-center mt-4 ">
        <h1 className="">Congratulations</h1>
        <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
        <Form />
        <Price />
        <div>
          <Link to="/pk">Политика конфеденциальности</Link>
        </div>
        <div>
          <Link to="/oferta">Публичная оферта</Link>
        </div>
        <Social />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
