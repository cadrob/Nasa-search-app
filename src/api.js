import axios from "axios";

export const searchAll = async (keywords, type) => {
  const { data } = await axios.get(
    `https://images-api.nasa.gov/search?keywords=${keywords}&media_type=${type}`
  );
  return data.collection.items.map(item => {
    let preview = "";
    if (type === "audio") preview = item.data[0].title;
    else preview = item.links[0].href;
    return {
      nasa_id: item.data[0].nasa_id,
      preview,
      type
    };
  });
};

export const getAssetById = async asset_id => {
  const { data } = await axios.get(
    `https://images-api.nasa.gov/search?nasa_id=${asset_id}`
  );
  return data.collection.items[0];
};

export const getJSONdata = async href => {
  const { data } = await axios.get(href);
  return data;
};
