const settings = require("discourse/lib/theme-settings-store").getObjectForTheme(settings);

export default function initializeWidgetLocation(api) {
  const location = settings.widget_location;
  
  if (location === "after-topic-list") {
    api.registerConnectorClass("after-topic-list", "cta-button", {
      setupComponent() {
        this.set("showWidget", true);
      }
    });
  }
  
  if (location === "above-main-container") {
    api.registerConnectorClass("above-main-container", "cta-button", {
      setupComponent() {
        this.set("showWidget", true);
      }
    });
  }
} 