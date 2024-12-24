import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  setupComponent(args, component) {
    withPluginApi("0.8.31", api => {
      component.set(
        "switchOutletToAfterTopicList",
        api.container.lookup("service:theme-settings").get("widget_location") === "after_topic_list"
      );
    });
  },
}; 