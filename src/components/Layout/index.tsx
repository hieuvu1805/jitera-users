import { ReactNode } from 'react';
import { Layout } from 'antd';

type LayoutComponentProps = {
  children: ReactNode;
};

const LayoutComponent = ({ children }: LayoutComponentProps): JSX.Element => {
  return (
    <Layout className="app">
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer>copyright © {new Date().getFullYear()}</Layout.Footer>
    </Layout>
  );
};

export default LayoutComponent;
