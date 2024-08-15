import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import '../App.css'
import Banner from "../Components/Banner/Banner";
import RowPost from "../Components/RowPost/RowPost";
import {originals,action,comedy,horror,romance} from '../urls'

const Page = () => {
  return (
    <div className="">
    {/* <SignInPage/> */}
    <Navbar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedy} title='Comedy' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={romance} title='Romance' isSmall/>
  </div>
  )
}

export default Page