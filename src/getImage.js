import sunny from './imgs/sunny.svg';
import pCloudy from './imgs/p-cloudy.svg';
import cloud from './imgs/cloud.svg';
import rain from './imgs/rain.svg';
import fog from './imgs/fog.svg';
import thunder from './imgs/thunder.svg';
import snow from './imgs/snow.svg';

const weatherCodes = [
  {
    url: sunny,
    codes: [1000],
  },
  {
    url: pCloudy,
    codes: [1003],
  },
  {
    url: cloud,
    codes: [1006, 1009],
  },
  {
    url: rain,
    codes: [
      1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195,
      1198, 1201, 1240, 1243, 1246,
    ],
  },
  {
    url: fog,
    codes: [1030, 1135, 1147],
  },
  {
    url: thunder,
    codes: [1087, 1273, 1276, 1279, 1282],
  },
  {
    url: snow,
    codes: [
      1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
      1237, 1249, 1252, 1255, 1258, 1261, 1264,
    ],
  },
];

export default function getImage(responseCode) {
  let url;
  weatherCodes.forEach((condition) => {
    if (condition.codes.includes(responseCode)) {
      url = condition.url;
    }
  });
  return url;
}
