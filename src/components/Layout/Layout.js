import React from 'react';
import Aus from '../../hoc/Aus';
import classes from './Layout.css'

const Layout = (props) => (
   <Aus>
      <div>Toolbar, sidebar, Backdop</div>
      <main className={classes.Content}>
         {props.children}
      </main>
   </Aus>
)

export default Layout;