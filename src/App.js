/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import data from './data';
import VideoList from './components/VideoList';

export default function App() {
  const [list, setList] = useState(data);

  return <VideoList list={list} />;
}
