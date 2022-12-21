import { Outlet } from 'react-router-dom';
import StyledNavbar from '../components/StyledNavbar';
import React, { useEffect, useState } from "react";
const Home = () => {  
  return (
   <><StyledNavbar /><Outlet /></>
  );
};
export default Home;
