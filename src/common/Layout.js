import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Cheesy_kitchen | Restaurant-Website.",
  description: "Find the trendy foods",
  keywords: "foods, cheesy, kitchen",
};
