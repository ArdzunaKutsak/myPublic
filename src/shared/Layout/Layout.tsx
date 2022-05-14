import React from 'react';
import styles from './layout.css';

interface ILayOutProps {
  children?: React.ReactNode;
}

export function Layout( {children}: ILayOutProps) {
  
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
