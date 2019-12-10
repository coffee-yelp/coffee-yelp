///////////////////// IGNORE //////////////////////////////

//   I was testing stuff out and I might comeback to it


// import axios from 'axios'

// const yelpApiKey = 'yelp-key';


// const api = axios.create({
// 	baseURL: 'https://api.yelp.com/v3',
// 	headers: {
// 		Authorization: `Bearer ${yelpApiKey}`
// 	}
// });

// export const getCoffeeShops = (userLocation, filter = {}) => {
// 	return api
// 		.get('/businesses/search', {
// 			params: {
// 				limit: 10,
// 				categories: 'coffee,coffeeroasteries,coffeeshops',
// 				...userLocation,
// 				...filter
// 			}
// 		})
// 		.then(res =>
// 			res.data.businesses.map(business => {
// 				return {
// 					name: business.name,
// 					coords: business.coordinates
// 				};
// 			})
// 		)
// 		.catch(error => console.error(error));
// };

// export default {
// 	getCoffeeShops
// };
