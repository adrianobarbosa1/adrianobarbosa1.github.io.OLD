import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Lazy, Autoplay } from "swiper"

import { Box, Image, Link, Text } from "@chakra-ui/react"
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSwiper = ({ slides }) => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={true}
      loop={true}
      lazy={true}
      modules={[Autoplay, Lazy, Navigation]}
      className="mySwiper"
    >
      {slides.map((card, index) => {
        return (
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            key={index}
          >
            <SwiperSlide key={index}>
              <Image
                key={`${index}+img`}
                src={card.img}
                alt={card.alt}
                border="1px solid gray"
                w={{ base: "320px" }}
              />
              <Text key={`${index}+txt`} className="legend">
                <Link
                  key={`${index}+link`}
                  color="blue"
                  href={card.link}
                  isExternal
                >
                  {`${card.title}`}
                </Link>
                {`, ${card.txt}`}
              </Text>
            </SwiperSlide>
          </Swiper>
        )
      })}
    </Swiper>
  )
}

export default ImageSwiper
