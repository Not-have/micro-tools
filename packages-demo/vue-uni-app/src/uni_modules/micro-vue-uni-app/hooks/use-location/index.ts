import {
  ComputedRef,
  computed,
  reactive
} from "vue";

interface IResult {
  latitude: number;
  longitude: number;
}

export default function useLocation(): ComputedRef<IResult> {
  const location = reactive({
    latitude: 39.91,
    longitude: 116.40
  });

  uni.getLocation({
    type: "gcj02",
    success: res => {
      Object.assign(location, res);
    },
    fail: err => {
      new Error("useLocation", err);
    }
  });

  return computed(() => ({
    latitude: location.latitude,
    longitude: location.longitude
  }));
}
