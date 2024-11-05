export default defineAppConfig({
  apiUrl: "https://api.adler-lingenau.com/wp-json/wp/v2/",
  title: "Adler Lingenau",
  address: {
    street: "Hof 43",
    postalCode: "6951",
    city: "Lingenau",
    country: "austria",
    region: "Vorarlberg",
    province: "Bregenzerwald",
    phoneNumber: "+43-(0)5513-63670",
    emailAddress: "info@adler-lingenau.com",
    longitude: 47.450565,
    latitude: 9.922004,
    directionsUrl: "https://www.google.com/maps?daddr=Hof%2043%20Lingenau",
  },
  facilities: { kids: {
    title: 'forKids',
    icon: 'child',
    list: [
      'playground',
      'childrensPlayroom',
      'dayCare',
      'bowlingAlley',
      'childrensMenu',
      'childFriendlyRestaurant',
      'babyEquipment',
      'childrensProgram',
      'hikingTrailsForChildren',
    ],
  },
  rooms: {
    title: 'ourRooms',
    icon: 'bed',
    list: ['singleRooms', 'doubleRooms', 'familyRooms'],
  },
  extras: {
    title: 'extras',
    icon: 'ticket',
    list: [
      'areaCard',
      'freeTransport',
      'valleyPass',
      'skiPackages',
      'babyWeeks',
    ],
  },
  environment: {
    title: 'environment',
    icon: 'mountain',
    list: [
      'skiAreas',
      'cableCars',
      'outdoorPools',
      'childrensProgramsInSurroundings',
      'walkingPaths',
    ],
  },    }
});
