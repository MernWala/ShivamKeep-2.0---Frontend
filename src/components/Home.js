import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";

const Home = (props) => {
  return (
    <>
      <Addnote alert={props.alert} />
      <Notes alert={props.alert} />
    </>
  )
}

export default Home
