import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Lazy, Autoplay, Pagination } from "swiper"

import { Box, Image, Link, Text } from "@chakra-ui/react"
// import "react-responsive-carousel/lib/styles/carousel.min.css";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
}

const ImageSwiper = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={200}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      loop={true}
      lazy={true}
      modules={[Autoplay, Lazy, Navigation, Pagination]}
      className="mySwiper"
    >
      {slides.map((card, index) => {
        return (
          <SwiperSlide key={index}>
            <Box w="320px" h="211px" border="1px solid gray">
              <Link
                key={`${index}+link`}
                color="blue"
                href={card.link}
                isExternal
              >
                <Image
                  key={`${index}+img`}
                  src={card.img}
                  alt={card.alt}
                  cursor="pointer"
                />
              </Link>
            </Box>
            <Text
              key={`${index}+txt`}
              className="legend"
              ml="10px"
              mt="10px"
              mb="30px"
            >
              <Link
                key={`${index}+link`}
                color="blue"
                href={card.link}
                isExternal
              >
                {`${card.title}`}
              </Link>
            </Text>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ImageSwiper
