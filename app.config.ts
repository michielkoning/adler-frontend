export default defineAppConfig({
  apiUrl: "https://api.adler-lingenau.com/wp-json/",
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
  pageIds: {
    homePageId: {
      de: 22,
      nl: 3098,
      en: 3100,
    },
    hotelPageId: {
      de: 10,
      nl: 3063,
      en: 3102,
    },
    arrangementsPageId: {
      de: 3352,
      nl: 3062,
      en: 3106,
    },
    roomsPageId: {
      de: 1718,
      nl: 3065,
      en: 3109,
    },
    blogPageId: {
      de: 26,
      nl: 3112,
      en: 3113,
    },
    contactPageId: {
      de: 14,
      nl: 3064,
      en: 3081,
    },
    environmentPageId: {
      de: 2003,
      nl: 3125,
      en: 3127,
    },
    privacyPageId: {
      de: 2261,
      nl: 3071,
      en: 3084,
    },
    kidsPageId: {
      de: 3668,
      nl: 3714,
      en: 3725,
    },
    lastMinutePageId: {
      de: 4064,
      nl: 4105,
      en: 4107,
    }
  },
  facilities: {
    kids: {
      title: "forKids",
      icon: "child",
      list: [
        "playground",
        "childrensPlayroom",
        "dayCare",
        "bowlingAlley",
        "childrensMenu",
        "childFriendlyRestaurant",
        "babyEquipment",
        "childrensProgram",
        "hikingTrailsForChildren",
      ],
    },
    rooms: {
      title: "ourRooms",
      icon: "bed",
      list: ["singleRooms", "doubleRooms", "familyRooms"],
    },
    extras: {
      title: "extras",
      icon: "ticket",
      list: [
        "areaCard",
        "freeTransport",
        "valleyPass",
        "skiPackages",
        "babyWeeks",
      ],
    },
    environment: {
      title: "environment",
      icon: "mountain",
      list: [
        "skiAreas",
        "cableCars",
        "outdoorPools",
        "childrensProgramsInSurroundings",
        "walkingPaths",
      ],
    },
  }
})