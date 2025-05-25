import { useState } from 'react';
import classNames from "classnames"

import MainSliderProps from '../../types/MainSliderProps';

import styles from "./MainSlider.module.scss"


export default function MainSlider({
  blockTitle,
  data,
  callback,
}: MainSliderProps) {
  const radius = 265;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimStart, setAnimStarted] = useState(false);
  const [slideTitle, setSlideTitle] = useState(data[currentIndex].title);
  const [firstNumber, setFirstNumber] = useState(data[currentIndex].dates[0]);
  const [secondNumber, setSecondNumber] = useState(data[currentIndex].dates[1]);

  const changeNumberAnim = (newIndex: number) => {
    let oldNumber1 = firstNumber;
    let oldNumber2 = secondNumber;

    const newNumber1 = data[newIndex].dates[0];
    const newNumber2 = data[newIndex].dates[1];

    const interval1 = setInterval(() => {
      oldNumber1 < newNumber1 ? oldNumber1++ : oldNumber1--;
      setFirstNumber(oldNumber1);
      if (oldNumber1 === newNumber1) {
        clearInterval(interval1);
      }
    }, 400 / Math.abs(newNumber1 - oldNumber1));

    const interval2 = setInterval(() => {
      oldNumber2 < newNumber2 ? oldNumber2++ : oldNumber2--;
      setSecondNumber(oldNumber2);
      if (oldNumber2 === newNumber2) {
        clearInterval(interval2);
      }
    }, 400 / Math.abs(newNumber2 - oldNumber2));
  }

  const rotate = (dir: 1 | -1) => {
    setCurrentIndex(currentIndex + dir);
    changeNumberAnim(currentIndex + dir)
    callback(currentIndex + dir)
    setAnimStarted(true);

    setTimeout(() => {
      setSlideTitle(data[currentIndex + dir].title)
    }, 400)

    setTimeout(() => {
      setAnimStarted(false);
    }, 1000)
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles['slider-title']}>
          {blockTitle}
        </h2>
        <div className={styles.dates}>
          <span>
            {firstNumber}
          </span>
          &nbsp;&nbsp;
          <span>
            {secondNumber}
          </span>
        </div>
        <div className={
          classNames(
            styles.lines,
            {
              [styles['lines-change']]: isAnimStart,
            }
          )
        }>
          {slideTitle}
        </div>
        <div className={styles.slider}>
          <div
            className={styles.elements}
            style={{ transform: `rotate(${-currentIndex * 360 / data.length}deg)` }}
          >
            {data.map((slide, index) => {
              const angle = (360 / data.length) * index;
              const rad = (angle * Math.PI) / 180;
              const x = (radius) * Math.cos(rad - Math.PI / 3) + radius - (currentIndex === index ? 26 : 3);
              const y = (radius) * Math.sin(rad - Math.PI / 3) + radius - (currentIndex === index ? 26 : 3);
              return (
                <button
                  className={
                    classNames(styles.element, {
                      [styles['element-active']]: currentIndex === index,
                    })
                  }
                  key={slide.key}
                  style={{
                    top: y,
                    left: x,
                  }}
                  onClick={() => {
                    if (currentIndex != index) {
                      setCurrentIndex(index)
                      changeNumberAnim(index)
                      callback(index)
                    }
                  }}
                >
                  <div
                    className={styles['element-text']}
                    style={{
                      transform: `rotate(${currentIndex * (360 / data.length)}deg)`
                    }}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={
                      classNames(styles['element-title'], {
                        [styles['element-title-active']]: data[index].title === slideTitle && index === currentIndex,
                      })
                    }
                    style={{
                      transform: `rotate(${currentIndex * (360 / data.length)}deg) translateX(calc(50% + 46px))`
                    }}
                  >
                    {slide.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles['page-number']}>
          {`${(currentIndex + 1).toString().padStart(2, '0')}/${data.length.toString().padStart(2, '0')}`}
        </div>
        <div className={styles.navigation}>
          <button
            type='button'
            onClick={() => rotate(-1)}
            disabled={currentIndex === 0}
          >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.49988 0.750001L2.24988 7L8.49988 13.25" stroke="#42567A" strokeWidth="2" />
            </svg>
          </button>
          <button
            type='button'
            onClick={() => rotate(1)}
            disabled={currentIndex === data.length - 1}
          >
            <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.50012 0.750001L7.75012 7L1.50012 13.25" stroke="#42567A" strokeWidth="2" />
            </svg>
          </button>
        </div>
        <div className={styles.pagination}>
          {data.map((element, index) => {
            return (
              <button
                className={classNames(
                  styles.dot,
                  {
                    [styles['dot-active']]: currentIndex === index
                  }
                )}
                onClick={() => {
                  setCurrentIndex(index)
                  changeNumberAnim(index)
                  callback(index)
                  setAnimStarted(true);

                  setTimeout(() => {
                    setSlideTitle(data[index].title)
                  }, 400)

                  setTimeout(() => {
                    setAnimStarted(false);
                  }, 1000)
                }}
                key={element.key}
                type='button'
              >
              </button>
            )
          })}
        </div>
      </div >
    </>
  );
}
