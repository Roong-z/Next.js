import NavBar from '../components/NavBar';
import Head from 'next/head';
import React from 'react';
import Seo from '../components/Seo';

export default function About() {
  return (
    <div>
      <Seo title="About" />
      <h2>About us!</h2>
    </div>
  );
}
