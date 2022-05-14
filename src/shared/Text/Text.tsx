import React from 'react';
import styles from './text.css';
import  classNames  from 'classnames'
type TSizes = 28 | 20 | 16 | 14 | 12 | 10;

export enum EColor {
  black = 'black',
  orange = 'orange',
  green = 'green', 
  white = 'white', 
  grayF4 = 'grayF4', 
  grayF3 = 'grayF3', 
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',  
  gray99 = 'gray99', 
  gray66 = 'gray66', 
}

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p' ,
  children?: React.ReactNode,
  size: TSizes,
  mobileSize?: TSizes,
  tabletSize?: TSizes,
  desktopSize?: TSizes,
  color?: EColor,
}

export function Text(props:ITextProps) {

  const {As = 'span', color=EColor.black, children, size, mobileSize, tabletSize, desktopSize} = props

  const classes = classNames(
    styles[`s${size}`],
    styles[color],
    {[styles[`m${mobileSize}`]]: mobileSize},
    {[styles[`m${tabletSize}`]]: tabletSize},
    {[styles[`m${desktopSize}`]]: desktopSize},
    
  )
  return (
    <As className={classes}>
      {children}
    </As>
  );
}
