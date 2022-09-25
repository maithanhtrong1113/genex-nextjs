import Link from "next/link";
import React from "react";
import { Container, Nav } from "reactstrap";

const Breadcrumbs = () => {
  return (
    <Container fluid className="fables-light-gary-background">
      <div className="container">
        <nav>
          <ol className="fables-breadcrumb breadcrumb px-0 py-3">
            <li className="breadcrumb-item">
              <Link href="/">
                <a className="fables-breadcrumbs-text-color">Trang chủ</a>
              </Link>
            </li>
            <li className="breadcrumb-item active">Blockchain Explorer Scan</li>
          </ol>
        </nav>
      </div>
    </Container>
  );
};

export default Breadcrumbs;
