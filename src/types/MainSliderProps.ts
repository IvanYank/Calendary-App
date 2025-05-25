import MainSlide from "./MainSlide";


type MainSliderProps = {
  blockTitle: string,
  data: MainSlide[],
  radius?: number,
  callback: (index: number) => any,
}

export default MainSliderProps;
