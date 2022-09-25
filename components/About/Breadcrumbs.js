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
              <Link href="/" className="fables-breadcrumbs-text-color">
                Trang chủ
              </Link>
            </li>
            <li className="breadcrumb-item active">Về Genex</li>
          </ol>
        </nav>
      </div>
    </Container>
  );
};

export default Breadcrumbs;
