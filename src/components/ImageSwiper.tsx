import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Navigation, Lazy, Autoplay, Pagination } from "swiper"

import { Box, Image, Link, Text } from "@chakra-ui/react"
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
}

const ImageSwiper = ({ slides }) => {
  return (
    <Swiper
      // breakpoints={{
      //   360: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      //   480: {
      //     slidesPerView: 2,
      //     spaceBetween: 30,
      //   },
      //   640: {
      //     slidesPerView: 3,
      //     spaceBetween: 40,
      //   },
      //   1000: {
      //     slidesPerView: 4,
      //     spaceBetween: 50,
      //   },
      //   1300: {
      //     slidesPerView: 5,
      //     spaceBetween: 200,
      //   },
      // }}
      slidesPerView={5}
      spaceBetween={200}
      centeredSlides={true}
      roundLengths={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      grabCursor={true}
      loop={true}
      lazy={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      {slides.map((card, index) => {
        return (
          <SwiperSlide key={index}>
            <Box>
              <Box
                m="0 auto"
                border="2px solid gray"
                w={["280px", "320px", "320px"]}
                h={["184px", "211px", "211px"]}
              >
                <Link
                  key={`${index}+link`}
                  color="blue"
                  href={card.link}
                  isExternal
                >
                  <Box>
                    <Image
                      key={`${index}+img`}
                      src={card.img}
                      alt={card.alt}
                      cursor="pointer"
                    />
                  </Box>
                </Link>
              </Box>
              <Text
                key={`${index}+txt`}
                className="legend"
                ml={["50px", "30px", "10px"]}
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
            </Box>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default ImageSwiper
