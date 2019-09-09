import sun from "./assets/icons/sun.svg";
import cloudy from "./assets/icons/cloudy.svg";

export const getIcon = temp => {
  switch (true) {
    case temp >= 20:
      return sun;
    case temp < 20:
      return cloudy;
    default:
      return cloudy;
  }
};
