module.exports = ({ config }) => {
  config.ios.config.googleMapsApiKey = process.env.EXPO_PUBLIC_GMAPS_API_KEY;
  // config.extra.eas.projectId = "7b11677d-0a8a-4ef8-abc2-61b6062e62bd";

  return config;
};
