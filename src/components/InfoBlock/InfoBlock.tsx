import { useState } from 'react';
import classNames from "classnames"

import MainSlide from '../../types/MainSlide';
import MainSlider from '../Slider/MainSlider';
import SubSlide from '../../types/SubSlide';
import SubSlider from '../Subslider/SubSlider';
import InfoBlockProps from '../../types/InfoBlockProps';

import styles from './InfoBlock.module.scss'

export default function InfoBLock({
  classes,
  blockTitle,
  blockIndex,
  mainSliderData,
  subSliderData,
}: InfoBlockProps) {
  const [dataIndex, setDataIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const mainSliderDataIndexed = mainSliderData.map((item: Omit<MainSlide, 'key'>, index: number) => {
    return {
      ...item,
      key: `${blockIndex}-mainSlider-${index}`
    }
  })

  const subSliderDataIndexed = subSliderData.map((arr: Omit<SubSlide, 'key'>[], arrIndex: number) => {
    return arr.map((item: Omit<SubSlide, 'key'>, index: number) => {
      return {
        ...item,
        key: `${blockIndex}-subSlider-${arrIndex}-${index}`
      }
    })
  })

  return (
    <div className={classNames(classes, styles.block)}>
      <MainSlider
        blockTitle={blockTitle}
        data={mainSliderDataIndexed}
        callback={(out: number) => {
          if (timer !== undefined) {
            clearTimeout(timer);
          }

          setTimer(
            setTimeout(() => {
              setDataIndex(out)
            }, 400)
          )
        }}
      />
      <SubSlider
        data={subSliderDataIndexed[dataIndex]}
        sliderIndex={`${blockIndex}-subSlider`}
      />
    </div>
  );
}
