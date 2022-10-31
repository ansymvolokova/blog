import {NavBar} from "./NavBar";
import React from "react";

type LayoutProps = {children: JSX.Element | JSX.Element[]}

export const Layout = ({ children }: LayoutProps) => {
  return(
    <>
      <NavBar/>
      {children}
    </>
  )
}