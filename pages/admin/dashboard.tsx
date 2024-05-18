import React from "react";
import AdminLayout from "../../components/layouts/AdminLayout";
import PageHeader from "../../components/shared/layout-component/page-header/page-header";

// images
import work3 from "../../public/images/pngs/work3.PNG";
import work from "../../public/images/pngs/work.png";

export default function Dashboard() {
  return (
    <AdminLayout>
      <PageHeader
        title="Welcome To Dashboard"
        item="Home"
        active_item="Project Dashboard"
      />
      <div className="row row-sm">
        <div className="col-sm-12 col-lg-12 col-xl-8">
          <div className="row row-sm  mt-lg-4">
            <div className="col-sm-12 col-lg-12 col-xl-12">
              <div className="card bg-primary custom-card card-box">
                <div className="card-body p-4">
                  <div className="row align-items-center">
                    <div className="offset-xl-3 offset-sm-6 col-xl-8 col-sm-6 col-12 img-bg ">
                      <h4 className="d-flex  mb-3">
                        <span className="font-weight-bold text-white ">
                          Sonia Taylor!
                        </span>
                      </h4>
                      <p className="tx-white-7 mb-1">
                        You have two projects to finish, you had completed{" "}
                        <b className="text-warning">57%</b> from your montly
                        level, Keep going to your level
                      </p>
                    </div>
                    <img src={work3.src} alt="user-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
