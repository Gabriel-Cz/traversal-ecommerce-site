import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productsActions';
import CarouselCards from '../components/CarouselCards'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { SeeMoreButton } from '../components/ProductsLinks'
import data from '../public/productsData.json'
import styles from '../styles/FirstSection.module.scss'

const MoreInfo = () => {
    return(
        <>
        <div className={styles.moreInfoContainer}>
          <Image className={styles.img} src="EllipseBlue.png" />
          <div className={styles.moreInfoWrapper}>
              <p>Find Out why traversal is one of the Jewellery Market Leads around the world. </p>
              <SeeMoreButton></SeeMoreButton>
          </div>
        </div>
        </>
    );
}

export default function FirstSection() {
    const {products} = useSelector(state => state.productsReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);
    const filteredProducts = products.filter(item => item.state === 'dealOffer');
    return(

        <>
          <Container fluid className={styles.customContainer}>
              <Row className="justify-content-md-center pb-5">
                  <Col xs={12} sm={5} md={7} lg={6} xl={6} xxl={5} className=" mt-5">
                      <MoreInfo></MoreInfo>
                  </Col>
                  <Col xs={12} sm={7} md={5} lg={6} xl={4} xxl={3}>
                      <div className={styles.carouselWrappers}>
                          <div className={styles.ribbon}>
                              Ultimate Deals
                              <i></i>
                              <i></i>
                              <i></i>
                              <i></i>
                          </div>
                          <CarouselCards carouselItems={filteredProducts}></CarouselCards>
                      </div>
                  </Col>
              </Row>
          </Container>
        </>
    )
}