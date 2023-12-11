import OW_Base from "./base/base";

class OW_FullScreen extends OW_Base {
  getDefaultSettings() {
    return {
      selectors: {
        sectionsWrapper: elementorFrontend.config.experimentalFeatures.e_dom_optimization ? "#oceanwp-fullpage .elementor" :  "#oceanwp-fullpage .elementor-section-wrap",
        sections: elementorFrontend.config.experimentalFeatures.e_dom_optimization ? "#oceanwp-fullpage .elementor > .elementor-section" : "#oceanwp-fullpage .elementor-section-wrap > .elementor-section",
        topSections: "#oceanwp-fullpage .elementor-top-section",
      },
      options: oceanwpLocalize,
    };
  }

  getDefaultElements() {
    const selectors = this.getSettings("selectors");

    return {
      sectionsWrapper: document.querySelector(selectors.sectionsWrapper),
      sections: document.querySelectorAll(selectors.sections),
      topSections: document.querySelectorAll(selectors.topSections),
      body: document.body,
    };
  }

  onInit() {
    super.onInit();

    if (this.isElementorEditorPage()) {
      return;
    }

    this.wrapSections();
    this.initFullPage();
  }

  wrapSections() {
    this.elements.sections.forEach(section => {
      const sectionWrapperId = `#${section.id}`;
      section.removeAttribute("id");
      section.outerHTML = `<div id="${sectionWrapperId}" class="wrap-section">${section.outerHTML}</div>`;
    });
  }

  initFullPage() {
    const selectors = this.getSettings("selectors");

    new fullpage(selectors.sectionsWrapper, this.getFullPageOptions());
  }

  getFullPageOptions() {
    const self = this;
    const options = this.getSettings("options");
    const selectors = this.getSettings("selectors");
    const sections = document.querySelectorAll(
      `${selectors.sectionsWrapper} > .wrap-section`
    );

    const fullPageOptions = {
      licenseKey: "2802F989-785845A8-B0E376B6-EA1BD751",
      sectionSelector: ".wrap-section",
      scrollOverflow: true,
      v2compatible: true,
      onLeave: (index, nextIndex, direction) => {
        const nextSection = sections[nextIndex - 1];

        if (direction === "down" || direction === "up") {
          self.setFullPageNavColor(nextSection);
        }
      },
      afterLoad: function (anchorLink, index) {
        const nextSection = this;

        if (nextSection.classList.contains("active")) {
          self.setFullPageNavColor(nextSection);
        }
      },
    };

    // Scrolling speed
    if (
      ("0" != options.ofcSpeed || "700" != options.ofcSpeed) &&
      "" != options.ofcSpeed
    ) {
      fullPageOptions.scrollingSpeed = options.ofcSpeed;
    }

    // Responsive
    if ("0" != options.ofcRes && "" != options.ofcRes) {
      fullPageOptions.responsiveWidth = options.ofcRes;
    }

    // If navigation
    if ("enable" == options.ofcNav) {
      // Tooltip
      var navTooltips = [];

      sections.forEach(topSection => {
        let sectionID = topSection.id.replace("#", "");

        if (sectionID) {
          sectionID = sectionID.replace(/[\-_]/g, " ");
          navTooltips.push(sectionID);
        } else {
          navTooltips.push(" ");
        }
      });

      // Anchors
      const anchors = [];
      document
        .querySelectorAll('.menu-item a[href*="#"]:not([href="#"])')
        .forEach(navLink => {
          const href = navLink.getAttribute("href").replace("#", "");
          if (anchors.indexOf(href) < 0) {
            anchors.push(href);
          }
        });

      // Settings
      fullPageOptions.menu = "#fp-nav";
      fullPageOptions.anchors = anchors;
      fullPageOptions.navigation = true;
      fullPageOptions.navigationPosition = options.ofcNavPos;
      fullPageOptions.navigationTooltips = navTooltips;
    }

    return fullPageOptions;
  }

  setFullPageNavColor(section) {
    for (const sectionChild of section.children) {
      this.elements.body.classList.remove("ofc-light-nav");
      this.elements.body.classList.remove("ofc-dark-nav");

      const children = sectionChild.children;

      const lightSection = Array.from(children).some(
        ({ classList }) =>
          classList.contains("elementor-top-section") &&
          classList.contains("light")
      );

      if (lightSection) {
        this.elements.body.classList.add("ofc-light-nav");
        break;
      }

      const darkSection = Array.from(children).some(
        ({ classList }) =>
          classList.contains("elementor-top-section") &&
          classList.contains("dark")
      );

      if (darkSection) {
        this.elements.body.classList.add("ofc-dark-nav");
        break;
      }
    }
  }

  isElementorEditorPage() {
    return this.elements.body.classList.contains("elementor-editor-active");
  }
}

("use script");
window.addEventListener("DOMContentLoaded", () => {
  new OW_FullScreen();
});
