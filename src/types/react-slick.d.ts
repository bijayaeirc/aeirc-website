declare module 'react-slick' {
  import * as React from 'react';

  export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    asNavFor?: Slider | undefined;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    centerMode?: boolean;
    centerPadding?: string;
    className?: string;
    cssEase?: string;
    customPaging?: (index: number) => React.ReactNode;
    dots?: boolean;
    draggable?: boolean;
    easing?: string;
    edgeFriction?: number;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: 'ondemand' | 'progressive' | boolean;
    nextArrow?: React.ReactNode;
    onEdge?: (swipeDirection: string) => void;
    onInit?: () => void;
    onLazyLoad?: (slidesToLoad: number[]) => void;
    onReInit?: () => void;
    pauseOnDotsHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    prevArrow?: React.ReactNode;
    responsive?: Array<{
      breakpoint: number;
      settings: Settings | "unslick";
    }>;
    rows?: number;
    rtl?: boolean;
    slide?: string;
    slidesPerRow?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipe?: boolean;
    swipeEvent?: (swipeDirection: string) => void;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    useCSS?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    verticalSwiping?: boolean;
    waitForAnimate?: boolean;
  }

  export default class Slider extends React.Component<Settings> {}
}
