const apiKey = 'gRGXX5iO9hy1dwqDE5ywqc91fFyAnbyTpjpzIpedrlNiwZOriXsk8B0vTYKMEfmeLyegOYOr-WsMODXZF5mIolDN5nrKAQvOztxla-cQWF7TNz7nxQOlK4sbBPDjXHYx';
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
      Authorization: `Bearer ${apiKey}`
      }
    }).then(jsonResponse => {
      if(jsonResponse.businesses) {
        jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.imageSrc,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.reviewCount
            }
        });
      }
    });
  },

};


export default Yelp;