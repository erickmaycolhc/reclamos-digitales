import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="main-footer text-center">
        <div className="container">
          <div className="row row-sm">
            <div className="col-md-12">
              <span>
                Copyright © 2022 <Link href="#">Spruha</Link>. Designed by{" "}
                <Link href="https://www.spruko.com/">Spruko</Link> All rights
                reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
