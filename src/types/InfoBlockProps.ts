import MainSlide from "./MainSlide";
import SubSlide from "./SubSlide";

type InfoBlockProps = {
  classes?: string,
  blockTitle: string,
  blockIndex: string,
  mainSliderData: Omit<MainSlide, 'key'>[],
  subSliderData: Omit<SubSlide, 'key'>[][],
}

export default InfoBlockProps;
