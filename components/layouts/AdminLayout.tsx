import React, { useEffect } from "react";
import Header from "../shared/layout-component/header/header";
import SideBar from "../shared/layout-component/sidebar/sidebar";
import Footer from "../shared/layout-component/footer/footer";
import TabToTop from "../shared/layout-component/tab-to-top/tab-to-top";

type AdminLayoutProps = {
  children: React.ReactNode;
};
export default function AdminLayout({ children }: AdminLayoutProps) {
  useEffect(() => {
    document.body.classList.add("main-body");
    document.body.classList.add("leftmenu");
    document.body.classList.add("ltr");
  }, []);

  return (
    <div className="horizontalMenucontainer">
      <div className="page">
        <Header />
        <SideBar />
        <div className="main-content side-content pt-0">
          <div className="main-container container-fluid">
            <div className="inner-body">{children}</div>
          </div>
        </div>
      </div>
      <TabToTop />
      <Footer />
    </div>
  );
}
