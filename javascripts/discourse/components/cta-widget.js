import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CtaWidget extends Component {
  @service siteSettings;

  get shouldDisplay() {
    const location = this.siteSettings.widget_location;
    return (
      (location === "after-topic-list" && this.args.tagName === "after-topic-list") ||
      (location === "above-main-container" && this.args.tagName === "above-main-container")
    );
  }
} 