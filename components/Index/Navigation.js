import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Link from "next/link";

function Navigation() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [bg, setbg] = useState("navbarHome ");
  const [text, setText] = useState("fw-bold");
  const [url, setUrl] = useState("/images/logo/logo-genexwifi-flatform.png");
  useEffect(() => {
    const listenToScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (winScroll < 250) {
        setbg("navbarHome ");
        setText("fw-bold ");
        setUrl("/images/logo/logo-genexwifi-flatform.png");
      } else {
        setbg("navbarHome1 shadow ");
        // setText("text-white fw-bold");
        // setUrl("/images/logo/logo-genexwifi-flatform-footer.png");
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <Navbar expand={"lg"} container={true} fixed="top" className={bg}>
      <motion.div className="progress-barr" style={{ scaleX }} />
      <Link href="/">
        <NavbarBrand className="pointer">
          <img alt="logo" src={url} />
        </NavbarBrand>
      </Link>

      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto " navbar>
          <NavItem>
            <Link href="/">
              <NavLink href="/" className={text}>
                Trang Chủ
              </NavLink>
            </Link>
          </NavItem>
          <UncontrolledDropdown nav>
            <DropdownToggle caret nav className={text}>
              Sản Phẩm
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link href="/product"> Phần mềm Wifi Marketing</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/wifiPlaform"> Wifi Marketing Exchange</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/blockChainLayer1"> Blockchain Layer 1</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/blockchainExplorerScan">
                  Blockchain Explorer Scan
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/wallet">Blockchain Wallet</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/decentralizedExchange">
                  Decentralized Exchange
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/defiDapp">Defi DApp</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/centralizedExchange">Centralized Exchange</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/cryptoPaymentGateway">Crypto Payment Gateway</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/ecommerce">Ecommerce DApp</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className={text}>
              Giải Pháp
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link href="/wifiMarketing">
                  Giải pháp Wifi Marketing cho Doanh Nghiệp
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/updating">Giải pháp Defi</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/updating">Giải pháp thanh toán qua Crypto</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/updating"> Giải pháp Blockchain theo yêu cầu</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className={text}>
              Case Study
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link href="/partner">Wifi Marketing</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="/caseStudyBlockchain">Blockchain</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className={text}>
              Documentation
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link href="/">Tài liệu Wifi Marketing Tích Hợp Các Hãng</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <Link href="/about">
              <NavLink href="/about" className={text}>
                Về GENEX
              </NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Navigation;
