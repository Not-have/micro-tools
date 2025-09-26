import {
  ISensor
} from "./types";

/**
 * 🎯 传感器信息 (Sensor APIs)
 */
export default function deviceSensor(): ISensor {
  return {
    accelerometer: "Accelerometer" in window,
    gyroscope: "Gyroscope" in window,
    magnetometer: "Magnetometer" in window,
    ambientLight: "AmbientLightSensor" in window,
    barometer: "Barometer" in window
  };
}
