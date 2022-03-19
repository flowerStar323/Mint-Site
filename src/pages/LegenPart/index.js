import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import {
  LegenOut, LegenPart, LegenTitle, LegenImg, LegenItem, LegenName,
} from "./legen.style";
import "./swiper.style.css";
const LengeContainer = () => {
  return (
    <>
      <LegenOut>
        <LegenPart>
          <LegenTitle>Legendary Bunnies</LegenTitle>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
            <SwiperSlide>
              <LegenItem>
                <LegenImg src='img/image-NFT.png' alt='' />
                <LegenName>Easter Bunny</LegenName>
              </LegenItem>
            </SwiperSlide>
          </Swiper>
        </LegenPart>
      </LegenOut>
    </>
  );
};
export default LengeContainer;
