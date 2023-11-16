
import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import cake1 from '../assets/img/cake-1.jpg';
import cake2 from '../assets/img/cake-2.jpg';
import cake3 from '../assets/img/cake-3.jpg';
import cake4 from '../assets/img/cake-4.jpg';
import cake5 from '../assets/img/cake-5.jpg';
import cake6 from '../assets/img/cake-6.jpg';

const Home = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    const sliderItems = [
        {
            name: "",
            imgSrc: cake1,
        },
        {
            name: "",
            imgSrc: cake2,
        },
        {
            name: "",
            imgSrc: cake3,
        },
        {
            name: "",
            imgSrc: cake4,
        },
        {
            name: "",
            imgSrc: cake5,
        },
        {
            name: "",
            imgSrc: cake6,
        },
    ];

    return(
        <>
        <section className="home" id="home">
            <Container className="content">
                <Row>
                    <Col md={6}>
                        <div className="flex-center-v">
                            <div>
                                <h1 className="tagline my-4">
                                    affordable 
                                    homemade
                                    cakes!</h1>
                                <p className="simple-txt my-4">Indulge in Elegance, Savor the Sweet Moments: Where Every Slice is a Celebration!</p>
                                <a href="https://www.facebook.com/eehmim" rel="noreferrer" target="_blank" className="inquire-btn">INQUIRE NOW!</a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="carousel-holder">
                            <Carousel responsive={responsive} infinite={true}>
                                { 
                                    sliderItems.map((i, k) => (
                                        <div className="item" key={k}>
                                            <div className="single-cake">
                                                <img src={i.imgSrc} className="cake" alt="cake" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave-1">
            <path fill="#DB9972" fillOpacity="1" d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,176C672,171,768,213,864,197.3C960,181,1056,107,1152,74.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
    </>
    )
}

export default Home;