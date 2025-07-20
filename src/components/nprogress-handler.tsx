import { useEffect } from "react";
import { useNavigation } from "react-router"; // kamu pakai react-router (bukan dom)
import NProgress from "nprogress";

export default function NProgressHandler() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "loading") {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);

  return null;
}
