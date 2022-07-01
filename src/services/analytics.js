import { getAnalytics, logEvent } from "firebase/analytics";
import { app } from "./firebase";

// Initialize Analytics and get a reference to the service
const analytics = getAnalytics(app);

const logAnalyticsEvent = (eventName, eventParams) => {
  logEvent(analytics, eventName, eventParams);
};

export { logAnalyticsEvent };
