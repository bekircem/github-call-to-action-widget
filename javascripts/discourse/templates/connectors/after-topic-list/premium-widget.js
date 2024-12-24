export default {
  setupComponent(args, component) {
    component.set(
      "switchOutletToAfterTopicList",
      settings.widget_location === "after_topic_list"
    );
  },
}; 