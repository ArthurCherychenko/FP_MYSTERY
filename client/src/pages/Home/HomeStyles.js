import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import img1 from "./img/Img01.jpg";
import img2 from "./img/Img02.jpg";
import img3 from "./img/Img03.jpg";
import img4 from "./img/Img04.jpg";
import img5 from "./img/Img05.jpg";


export const theme = createTheme({
  typography: {
    fontFamily: "DM Sans, sans-serif",
    button: {
        textTransform: "none"
    }
  },
});


export const useStyles = makeStyles((theme) => ({

  container0: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    padding: 0,
    paddingLeft: "16px",
    paddingRight: "16px",
    maxWidth: "1200px",
    minWidth: "320px",
  },
  carousel: {
    position: "relative",
    margin: 0,
    padding: 0,
    width: "100%",
    height: "775px",
    // borderRadius: "16px",
  },
  carouselItem1: {
    maxWidth: "1152px",
    height: "596px",
    backgroundImage: `url(${img1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "16px",
  },
  carouselItem2: {
    maxWidth: "1152px",
    height: "596px",
    backgroundImage: `url(${img2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "16px",
  },
  carouselItem3: {
    maxWidth: "1152px",
    height: "596px",
    backgroundImage: `url(${img3})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "16px",
  },
  carouselItem4: {
    maxWidth: "1152px",
    height: "596px",
    backgroundImage: `url(${img4})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "16px",
  },
  carouselItem5: {
    maxWidth: "1152px",
    height: "596px",
    backgroundImage: `url(${img5})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "16px",
  },
  carouselIcon: {
    margin: "8px",
    width: "9px",
    height: "9px",
    color: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    borderRadius: "50%",
  },
  carouselActiveIcon: {
    width: "17px",
    height: "17px",
    backgroundColor: "transparent",
    color: "transparent",
    border: "1px solid white",
    borderRadius: "50%",
  },
  carouselIconContainer: {
    zIndex: "10",
    position: "absolute",
    top: "70%",        
  },
  name: {
    zIndex: "10",
    position: "absolute",
    top: "250px",
    left: "50px",
    width: "240px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "33px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "43px",
    color: "#FFFFFF",
    userSelect: "none",
  },
  price: {
    zIndex: "10",
    position: "absolute",
    top: "310px",
    left: "50px",
    width: "200px",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "26px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "35px",
    color: "#FFFFFF",
    userSelect: "none",
  },
  container1: {
    margin: 0,
    padding: 0,
    position: "relative",
    maxWidth: "1152px",
    height: "646px",
  },
  container2: {
    margin: 0,
    padding: 0,
    top: "0px",
    left: "0px",
    position: "absolute",
    maxWidth: "1152px",
    height: "646px",
    borderRadius: "16px",
    overflow: "hidden",
  },
  container3: {
    margin: 0,
    padding: 0,
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1152px",
    height: "120px",    
  },
  latest: {
    fontFamily: "DM Sans, sans-serif",
    fontSize: "33px",
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: "43px",
    color: "#000000",
    userSelect: "none",
  },
  link: {
    textDecoration: "none",
  },
  container4: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1152px",
  },
  btn: {
    margin: 0,
    padding: 0,
    zIndex: "10",
    position: "absolute",
    top: "380px",
    left: "50px",
    width: "193px",
    height: "53px",
    borderRadius: "6px",
    border: "2px solid #FFFFFF",
    color: "#FFFFFF",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "20px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal",
      "&:hover": {
          border: "2px solid #FFFFFF",
          backgroundColor: "#FFFFFF",
          color: "#000000",
      },
  },
  btnAll: {
    width: "193px",
    height: "53px",
    color: "rgba(161, 138, 104, 1)",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "20px",
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: "normal", 
    display: "flex",
    justifyContent: "end",
    background: "transparent",    
      "&:hover": {
        background: "transparent",
        color: "#000000",
      },
    },
  card: {
    // marginLeft: "55px",
  },
  "@media (max-width: 768.9px)": {
    carousel: {
      position: "relative",
      height: "450px",
    },
    carouselItem1: {
      height: "350px",
      backgroundImage: `url(${img1})`,
      backgroundPosition: "80%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "8px",
    },
    carouselItem2: {
      height: "350px",
      backgroundImage: `url(${img2})`,
      backgroundPosition: "80%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "8px",
    },
    carouselItem3: {
      height: "350px",
      backgroundImage: `url(${img3})`,
      backgroundPosition: "80%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "8px",
    },
    carouselItem4: {
      height: "350px",
      backgroundImage: `url(${img4})`,
      backgroundPosition: "80%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "8px",
    },
    carouselItem5: {
      height: "350px",
      backgroundImage: `url(${img5})`,
      backgroundPosition: "80%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "8px",
    },
    carouselIcon: {
      margin: "4px",
      width: "5px",
      height: "5px",
      color: "#FFFFFF",
      backgroundColor: "#FFFFFF",
      border: "0px",
      borderRadius: "50%",
    },
    carouselActiveIcon: {
      width: "9px",
      height: "9px",
      backgroundColor: "transparent",
      color: "transparent",
      border: "1px solid white",
      borderRadius: "50%",
    },
    container1: {
      height: "350px",
      borderRadius: "8px",
    },
    container2: {
      height: "350px",
      borderRadius: "8px",
    },
    name: {
      top: "230px",
      left: "10px",
      width: "240px",
      fontSize: "20px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "26px",
      color: "#FFFFFF",
    },
    price: {
      top: "260px",
      left: "10px",
      width: "200px",
      fontSize: "14px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "22px",
      color: "#FFFFFF",
    },
    btn: {
      top: "290px",
      left: "10px",
      width: "92px",
      height: "32px",
      borderRadius: "4px",
      border: "1px solid #FFFFFF",
      color: "#FFFFFF",
      fontSize: "12px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "20px",
    },
    btnAll: {
      width: "120px",
      height: "24px",
      fontSize: "14px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "22px", 
      },
    container3: {
      margin: 0,
      padding: 0,
      marginTop: "10px",
      maxWidth: "1152px",
      height: "60px",
    },
    latest: {
      fontSize: "16px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "27px",
    },
  },
  "@media (min-width: 769px) and (max-width: 1199px)": {
    carousel: {
      position: "relative",
      width: "100%",
      height: "580px",
    },
    carouselItem1: {
      height: "460px",
      backgroundImage: `url(${img1})`,
      backgroundPosition: "right",
      backgroundSize: "cover",
    },
    carouselItem2: {
      height: "460px",
      backgroundImage: `url(${img2})`,
      backgroundPosition: "right",
      backgroundSize: "cover",
    },
    carouselItem3: {
      height: "460px",
      backgroundImage: `url(${img3})`,
      backgroundPosition: "right",
      backgroundSize: "cover",
    },
    carouselItem4: {
      height: "460px",
      backgroundImage: `url(${img4})`,
      backgroundPosition: "right",
      backgroundSize: "cover",
    },
    carouselItem5: {
      height: "460px",
      backgroundImage: `url(${img5})`,
      backgroundPosition: "right",
      backgroundSize: "cover",
    },
    container1: {
      height: "460px",
    },
    container2: {
      height: "460px",
    },
    name: {
      top: "200px",
      left: "50px",
      width: "240px",
      fontSize: "26px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "36px",
      color: "#FFFFFF",
    },
    price: {
      top: "250px",
      left: "50px",
      width: "200px",
      fontSize: "22px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "35px",
      color: "#FFFFFF",
    },
    btn: {
      top: "310px",
      left: "50px",
      width: "164px",
      height: "45px",
      borderRadius: "4px",
      border: "2px solid #FFFFFF",
      color: "#FFFFFF",
      fontSize: "18px",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "normal",
    },
    container3: {
      margin: 0,
      padding: 0,
      marginTop: "20px",
      maxWidth: "1152px",
      height: "100px",
    },
    latest: {
      fontSize: "33px",
      fontWeight: "500",
      fontStyle: "normal",
      lineHeight: "43px",
    },
  },
    
}));
