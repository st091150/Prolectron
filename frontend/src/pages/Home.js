import axios from "../axios";
import React, { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

<img src="https://cdn.citilink.ru/7q3vlyO6e_iqO_eNwmD5YFhUSIcF0Fmc3SYzH7DhT6w/fit/0/350/ce/false/plain/banners/nw_banner_1_13911_A_1671547422.jpg" />

const slides = [
    {url: "https://cdn.citilink.ru/7q3vlyO6e_iqO_eNwmD5YFhUSIcF0Fmc3SYzH7DhT6w/fit/0/350/ce/false/plain/banners/nw_banner_1_13911_A_1671547422.jpg", title: "img1"},
    {url: "https://img.freepik.com/free-vector/black-friday-sale-banner-with-limited-time-offer-details_1017-28051.jpg?w=2000", title: "img2"},
    {url: "https://static.vecteezy.com/system/resources/previews/002/773/687/original/special-offer-clearance-sale-banner-template-vector.jpg", title: "img3"},
];

const handleDragStart = (e) => e.preventDefault();
const banner_slides = slides.map((slide) => <img className="banner__carousel--image" src={slide.url} onDragStart={handleDragStart} />)

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0, 8);


    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        <div>
            <div className="banner__carousel--image mt-4"  style={{ position: "relative" }}>
            <Row>
                <Col>
                    <AliceCarousel mouseTracking items={banner_slides} autoPlay={true} autoPlayInterval={5000} infinite={true}  />
                </Col>
            </Row>
            </div>
            <div className="recent-products-container container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>

            <div className="featured-products-container container mt-4">
                <h2>Last products</h2>
                {/* last products here */}
                <div className="d-flex justify-content-center flex-wrap" style={{paddingBottom: "15px"}}>
                    {lastProducts.map((product) => (
                        <ProductPreview {...product}  />
                        
                    ))}
                </div>

            </div>
            <div>
                    <Link to="/category/all" style={{ textAlign: "center", display: "block" }}>
                        <Button>
                            Show All Products
                        </Button>
                    </Link>
            </div>                

        </div>
    );
}

export default Home;