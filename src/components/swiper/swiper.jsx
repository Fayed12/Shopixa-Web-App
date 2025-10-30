// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// local
import "./swiper.css";

// Import required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

export default function MySlider() {
  return (
    <div className=" w-full mx-auto mt-10 overflow-hidden p-5">
          <Swiper
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper bg-black"
      >
        {/** SLIDE 1 **/}
        <SwiperSlide>
          <div className="shop-card flex justify-between items-center h-[350px] px-12 py-10 bg-black text-white">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="/images/home/applelogo.png"
                  alt="apple logo"
                  className="w-5"
                />
                <p className="text-sm text-gray-300">iPhone 14 Series</p>
              </div>
              <div className="text-4xl font-bold leading-tight">
                <p>Up to 10%</p>
                <p>off Voucher</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white w-fit hover:text-gray-300 transition-all"
              >
                Shop Now →
              </a>
            </div>

            <div className="flex items-center justify-center h-full">
              <img
                src="/images/home/iphone.png"
                alt="iPhone"
                className="h-[300px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/** SLIDE 2 **/}
        <SwiperSlide>
          <div className="shop-card flex justify-between items-center h-[350px] px-12 py-10 bg-black text-white">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="/images/home/applelogo.png"
                  alt="apple logo"
                  className="w-5"
                />
                <p className="text-sm text-gray-300">iPhone 14 Series</p>
              </div>
              <div className="text-4xl font-bold leading-tight">
                <p>Up to 15%</p>
                <p>off Voucher</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white w-fit hover:text-gray-300 transition-all"
              >
                Shop Now →
              </a>
            </div>

            <div className="flex items-center justify-center h-full">
              <img
                src="/images/home/playstation.png"
                alt="PS"
                className="h-[300px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/** SLIDE 3 **/}
        <SwiperSlide>
          <div className="shop-card flex justify-between items-center h-[350px] px-12 py-10 bg-black text-white">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="/images/home/applelogo.png"
                  alt="apple logo"
                  className="w-5"
                />
                <p className="text-sm text-gray-300">iPhone 14 Series</p>
              </div>
              <div className="text-4xl font-bold leading-tight">
                <p>Up to 20%</p>
                <p>off Voucher</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white w-fit hover:text-gray-300 transition-all"
              >
                Shop Now →
              </a>
            </div>

            <div className="flex items-center justify-center h-full">
              <img
                src="/images/home/perf.png"
                alt="Perfume"
                className="h-[300px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>

        {/** SLIDE 4 **/}
        <SwiperSlide>
          <div className="shop-card flex justify-between items-center h-[350px] px-12 py-10 bg-black text-white">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <img
                  src="/images/home/applelogo.png"
                  alt="apple logo"
                  className="w-5"
                />
                <p className="text-sm text-gray-300">iPhone 14 Series</p>
              </div>
              <div className="text-4xl font-bold leading-tight">
                <p>Up to 30%</p>
                <p>off Voucher</p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-white w-fit hover:text-gray-300 transition-all"
              >
                Shop Now →
              </a>
            </div>

            <div className="flex items-center justify-center h-full">
              <img
                src="/images/home/musicPlayer.png"
                alt="Music"
                className="h-[300px] object-contain"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
