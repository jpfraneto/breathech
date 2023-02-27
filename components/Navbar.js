import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import AiOutlineInstagram from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
      <div className={styles.navTop}>
        <div className={styles.leftNavTop}></div>
        <div className={styles.rightNavTop}>
          <p>From 🇨🇱 with ♡ | +569 85491126 | jpfraneto@gmail.com</p>
        </div>
      </div>
      <div className={styles.navContainer}>
        <div>Jorge Pablo Franetovic Stocker</div>
        <div className={styles.linksContainer}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/breathwork'>Breathwork</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
