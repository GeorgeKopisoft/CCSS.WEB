import React, { Fragment } from 'react';
import Layout from './components/shared/Layout';

function App(props) {

  return (
    <Fragment>
      <Layout>
          {props.children}
      </Layout>
    </Fragment>
  );
}

export default App;
