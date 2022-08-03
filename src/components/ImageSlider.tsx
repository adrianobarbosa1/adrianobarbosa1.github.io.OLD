import { Box, Image, Link, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
    return (
        <Carousel infiniteLoop showArrows={true} showThumbs={false}>
            {slides.map((card, index) => {
                return (
                    <div key={index}>
                        <Image key={`${index}+img`} src={card.img} alt={card.alt} />
                        <Text key={`${index}+txt`} className="legend">
                            <Link key={`${index}+link`} color='blue' href={card.link} isExternal>
                                {`${card.title}`}
                            </Link>
                            {`, ${card.txt}`}
                        </Text>
                    </div>
                )
            })}
        </Carousel>
    );
};

export default ImageSlider;