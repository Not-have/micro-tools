interface ISensor {

  /**
   * 传感器支持
   */
  accelerometer: boolean;

  /**
   * 加速度计支持
   */
  gyroscope: boolean;

  /**
   * 磁力计支持
   */
  magnetometer: boolean;

  /**
   * 环境光传感器
   */
  ambientLight: boolean;

  /**
   * 气压计支持
   */
  barometer: boolean;
}

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
