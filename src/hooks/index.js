import axios from 'axios'

export const getBallroomDataAround = async (sw, ne) => {
  try {
    const response = await axios({
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary",
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        limit: "30",
        currency: "IDR",
        subcategory: "hotel",
        zff: "102",
        hotel_class: "5",
      },
      headers: {
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'cea445aa20msh49cfcff77a74b62p179ac1jsn5528ae435605'
      }
    });

    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
