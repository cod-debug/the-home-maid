import {Card, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import cake1 from '../assets/img/cake-2.jpg';
import cake4 from '../assets/img/cake-4.jpg';
import cakeCars from '../assets/img/cake-cars.jpg';
import cakeStrawberry from '../assets/img/cake-strawberry.jpg';
import StarRating from "./StarRating";

const Services = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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
            imgSrc: cake1,
            title: 'Mango Cake',
            description: `
                <p>size : 8x5</p>
            `
        },
        {
            imgSrc: cakeCars,
            title: 'Chocolate Cake',
            description: `
                <p>size : 6x4</p>
            `
        },
        {
            imgSrc: cake4,
            title: 'Strawberry Cake',
            description: `
                <p>size : 6x4</p>
            `
        },
        {
            imgSrc: cakeStrawberry,
            title: 'Strawberry Cake',
            description: `
                <p>size : 8x5</p>
            `
        }
    ];

    return (
        <>
            <section id="services" className="services pb-5">
                <Container>
                    <div className="services-bx py-5 shadow-1">
                        <h1>Cakes &amp; Cupcakes</h1>
                        <div className="p-4">
                            <p className="text-left">Cake Samples</p>
                            <Carousel responsive={responsive} className="service-slideshow">
                                {
                                    sliderItems.map((i, k) => (

                                        <div className="item" key={k}>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Img variant="top" src={i.imgSrc} />
                                                <Card.Body>
                                                    <Card.Title>{ i.title }</Card.Title>
                                                    <Card.Text>
                                                        <StarRating />
                                                        <div dangerouslySetInnerHTML={{__html: i.description }} ></div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Services;