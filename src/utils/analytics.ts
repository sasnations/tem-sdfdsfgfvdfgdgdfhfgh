// Analytics utility functions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (window.clarity) {
    window.clarity("event", eventName, properties);
  }
};

export const setUserData = (userId: string, properties?: Record<string, any>) => {
  if (window.clarity) {
    window.clarity("identify", userId, properties);
  }
};

export const startTracking = () => {
  if (window.clarity) {
    window.clarity("start");
  }
};

export const stopTracking = () => {
  if (window.clarity) {
    window.clarity("stop");
  }
};