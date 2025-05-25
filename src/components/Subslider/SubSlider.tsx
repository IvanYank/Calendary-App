import { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import classNames from 'classnames';
import 'swiper/css/navigation';
import 'swiper/scss';

import SubSliderProps from '../../types/SubSliderProps';

import style from './SubSlider.module.scss'


export default function SubSlider({
  sliderIndex,
  data,
}: SubSliderProps) {
  const swiperRef = useRef<any>(null);
  const [containerClass, setContainerClass] = useState(classNames(style.container));

  useEffect(() => {
    setContainerClass(classNames(style.container, style['container-change']));
    setTimeout(() => {
      swiperRef.current.slideTo(0);
    }, 400)
  }, [data])

  return (
    <div
      className={containerClass}
      onAnimationEndCapture={() => { setContainerClass(classNames(style.container)) }}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView="auto"
        navigation={{
          prevEl: `.${sliderIndex}-prev`,
          nextEl: `.${sliderIndex}-next`,
        }}
        breakpoints={{
          1: {
            spaceBetween: 25,
          },
          961: {
            spaceBetween: 40,
          },
          1024: {
            spaceBetween: 80,
          },
        }}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
      >
        {
          data.map((element) => {
            return (
              <SwiperSlide className={style.slide} key={element.key}>
                <div className={style['slide-title']}>{element.title}</div>
                <div className={style['slide-text']}>{element.text}</div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <button type='button' className={classNames(style.button, style.prev, `${sliderIndex}-prev`)} >
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 1L2 6L7 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
      <button type='button' className={classNames(style.button, style.next, `${sliderIndex}-next`)} >
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L6 6L1 11" stroke="#3877EE" strokeWidth="2" />
        </svg>
      </button>
    </div>
  );
};
