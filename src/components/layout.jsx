import React from "react";
import Main from './main'
import Footer from './footer'
import Header from './header'
import BookForm from './form';

function Layout() {
  return (
    <>
      <Header />
      <Main />
      <BookForm />
      <Footer />
    </>
  )
}

export default Layout;