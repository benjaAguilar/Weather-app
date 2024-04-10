/* eslint-disable consistent-return */
async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(Error('location not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve(pos),
        (error) => reject(Error(`Error obtaining your location ${error}`)),
      );
    }
  });
}

export default async function getCoords() {
  try {
    const pos = await getUserLocation();
    return [pos.coords.latitude, pos.coords.longitude];
  } catch (error) {
    console.log(error);
  }
}
