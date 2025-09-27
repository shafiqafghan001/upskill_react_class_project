const style = {
  boxWidth: "xl:max-w-[1280] wifull",
  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  heading1: "bg-red-200",
  paragraph:
    "font-poppins font-normal text-diwhite text-[18px] leading-[30.8px]",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6  sm:py-12  py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sn:my-16 my-6",
};

export const layout = {
  section: ` flex md:flex-row flex-col  ${style.paddingY} `,
  sectionRevers: `flex md:flex-row flex-col-revers ${style.paddingY}`,
  sectionImgRevers: `flex-1 flex ${style.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${style.flexCenter} md:ml-10 ml-0  md:mt-0 mt-10 relative`,
  sectionInfo: `flex-1 ${style.flexStart} flex-col`,
};

export default style;
