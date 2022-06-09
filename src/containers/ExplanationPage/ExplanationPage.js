import React, { useState, useEffect } from "react";
import "./ExplanationPage.css";
import AnswerButton from "../../components/AnswerButton/AnswerButton";
import IconsContainer from "../IconsContainer/IconsContainer";
import { useNavigate } from "react-router-dom";
import data from "../../data.json";

export default function ExplanationPage(props) {
  let navigate = useNavigate();
  // const [currExpPage, setCurrExpPage] = useState(9);
  useEffect(() => {
    if (
      props.useCurrQuestion !== 5 &&
      props.useCurrQuestion !== 6 &&
      props.useCurrQuestion !== 7
    ) {
      props.setCurrExpPage(9);
    }
  }, [props.useCurrQuestion]);
  const MoveToNextPage = (event) => {
    // props.setCurrExpPage((prev) => prev + 1);
    if( props.useCurrQuestion === 7 || props.useCurrQuestion === 8) {
      navigate("/MapPage");
    } else {
      navigate("/AmericanQuestionPage");
    }
  };
  return (
    <div className="explanation-page">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1242 2208"
        className="background-image"
      >
        <defs>
          <clipPath id="clip-path">
            <rect className="cls-1-2" y="-2" width="1242" height="2210" />
          </clipPath>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_17"
            x1="614.01"
            y1="1708.34"
            x2="599.22"
            y2="-37.13"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fff" />
            <stop offset="0.36" stopColor="#c3a660" />
            <stop offset="1" stopColor="#7c611a" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_16"
            x1="604.93"
            y1="1739.08"
            x2="606.58"
            y2="1859.23"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#bd6e31" />
            <stop offset="0.07" stopColor="#bb7b4a" />
            <stop offset="0.15" stopColor="#b98660" />
            <stop offset="0.25" stopColor="#b78f71" />
            <stop offset="0.37" stopColor="#b6957c" />
            <stop offset="0.53" stopColor="#b59983" />
            <stop offset="1" stopColor="#b59a85" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_15"
            x1="199.17"
            y1="1686.23"
            x2="287.95"
            y2="2080.17"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.16" stopColor="#cb8c5c" />
            <stop offset="0.18" stopColor="#c6885a" />
            <stop offset="0.37" stopColor="#986245" />
            <stop offset="0.56" stopColor="#734535" />
            <stop offset="0.73" stopColor="#592f29" />
            <stop offset="0.88" stopColor="#4a2222" />
            <stop offset="1" stopColor="#441e20" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_15-2"
            x1="1148.28"
            y1="1741.3"
            x2="1221.98"
            y2="2139.93"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_15"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_14"
            x1="1177.26"
            y1="1830.84"
            x2="1281.1"
            y2="2211.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#bd6e31" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_13"
            x1="115.03"
            y1="1879.77"
            x2="152.25"
            y2="2054.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#c88754" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_12"
            x1="501.57"
            y1="1744.3"
            x2="580.23"
            y2="1950.46"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.25" stopColor="#bd6e31" />
            <stop offset="0.49" stopColor="#ab5c28" />
            <stop offset="0.76" stopColor="#9d4e21" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_11"
            x1="214.85"
            y1="1873.92"
            x2="348.78"
            y2="2370.09"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#cf9e51" />
            <stop offset="0.07" stopColor="#c68f48" />
            <stop offset="0.24" stopColor="#b27136" />
            <stop offset="0.41" stopColor="#a45b29" />
            <stop offset="0.58" stopColor="#9c4e22" />
            <stop offset="0.73" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_10"
            x1="136.75"
            y1="1536.75"
            x2="208.01"
            y2="2048.77"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="0.18" stopColor="#1c0e06" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_9"
            x1="598.11"
            y1="1813.08"
            x2="641.46"
            y2="2010.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#c28320" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_8"
            x1="856.48"
            y1="1799.6"
            x2="1118.83"
            y2="2607.9"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#441e20" />
            <stop offset="0.21" stopColor="#592920" />
            <stop offset="0.74" stopColor="#87411f" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3"
            x1="523.08"
            y1="1809.59"
            x2="1132.91"
            y2="2720.19"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_7"
            x1="254.5"
            y1="1697.94"
            x2="1259.44"
            y2="2806.29"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="0.16" stopColor="#120904" />
            <stop offset="0.48" stopColor="#411f0d" />
            <stop offset="0.92" stopColor="#8b431c" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_6"
            x1="944.83"
            y1="1694.13"
            x2="1474.86"
            y2="2685.25"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="0.37" stopColor="#3d1d0c" />
            <stop offset="0.8" stopColor="#7f3d1a" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_5"
            x1="479.59"
            y1="1597.71"
            x2="624.09"
            y2="2702.68"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#d2a45c" />
            <stop offset="0.21" stopColor="#ca9753" />
            <stop offset="0.58" stopColor="#b5763d" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3-2"
            x1="-209.82"
            y1="1436.27"
            x2="743.46"
            y2="2421.2"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3-3"
            x1="-440.54"
            y1="801.96"
            x2="1484.51"
            y2="2790.94"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3-4"
            x1="328.32"
            y1="2107.72"
            x2="426.29"
            y2="2126.02"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_4"
            x1="609.04"
            y1="2002.31"
            x2="951.87"
            y2="2358.63"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop offset="0.13" stopColor="#0d0603" />
            <stop offset="0.38" stopColor="#2e1609" />
            <stop offset="0.71" stopColor="#643114" />
            <stop offset="1" stopColor="#994a1f" />
          </linearGradient>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_4-2"
            x1="1042.79"
            y1="2389.68"
            x2="1257.6"
            y2="2514.38"
            gradientTransform="translate(-29.42 -407.4) rotate(4.11)"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_4"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_4-3"
            x1="725.99"
            y1="2112.76"
            x2="841.37"
            y2="2179.74"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_4"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_17-2"
            x1="707.56"
            y1="991.07"
            x2="2774.54"
            y2="3418.22"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_17"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_17-3"
            x1="291.56"
            y1="990.39"
            x2="2759.02"
            y2="3887.82"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_17"
          />
          <clipPath id="clip-path-2">
            <rect className="cls-1-2" y="-2322" width="1242" height="2210" />
          </clipPath>
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_5-2"
            x1="479.59"
            y1="-722.29"
            x2="624.09"
            y2="382.68"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_5"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3-5"
            x1="-440.54"
            y1="-1518.04"
            x2="1484.51"
            y2="470.94"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3"
          />
          <linearGradient
            id="ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3-6"
            x1="-1710.58"
            y1="-2005.49"
            x2="1086.21"
            y2="884.18"
            href="#ÅÂÁ_Ï_ÌÌ_È_ËÂÌÚ_3"
          />
        </defs>
        <g className="cls-2-2">
          <rect
            className="cls-3-2"
            x="-124.82"
            y="-36.94"
            width="1463.82"
            height="1857.53"
          />
          <path
            className="cls-4-2"
            d="M-124.82,1813.35s215.36-19.65,270.45-6.49c27.18,6.49,139.72-8.68,155.64-5.95,26.38,4.51,22.87,4.21,42.6,9.95,26.05,7.56,139.86,10.18,151.23,9.73s93.27-20.52,102.87-22.41,18.33-5.41,31.78-.53,41.17.53,41.17.53l251.26,42.07s187.08-33.47,213.86-31.31,84.36-7.36,99.76-5.2c72.85,10.25,66-8.57,103.2,5.2v160.47l-1463.82,14.72Z"
          />
          <path
            className="cls-5-2"
            d="M-124.82,1839.12s199.62,13.54,240.18-.94c40.26-14.37,89.23-5.71,116.32,0,50.65,10.69,159.17,15.89,184.51,11.83s227.42-17,227.42-17l27.16,262.37L-124.82,2074Z"
          />
          <path
            className="cls-6-2"
            d="M992.41,1839.21s96.62,11.67,150.69-5.35,81.36-2.71,113.47,3.06,82.43-5.83,82.43-5.83V2007.3C1264.18,1985.32,999.53,1915.61,992.41,1839.21Z"
          />
          <path
            className="cls-7-2"
            d="M1037.6,1871.26s135-7.69,194-4c35.79,2.25-7.07,3.64,107.44,4v82.47C1271.24,1955.39,1106.36,1958.82,1037.6,1871.26Z"
          />
          <path
            className="cls-8-2"
            d="M-124.82,1870.15s14,14.58,84.83,15.26c11.6.12,64.33-12.89,76.89-12.84,105.12.5,239.07-1.22,323.91-11,31.67-3.65-155.23,83.19-155.23,83.19l-330.4-2.72Z"
          />
          <path
            className="cls-9-2"
            d="M1339,1916.24v209.23H-124.82V1926.88c239.28,11.4,366.47-82.93,432.27-88.7,15.9-1.39,78-26.85,93.5-29.44s54.29,6.32,80.84-8.08c33.89-18.38,116.74-27.57,190.88-52.05,78.05-25.77,123-25.41,198.09-9.47,51.2,10.87,101.18,33.65,146.46,56,42.31,20.91,79.31,41.48,105.88,51.67C1277.78,1906.12,1230.55,1914.37,1339,1916.24Z"
          />
          <path
            className="cls-10-2"
            d="M-124.82,1997.85s57.9-15.73,78.49-16c32.79-.47,144.53,14.05,164.65,11,91.84-13.89,189.67-44.18,218.31-49.09,104.86-18,189.62,21.72,249.84,3.26s85.25,63.49,85.25,63.49L112,2171.54h-236.8Z"
          />
          <path
            className="cls-11-2"
            d="M343.51,2097c12.65,37.5,14.83,74.57,14.83,74.57l-483.16,49.24v-95.31s128.76-39.68,65.4-74.32,103.83-53,163.06-40.86c98.3,20.1,330.29-11.8,229.59-50.15-58.72-22.36,209-13.18,209-13.18l7.86-3.63C511.9,2013.53,429.54,2062.89,343.51,2097Z"
          />
          <path
            className="cls-12-2"
            d="M770.11,1838.18c-119.7,11.77-119,19.44-134.07,33.72-33.37,31.55-166.84,80.15-181.77,90.95s-127.12,103-127.12,103,445.59,5.06,560.92-52.82,31.68-151.63,31.68-151.63Z"
          />
          <path
            className="cls-13-2"
            d="M1339,1916.24v209.23H517.59l21.92-.67,104.1-120.28s100.45,64.22,239-45.33c130.47-103.16,134.43-90.29,134.61-88.44v-75.58c42.31,20.91,79.31,41.48,105.88,51.67C1277.78,1906.12,1233.92,1896,1339,1916.24Z"
          />
          <path
            className="cls-14-2"
            d="M1283.12,1956.47c-65.9,33.61-209.88,56.42-237.74,57.77-213.84,10.42-299,72.16-345.34,85.45-52.42,15-226-27.29-226-27.29s-128,28-240.41,53.42C157,2143.13,87.54,2159.2,71,2164.27c7.79-5.08,28.53-21.38,64.85-41.23h0C178,2100,241.27,2072.15,329.7,2051.62c52.74-12.24,123.32-57.43,162.13-81,50.54-30.75,164.5-36.16,237.34-38.26,11.82-.34,22.56-.6,31.77-.86,65.93-1.87,100.57-28.91,88.2-36.24-9.69-5.74-27.71-10.47-48.6-14.41h0c-56.42-10.64-133.73-15.59-124.19-19.41,108.43-43.52,250.59-44.65,285.66-60.71,47.49-21.75-50.11-50.58-55-52,112.87,28.8,146,63.11,241.92,104.53C1270.55,1905.73,1326.06,1934.57,1283.12,1956.47Z"
          />
          <path
            className="cls-15-2"
            d="M1045.38,2014.24c-213.84,10.42-299,72.16-345.34,85.45-52.42,15-226-27.29-226-27.29s-128,28-240.41,53.42c-49.25-1.48-85.54-2.46-97.81-2.78C178,2100,241.27,2072.15,329.7,2051.62c52.74-12.24,123.32-57.43,162.13-81,50.54-30.75,164.5-36.16,237.34-38.26,11.82-.34,22.56-.6,31.77-.86,65.93-1.87,100.57-28.91,88.2-36.24-9.69-5.74-27.71-10.47-48.6-14.41,0,0,71,6,126.77,35.74C970.57,1939.62,1023.29,1992,1045.38,2014.24Z"
          />
          <path
            className="cls-16-2"
            d="M975.51,2093.27s16-39.05,69.58-53.58c49.09-13.3,119.49-10.24,214.54-55.56,46.6-22.22,49-15.06,79.37-24v211.4H948.22Z"
          />
          <path
            className="cls-17-2"
            d="M1274.58,2171.54v309.64H-124.82V2202.36L-20,2171.54s137.49-58.25,181.06-72.83c33.39-11.18,94.79-29,103.76-29.53-23.5,7.09-59.85,21.79-90.57,36.07,75.62-6.75,205.77-36,239.86-42.5,28.42-5.4,52.91-7.36,74.33-7,52.81.88,87,15.87,115.48,28.45,25,11,65.22,10.2,91.83,8,15.94-1.31,27-3.11,27-3.11s3.62-.32,10.07-.85c11.51-.94,32-2.56,57.09-4.22,72.6-4.83,181.81-10.13,221.35-1C1072.13,2097.13,1274.58,2171.54,1274.58,2171.54Z"
          />
          <path
            className="cls-18-2"
            d="M732.54,2088.61a6.64,6.64,0,0,1-.78.25c-7.66,2.12-53.26,7.13-102.54,22.45l-.29.09-.67.21h0c-6.48,2-13,4.24-19.53,6.65-16,5.9-33.9,12.43-51.63,18.86l-1.32.48c-40.6,14.74-79.84,29.72-94,33.94-325.86,96.9-249.06,12.91-134.56-7.27,85.09-15,169.4-31.85,127.12-49.81-16.47-7-.19-18.78,20.82-24.36,95.48-25.31,8-33.83,13.35-34.36h0c43.19.72,73.93,10.87,99.27,21.44l1.61.67c5.06,2.12,9.91,4.26,14.6,6.34,40,17.68,118.83,4.9,118.83,4.9l5.39-.46h0l2.09-.17,2.57-.22C733,2088.35,732.84,2088.47,732.54,2088.61Z"
          />
          <path
            className="cls-19-2"
            d="M733.54,2090.33c-7.84,2.12-53.86,7.13-104.4,22.45a2.8,2.8,0,0,0-.31.09,5.14,5.14,0,0,0-.68.21h0c-6.65,2-13.36,4.24-20.08,6.64-16.51,5.91-35.33,11.76-53.59,18.19-.46.16-.88.51-1.34.68-10.16-12.75,13.89-30,18.85-26.06-16.4-15.26,10.83-9.51,13.19-9-1.73-.56-17-5.59-18.74-10.67-4.08-11.87,22.2,1.49,22.2,1.49s-13.16-19.49,3-12.76c0,0-.53-1.24-1.15-2.95-1.65-4.65-3.88-12.75,2.51-8.66-3.15-21.15,7.44-3.82,7.44-3.82s-1.78-20.48,4.45-18.93,6.69,20.35,6.69,20.35,23-16.52,21.86-8.26a14.47,14.47,0,0,1-6.48,10.54c3.41-1.84,15.28-7.83,18.33-3.41,3.58,5.19-3.67,14.68,1.31,13.71,5.72-1.12,25.42-10.86,23.38-1.2,33.56-10.67,18,7.88,60,11.13h0C731.13,2090.19,732.32,2090.27,733.54,2090.33Z"
          />
          <path
            className="cls-20-2"
            d="M734.33,2090.08c-5.33,2.22-65.89,8-126.29,29.64-16.51,5.91-35.2,12-53.46,18.46-6-8.79,5.85-24.17,20.49-22.79-17.3-17.62,12.27-8.75,13.12-8.56-.61-.23-20.23-7.64-19.77-13.18s22.47,4.15,23,4.39c-.43-.63-12.78-18.46,3-12.15a51.57,51.57,0,0,1-2.36-6.58c-1-3.84-1.06-7.41,3.67-4.49-3.13-19.83,7-4.18,7.35-3.66-.06-.61-1.72-19.48,4.35-18s6.68,19.39,6.68,19.39,20.71-19.51,19.62-11.63a38.94,38.94,0,0,1-5.3,14.28c.37-.2,15.52-8.6,19-3.72s-3.58,14,1.34,13.06c5.65-1.07,25.11-10.34,23.13-1.14,32.7-10,20.42,3.72,60.19,6.55Z"
          />
          <path
            className="cls-19"
            d="M706.1,2090.66s10.72-5.22,20.95-10.48,16.52-11.27,24.3-7.52,18.25,3.68,22.48,4.4,35.11-1.77,36.37-.46,29.5,3.89,29.5,3.89S753,2084.13,706.1,2090.66Z"
          />
          <path
            className="cls-20"
            d="M709.25,2091.62s10.71-5.22,20.94-10.48,16.52-11.27,24.3-7.53,18.25,3.69,22.48,4.41,35.11-1.78,36.37-.47,33.88,2.44,33.88,2.44S756.15,2085.09,709.25,2091.62Z"
          />
          <path
            className="cls-21-2"
            d="M1011.3,2083.05s94.62,17.16,43.46,49c-42.58,26.5-125.82,21.16-163.72,39.5-132.83,64.3,346.27,122.28,335.1,177.66-14.37,71.19-495.42,132-495.42,132H1339V2171.54S1079.35,2088,1011.3,2083.05Z"
          />
          <path
            className="cls-19"
            d="M382.23,2121.88s-5.2-5-3.33-9.29,3.33,6,3.33,6,1-14.83,3.89-13.91-1.62,10.5-1.62,10.5,5.67-11,7.78-10.54-4.38,8.61-4.38,8.61,7.3-3.39,7-1.08-7.29,7.09-7.29,7.09,6.83-3.14,7.3-.86S382.23,2121.88,382.23,2121.88Z"
          />
          <path
            className="cls-22-2"
            d="M383.34,2122.65s25.91-1.23,34.08-.77S415.17,2114.37,383.34,2122.65Z"
          />
          <path
            className="cls-20"
            d="M383.34,2122.65s-5.14-4.72-3.29-8.85,3.29,5.72,3.29,5.72,1-14.14,3.85-13.25-1.6,10-1.6,10,5.61-10.46,7.7-10-4.33,8.2-4.33,8.2,7.21-3.23,6.89-1-7.21,6.76-7.21,6.76,6.75-3,7.22-.82S383.34,2122.65,383.34,2122.65Z"
          />
          <path
            className="cls-23-2"
            d="M741.2,2091.62c-79.55,10.24-188.09,47-188.09,47,44.6-22.58,100-38,142.68-46.39,15.94-1.31,27-3.11,27-3.11s3.62-.32,10.07-.85c11.51-.94,109.48-9.27,135.7-8.56C884.5,2078.65,794.07,2084.81,741.2,2091.62Z"
          />
          <path
            className="cls-19"
            d="M838.27,2103.94s-12.78-16.88-9.12-19.9,9.09,9,9.09,9,.08-26.43,4.63-21.79,2.53,17.34,2.53,17.34,4-20.27,15.29-19.12c5.13.52,8.75,12.39,8.75,12.39s10.5-8.36,6.66,2c5-1.74,6.63-1,7,2.4,3.71-3.93,12.8-5.35,38.16,2.66C899.52,2087,861.13,2097.29,838.27,2103.94Z"
          />
          <path
            className="cls-20"
            d="M838.27,2103.94s-10.33-14.51-6.72-17.38,9,8.61,9,8.61,0-25.19,4.52-20.76,2.55,16.54,2.55,16.54,3.86-19.31,15.07-18.18c5.08.51,8.69,11.83,8.69,11.83s10.36-7.94,6.59,1.89c5-1.64,4.74.93,5.08,4.17,7.18-9.58,21.82-6.13,46.92,1.58C894.62,2093.78,860.86,2097.66,838.27,2103.94Z"
          />
          <path
            className="cls-24-2"
            d="M838.27,2103.94s150.88-12.1,138.39-13.07c-21.91-1.69-32.67-.11-65.3,2C863.06,2096,838.27,2103.94,838.27,2103.94Z"
          />
          <path
            className="cls-19"
            d="M449.48,2100.58s-3.35-8.54-.4-11.25,4.88,7.38,4.88,7.38,7.47-19.71,11.62-16.18-1.35,10.41-1.35,10.41,8.64-11.32,12.31-8.74.42,8.18.42,8.18,8.47-7.53,5.79,1.2c4.21-1.74,5.61-1.24,6.1,1.54,13.28-3.34,36.92,5.64,39,7.46C512.72,2100.71,469.12,2094.1,449.48,2100.58Z"
          />
          <path
            className="cls-20"
            d="M450.69,2101.86s-3.35-8.54-.4-11.26,4.87,7.38,4.87,7.38,7.48-19.71,11.63-16.18-1.35,10.41-1.35,10.41,8.64-11.32,12.31-8.73.42,8.17.42,8.17,8.47-7.53,5.79,1.2c4.21-1.74,5.61-1.23,6.09,1.54,13.29-3.34,36.93,5.64,39,7.47C513.92,2102,470.33,2095.37,450.69,2101.86Z"
          />
          <path
            className="cls-19"
            d="M1007.91,2171.52H888.14c-24.94-7.25-17.12-20.92,1.86-14.68,0,0-18.4-29-2.29-32.56,9.95-2.22,10.45,23.6,11.19,26.77.21-9.73-.21-37.7,11.41-36.59,12.71,1.21-4,23.82-5.75,30.59.73-.93,27.22-38.63,28.35-23.22.87,11.88-13.11,25.12-13.31,25.57.53-.38,24.87-29.37,20.71-7.69,10.15-7.71,36.11.36,15.83,21.72C982.33,2137.4,1001.16,2166.47,1007.91,2171.52Z"
          />
          <path
            className="cls-20"
            d="M1023.1,2171.52H891c-24.54-12.87-9.62-15.57.87-14.54,0,0-15-27.81,0-27.82,5.24,0,6,17.9,6.77,20.61,2.3-8.62,7.61-34.21,12.94-32.84,9.14,2.34-6.58,27.37-7.06,28.12.71-.79,28.16-31.35,27.52-18.78s-13.34,20.37-13.53,20.75c.51-.33,25.51-24.05,21.44-5.56,9.91-6.57,39.88,4.8,19.42,18.33C980.64,2143,1016.51,2167.21,1023.1,2171.52Z"
          />
          <path
            className="cls-19"
            d="M728.08,2139.71s-12.34-10.28-7.9-19.25,7.9,12.44,7.9,12.44,2.31-30.77,9.22-28.85-3.84,21.78-3.84,21.78,13.46-22.77,18.45-21.86-10.38,17.86-10.38,17.86,17.3-7,16.53-2.25-17.3,14.7-17.3,14.7,16.2-6.5,17.33-1.78S728.08,2139.71,728.08,2139.71Z"
          />
          <path
            className="cls-25-2"
            d="M730.72,2141.32S780,2135.5,799,2133,768.1,2126.48,730.72,2141.32Z"
          />
          <path
            className="cls-20"
            d="M730.72,2141.32s-12.2-9.8-7.81-18.35,7.81,11.86,7.81,11.86,2.28-29.32,9.13-27.49-3.8,20.75-3.8,20.75,13.31-21.7,18.25-20.84-10.27,17-10.27,17,17.12-6.7,16.36-2.15-17.12,14-17.12,14,16-6.2,17.14-1.7S730.72,2141.32,730.72,2141.32Z"
          />
          <path
            className="cls-20"
            d="M1021.12,2171.54s-4.22-23.95,6.87-24.65c10.18-.64-1.83,19.74-1.83,19.74s8.66-22.43,22.82-14.47c5.29,3,5.52,7.55,5.52,7.55s13.48-5.88,16.87-4.21c28.93,14.24,28.05,11.63,37.92,11.57,4.08,0,25.78,17.38,25.78,17.38s-105.76-12.91-157.68-12.91c-86.35,0,5.47-14.93,17.56-5.5-.15-14.77,10.13,5.5,10.13,5.5s-8.35-21-1.59-17.82,8.42,11,8.42,11-2.22-11.63,2-11.63S1021.12,2171.54,1021.12,2171.54Z"
          />
          <path
            className="cls-26-2"
            d="M1101.22,1503.43s51.54-67.57,101.33-60.4,51.89,1.2,62.29-6.76S1339,1452.8,1339,1452.8v84.14l-404.83,0S989.69,1502.45,1101.22,1503.43Z"
          />
          <path
            className="cls-27-2"
            d="M762.93,1600.11s20.9-44.63,37.4-30.75,67.15,24.8,67.15,24.8,97.9,6.91,100.67,8.9,102,17.84,102,17.84H586.83S701.53,1580.28,762.93,1600.11Z"
          />
        </g>
        <g className="cls-28-2">
          <path
            className="cls-29-2"
            d="M1274.58-148.46V161.18H-124.82V-117.64L-20-148.46s137.49-58.25,181.06-72.83c33.39-11.18,94.79-29,103.76-29.53-23.5,7.09-59.85,21.79-90.57,36.07,75.62-6.75,205.77-36,239.86-42.5,28.42-5.4,52.91-7.36,74.33-7,52.81.88,87,15.87,115.48,28.45,25,11.05,65.22,10.2,91.83,8,15.94-1.31,27-3.11,27-3.11s3.62-.32,10.07-.85c11.51-.94,32-2.56,57.09-4.22,72.6-4.83,181.81-10.13,221.35-1C1072.13-222.87,1274.58-148.46,1274.58-148.46Z"
          />
          <path
            className="cls-30-2"
            d="M1011.3-236.95s94.62,17.16,43.46,49c-42.58,26.5-125.82,21.16-163.72,39.5C758.21-84.16,1237.31-26.18,1226.14,29.2c-14.37,71.19-495.42,132-495.42,132H1339V-148.46S1079.35-232,1011.3-236.95Z"
          />
          <path
            className="cls-31-2"
            d="M-124.82-37.89s147.27,0,433.61,86C397.54,74.78,847.22,109,847.22,109L454.6,161.18H-124.82Z"
          />
        </g>
      </svg>
      <IconsContainer
        classNameIconsContainer={"explanation-page-icons-container"}
        classNameRoundSymbol={"explanation-page-round-symbol"}
        classNameSymbol={"explanation-page-symbol"}
      ></IconsContainer>
      {data[props.currExpPage].headline !== undefined && (
        <h1 className="explanation-page-headline">
          {data[props.currExpPage].headline}
        </h1>
      )}
      <p
        className={`explanation-page-text-${data[props.currExpPage].expPageId}`}
      >
        {data[props.currExpPage].text}
      </p>
      <AnswerButton
        handleClick={MoveToNextPage}
        className="explanation-page-answer-button-2"
        text={
          data[props.currExpPage].expPageId == 0
            ? "אז יאללה בואו נתחיל?"
            : "להמשך"
        }
      ></AnswerButton>
    </div>
  );
}
