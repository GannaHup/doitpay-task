import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import WalletCard from "@components/base/WalletCard";
import type { WalletCarouselProps } from "./WalletCarousel.types";
import { useState } from "react";
import { cn } from "@libs/classnames";

const WalletCarousel: React.FC<WalletCarouselProps> = ({
  wallets,
  onSeeDetail,
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="relative w-full">
      <div
        className={cn(
          "navigation-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white",
          {
            hidden: isBeginning,
          }
        )}
      >
        <IconChevronLeft size={20} />
      </div>

      <div
        className={cn(
          "navigation-next absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-white",
          {
            hidden: isEnd,
          }
        )}
      >
        <IconChevronRight size={20} />
      </div>

      <div className="pagination-custom absolute -top-5! w-full flex justify-center"></div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={4}
        navigation={{
          prevEl: ".navigation-prev",
          nextEl: ".navigation-next",
        }}
        pagination={{ clickable: true, el: ".pagination-custom" }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {wallets.map((wallet, index) => (
          <SwiperSlide key={index}>
            <WalletCard wallet={wallet} onSeeDetail={onSeeDetail} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WalletCarousel;
