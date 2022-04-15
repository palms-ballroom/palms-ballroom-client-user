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

export const getBallroomDataByCity = async (geoId, sw, ne) => {
  try {
    const {data: {data}} = await axios({
      method: 'POST',
      url: 'https://travel-advisor.p.rapidapi.com/hotels/v2/list',
      params: {currency: 'IDR', units: 'km', lang: 'id_ID'},
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        'X-RapidAPI-Key': 'cea445aa20msh49cfcff77a74b62p179ac1jsn5528ae435605'
      },
      data: `{"geoId":${geoId},"checkIn":"2022-03-10","checkOut":"2022-03-15","sort":"PRICE_LOW_TO_HIGH","sortOrder":"desc","filters":[{"id":"type","value":["9189"]},{"id":"class","value":["9572"]},{"id":"style","value":["9650"]}],"rooms":[{"adults":2,"childrenAges":[2]},{"adults":2,"childrenAges":[3]}],"boundingBox":{"northEastCorner":{"latitude":${ne.lat},"longitude":${ne.lng}},"southWestCorner":{"latitude":${sw.lat},"longitude":${sw.lng}}},"updateToken":""}`
    });
    const filtered = data.AppPresentation_queryAppListV2[0].sections.filter(el => el.__typename === 'AppPresentation_SingleCard');
    return filtered;
  } catch (error) {
    console.log(error);
  }
};