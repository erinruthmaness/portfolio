import Nav from "components/layout/Nav";

import { types } from "models";

import styles from "styles/layout.module.css";

const Layout = ({ children }: { children: types.ReactChildren }) => (
  <div className={styles.window_container}>
    {children}
    <Nav />
  </div>
);

export default Layout;
