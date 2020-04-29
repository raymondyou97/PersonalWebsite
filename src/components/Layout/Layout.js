// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage? :string
};

const Layout = ({ children, title }: Props) => {
  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
