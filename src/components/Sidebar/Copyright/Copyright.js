// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';
import coffeeImg from './tea.png'

const Copyright = () => (
  <div className={styles['copyright']}>
    Made with <a href="https://www.gatsbyjs.org/">Gatsby.js</a> and 
    <img src={coffeeImg} style={
      {
        display: "inline-block",
        position: "absolute",
        width: "18px",
        height: "auto",
        paddingLeft: "5px"
      }}/>
  </div>
);

export default Copyright;