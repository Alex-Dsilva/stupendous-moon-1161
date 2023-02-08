import React from "react";
import "./Homepage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Swiper_One from "./Swiper_one";

const Homepage = () => {
  return (
    <div className="Homepage">
      {/* Deals of The Day */}
      <div className="deal">
        <div className="deal_1">
          <div>
            <Swiper_One />
          </div>
          <div>
            <div className="deal_1_5">
             <h2>Deal Of The Day</h2> 
              <div className="deal_2">
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2022-09-22/KZ-ZS10-Pro-X-Wired-Earphone-517156-0._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2020-11-02/rg351p-anbernic-retro-game-console-black-1604318839608._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2018-10-22/kingston-a400-ssd-480gb-sata-3-2-5-inch-solid-state-drive-dark-gray-1571984759547._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "1rem" }} className="deal_1_5">
               <h2>Featured Products</h2>
              <div className="deal_2">
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2022-11-03/ALLDOCUBE-GT-BOOK-15-LAPTOP-intel-Celeron-N5100-12GB-RAM-256GB-EU-Plug-518091-0._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2022-06-07/tronsmart-t7-mini-15w-bluetooth-speaker-ec260e-1654581513598._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
                <div>
                  <img
                    src="https://img.gkbcdn.com/p/2022-07-27/Lenovo-Lecoo-C8-Smart-Music-Bluetooth-5-0-Sunglasses-Black-509243-0._w280_p1_.jpg"
                    alt=""
                  />
                  <h4>₹1689</h4>
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
      {/* trending section */}
      <div className="trending_bef">
        <h2>Trending Categories</h2>
        <div className="trending">
          <div>
            <img
              src="https://img.gkbcdn.com/bn/2205/488x2743-628f62882b40c91f8cd36998._p1_.jpg"
              alt=""
            />
            <h4>Smart Home & Garden</h4>
            <p>
              Smart cleaning robots and vacuums, living room furniture, patio &
              garden supplies, upto 60% off!
            </p>
          </div>
          <div>
            <img
              src="https://img.gkbcdn.com/bn/2205/488x274-628f63522b40c91f8cd3699a._p1_.jpg"
              alt=""
            />
            <h4>E-transport</h4>
            <p>
              New e-rides for less.Skip gas prices with electric bikes,scooters
              & beyond
            </p>
          </div>
          <div>
            <img
              src="https://img.gkbcdn.com/bn/2205/3d488x274-62958bbe2b40c9241c538d77._p1_.jpg"
              alt=""
            />
            <h4>3D Printers</h4>
            <p>
              3D printers allow you to bring digitally modeled desings to life
              by using highly detailed filament printing.
            </p>
          </div>
        </div>
      </div>
      {/* New For You Section */}
      <div className="new_bef">
        <h2>New For You</h2>
        <div className="new_1">
          <div className="new_one">
            <img className="Image"
              src="https://img.gkbcdn.com/bn/2212/LOKMATTIMEPRO-638d8d152b40c93c74f9ec1f._p1_.jpg"
              alt=""
            />
          </div>
          <div className="new_2">
            <img className="Image"
              src="https://img.gkbcdn.com/p/2022-11-04/Q26-Pro-Smartwatch-1-83---TFT-Screen-Black-518108-0._w280_p1_.jpg"
              alt=""
            />
            <p>Q26 Pro Smartwatch 1.83" TFT Screen BT5.0 sports Bracelet 24</p>
            <h3>₹1689.70</h3>
          </div>
          <div className="new_2">
            <img className="Image"
              src="https://img.gkbcdn.com/p/2022-12-09/LOKMAT-ZEUS-PRO-Bluetooth-Calling-Watch-Green-518642-0._w280_p1_.jpg"
              alt=""
            />
            <p>LOKMAT ZEUS PRO Bluetooth Calling Watch 1.6" HD Screen</p>
            <h3>₹3887.40</h3>
          </div>
          <div className="new_2">
            <img className="Image"
              src="https://img.gkbcdn.com/p/2022-10-12/SENBONO-MAX9-Smartwatch-1-32---Full-Touch-Screen-Black-517830-0._w280_p1_.jpg"
              alt=""
            />
            <p>SENBONO MAX9 Smartwatch 1.32" Full Touch Sport Fitness</p>
            <h3>₹2112.33</h3>
          </div>
        </div>
      </div>
      {/* Enjoy Life */}
      {/* Best Sellers */}
      <div className="best">
        <h2>Best Sellers</h2>
        <div className="best1">
          <div>
            <img
              src="https://img.gkbcdn.com/p/2020-04-22/sabbat-e12-bluetooth-5-0-tws-earphone-gunmetal-1587519936946._w280_p1_.jpg"
              alt=""
            />
            <p>Sabbat E12 Ultra Qualcomm QCC3020 CVC8.0 TWS Earbuds QI</p>
            <h3>₹4225.51</h3>
          </div>
          <div>
            <img
              src="https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_p1_.jpg"
              alt=""
            />
            <p>
              Xiaomi WiFi Amplifier Pro 2X2 External Antenna 300Mbps Support
            </p>
            <h3>₹1689.70</h3>
          </div>
          <div>
            <img
              src="https://img.gkbcdn.com/p/2019-10-10/tanix-tx3-amlogic-s905x3-8k-video-decode-android-9-0-tv-box-4gb-32gb--1574132449670._w280_p1_.jpg"
              alt=""
            />
            <p>
              TANIX TX3 ALICE UX Amlogic S905x3 8K Video Decode Android 9.0 TV
              Box
            </p>
            <h3>₹4310.04</h3>
          </div>
          <div>
            <img
              src="https://img.gkbcdn.com/p/2019-08-16/apods-i888-tws-earphones-1571990834059._w280_p1_.jpg"
              alt=""
            />
            <p>Apods i80 Bluetooth 5.0 TWS Earphones Wireless Charging Siri</p>
            <h3>₹1436.12</h3>
          </div>
        </div>
      </div>
      {/* Popular Brands */}
      <div className="pop">
        <h2>Popular Brands</h2>
        <div>
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            modules={[Navigation, Pagination]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                src="https://img.gkbcdn.com/bn/2205/1500x2602-628f67e92b40c91f8ca376f9._p1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://img.gkbcdn.com/bn/2205/1500x260-628f67db2b40c91f8ca376f8._p1_.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://img.gkbcdn.com/bn/2205/1500x2603-628f67f02b40c91f8ca376fa._p1_.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="pop1">
          <img
            src="https://img.gkbcdn.com/bb/sculpfun-20221007152503762._p1_.jpg"
            alt=""
          />
          <img
            src="https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg"
            alt=""
          />
          <img
            src="https://img.gkbcdn.com/bb/creality-20221007150037712._p1_.jpg"
            alt=""
          />
          <img
            src="https://img.gkbcdn.com/bb/roborock-20221007152405384._p1_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;



