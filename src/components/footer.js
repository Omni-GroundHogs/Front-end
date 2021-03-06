import { Col, Container, Row } from "react-bootstrap"
import React from "react"

// import styled from "@emotion/styled"

const Footer = ({ children }) => {
  // const Logo = styled.img`
  //   max-width: 200px;
  // `

  return (
      <Container fluid="sm">
        <Row className="justify-content-end py-4">
          <Col className="center-content text-md-center text-lg-left" lg={4} sm={12}>
          </Col>
          <Col className="center-content text-center" lg={4} sm={12}>
            &#169; Gogo Groundhogs {new Date().getFullYear()}
          </Col>
          <Col className="center-content text-center" lg={4} sm={12}>
          </Col>
        </Row>
      </Container>
  )
}

export default Footer;
