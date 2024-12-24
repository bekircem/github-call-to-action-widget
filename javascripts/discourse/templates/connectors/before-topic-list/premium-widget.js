import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  setupComponent(args, component) {
    withPluginApi("0.8.31", api => {
      component.set(
        "switchOutletToBeforeTopicList",
        api.container.lookup("service:theme-settings").get("widget_location") === "before_topic_list"
      );
    });
  },
}; 