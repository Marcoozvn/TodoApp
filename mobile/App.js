import React, { useState } from 'react';
import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';
import AppContainer from './src/navigation/index';

export default function App() {
  
  return (
    <>
      <GeneralStatusBarColor barStyle="light-content" backgroundColor="#7159c1"/>
      <AppContainer />
    </>
  )
}