import { Col, Row } from "react-bootstrap"
import React from "react"

import RasterImg from "./raster-img"

import styled from "@emotion/styled"

const ImgSection = ({ markdown, img, useImgTag = false, children }) => {
  const Markdown = markdown;

  let Image = styled(RasterImg)`
    height: auto;
    width: 100%;
  `

  if (useImgTag) {
    Image = styled.img`
     height: auto;
     width: 100%;
   `
 }

  const StyledRow = styled(Row)`

  `;


  return (
    <StyledRow className="sub-block justify-content-center pb-4" >
      <Col lg={5}>
        <Markdown />
      </Col>
      <Col lg={6} className="d-flex flex-column justify-content-center offset-lg-1 mt-3">
        <Image src={img} alt={img} />
      </Col>
    </StyledRow>
  )
}

export default ImgSection;