import styled from "styled-components";
import Link from "../../../utils/link";
import { media } from "../../../utils/style-utils";

export const SliderItem = styled(Link)`
  box-shadow: ${props => props.theme.shadow.primary};
  border: 1px solid #eee;
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  overflow: hidden;
  color: ${props => props.theme.color.primary};
  margin: 30px;
  flex-direction: column-reverse;
  ${media.tablet`
    width:600px;  
    height: 380px;
    flex-direction:row;
  `};
`;

export const SliderItemLeft = styled.div`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  display: flex;
  padding: 15px;
  ${media.tablet`
  padding: 50px;
  `} overflow: hidden;
`;

export const SliderItemRight = styled.div`
  flex: 1;
  overflow: none;
`;

export const SliderBg = styled.div`
  background: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200px;
  overflow: none;
  ${media.tablet`
    height: 100%;
  `};
`;

export const WrapperTabs = styled.div`
  /* Slider */
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;

    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;
    min-height: 1px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-dots,
  .slick-next,
  .slick-prev {
    position: absolute;
    display: block;
    padding: 0;
  }
  .slick-dots li button:before,
  .slick-next:before,
  .slick-prev:before {
    font-family: slick;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .slick-loading .slick-list {
    background: url(ajax-loader.gif) center center no-repeat #fff;
  }

  .slick-next,
  .slick-prev {
    font-size: 0;
    line-height: 0;
    top: 50%;
    width: 20px;
    height: 20px;
    -webkit-transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
    color: transparent;
    outline: 0;
    background: 0 0;
  }
  .slick-next:focus:before,
  .slick-next:hover:before,
  .slick-prev:focus:before,
  .slick-prev:hover:before {
    opacity: 1;
  }
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
    opacity: 0.25;
  }
  .slick-next:before,
  .slick-prev:before {
    font-size: 20px;
    line-height: 1;
    opacity: 0.75;
    color: #fff;
  }
  .slick-prev {
    left: -25px;
  }
  [dir="rtl"] .slick-prev {
    right: -25px;
    left: auto;
  }
  .slick-prev:before {
    content: "←";
  }
  .slick-next:before,
  [dir="rtl"] .slick-prev:before {
    content: "→";
  }
  .slick-next {
    right: -25px;
  }
  [dir="rtl"] .slick-next {
    right: auto;
    left: -25px;
  }
  [dir="rtl"] .slick-next:before {
    content: "←";
  }
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }
  .slick-dots {
    bottom: -25px;
    width: 100%;
    margin: 0;
    list-style: none;
    text-align: center;
  }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }
  .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: 0;
    background: 0 0;
  }
  .slick-dots li button:focus,
  .slick-dots li button:hover {
    outline: 0;
  }
  .slick-dots li button:focus:before,
  .slick-dots li button:hover:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-size: 30px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: 0.25;
    color: #000;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #000;
  } /*# sourceMappingURL=slick-theme.min.css.map */
`;
