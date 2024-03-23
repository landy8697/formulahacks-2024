import React, { useState, useEffect, useRef } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { useFonts, Inter_300Light } from "@expo-google-fonts/inter";
import * as Location from "expo-location";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Marker, Polyline, Circle } from "react-native-maps";

export default function LocationTest() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_300Light,
  });

  const apiUrl = process.env.EXPO_PUBLIC_GMAPS_API_KEY;

  const points = [
    { latitude: 30.2875797, longitude: -97.7361284 },
    { latitude: 30.2875835, longitude: -97.7361253 },
    { latitude: 30.2875683, longitude: -97.7360268 },
    { latitude: 30.2876097, longitude: -97.7362604 },
    { latitude: 30.2874269, longitude: -97.736857 },
    { latitude: 30.286803, longitude: -97.7372383 },
    { latitude: 30.2859446, longitude: -97.7372019 },
    { latitude: 30.284444, longitude: -97.7373534 },
    { latitude: 30.2835322, longitude: -97.7374887 },
  ];

  const times = [
    1711165196735, 1711165278074, 1711165320614, 1711165396304, 1711165452046,
    1711165532934, 1711165600728, 1711165697855, 1711165760834,
  ];

  const camera = {
    center: {
      latitude: 30.2875754,
      longitude: -97.736096,
    },

    zoom: 15,
  };

  const mapRef = useRef(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, setText] = useState("Waiting...");
  const [hasPermission, setHasPermission] = useState(false);

  const haversine_distance = (mk1, mk2) => {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.latitude * (Math.PI / 180); // Convert degrees to radians
    var rlat2 = mk2.latitude * (Math.PI / 180); // Convert degrees to radians
    var difflat = rlat2 - rlat1; // Radian difference (latitudes)
    var difflon = (mk2.longitude - mk1.longitude) * (Math.PI / 180); // Radian difference (longitudes)

    var d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2),
        ),
      );
    return d;
  };

  const updateLocation = async () => {
    if (!hasPermission) return;

    let location = await Location.getCurrentPositionAsync({});

    if (errorMsg) {
      setText(errorMsg);
    } else if (location) {
      setText(JSON.stringify(location));
    } else setText(Math.random());

    setLocation(location);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      setHasPermission(true);
    })();
  }, []);

  useEffect(() => {
    if (!hasPermission) return;

    const interval = setInterval(() => {
      updateLocation();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [hasPermission]);

  if (!fontsLoaded && !fontError) {
    return <View style={styles.container}></View>;
  }
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsTraffic={true}
        showsIndoors={true}
        showsIndoorLevelPicker={true}
        onMapReady={() => {
          mapRef.current.setCamera(camera);
        }}
      >
        {points.map((coords, i) => {
          return (
            <Marker
              key={i}
              coordinate={coords}
              strokeWidth={2}
              image={require("../assets/path-vertex.png")}
              anchor={{ x: 0.5, y: 0.5 }}
              flat={true}
              title={`${(i === 0 ? 0 : haversine_distance(points[i], points[i - 1]) / ((times[i] - times[i - 1]) / (1000 * 3600))).toFixed(2)} mph\n`}
            />
          );
        })}
        <Polyline
          coordinates={points}
          geodesic={true}
          strokeColor="#FF9A4D"
          strokeWidth={5}
        />
      </MapView>
      <Text style={styles.paragraph}>
        {`lat ${location?.coords.latitude}\nlong ${location?.coords.longitude}\nspeed ${location?.coords.speed}\naccuracy ${location?.coords.accuracy}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FF9A4D",
    padding: 15,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 10,
    borderRadius: 40,
    fontSize: 20,
    fontFamily: "Inter_300Light",
  },
  paragraph: {
    fontSize: 20,
    fontFamily: "Inter_300Light",
    height: "50%",
  },
  map: { width: "100%", height: "50%" },
});
