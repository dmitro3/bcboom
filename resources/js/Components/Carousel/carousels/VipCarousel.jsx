import GamesCarouseCard from '@/Components/Cards/GamesCarouseCard';
import { useScreenResolution } from '@/hooks/useScreeResolution';
import React from 'react'
import CustomCarousel from '../Carousel';
import next from '../../../../public/images/vip/next.svg';
const VipCarousel = () => {
    const isMobile = useScreenResolution();
  return (
      <div>
          <CustomCarousel
              autoplay={false}
              rowPerCount={isMobile ? 1 : 4}
              paging={false}
              prevArrow={<img src={prev} alt="prev" />}
              nextArrow={<img src={next} alt="next" />}
          >
              {item.cards.map((item, index) => (
                  <div className="testimoni--wrapper">
                      <GamesCarouseCard card={item} key={index} index={index} />
                  </div>
              ))}
          </CustomCarousel>
      </div>
  );
}

export default VipCarousel