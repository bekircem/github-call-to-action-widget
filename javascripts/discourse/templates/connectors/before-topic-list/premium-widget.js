export default {
  setupComponent(args, component) {
    component.set(
      "switchOutletToBeforeTopicList",
      settings.widget_location === "before_topic_list"
    );
  },
}; 