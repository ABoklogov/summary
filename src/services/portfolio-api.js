import axios from '@/utils/axios';

// получает все данные
async function fetchAllPortfolio() {
  const { data } = await axios.get('/portfolio');
  return data;
};
// links server
async function changeLinkServer(linkServer, id) {
  const { data } = await axios.patch(`/portfolio/links/${id}/server`, { linkServer });
  return data;
};
// links client
async function changeLinkClient(linkClient, id) {
  const { data } = await axios.patch(`/portfolio/links/${id}/client`, { linkClient });
  return data;
};


const API = {
  fetchAllPortfolio,
  changeLinkServer,
  changeLinkClient,
};
export default API;
