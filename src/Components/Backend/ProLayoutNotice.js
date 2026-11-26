import { ExternalLink, Notice } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

// Pro build only: the notice shown while the Pro license is inactive.
const LicenseNotice = PHCLB_PRO ? require("../../pro/LicenseNotice").default : null;

/**
 * Editor-only note shown above a block whose Pro layout isn't shown to visitors.
 *
 * - isFallback: the layout isn't part of this plugin (free version), so the block is shown with
 *   the Default layout here and on the site.
 * - otherwise (Pro installed, license not active): the editor still previews the Pro layout,
 *   but visitors see the Default layout.
 */
const ProLayoutNotice = ({ style, isFallback }) => {
  if (LicenseNotice && !isFallback) {
    return <LicenseNotice style={style} />;
  }

  return (
    <Notice className="phclbProLayoutNotice" status="warning" isDismissible={false}>
      {__(
        "This section was built with a Cards Layout Pro layout. Without Cards Layout Pro it is shown with the Default layout, here and on your site.",
        "cards-layout",
      )}{" "}
      <ExternalLink href="https://bplugins.com/products/cards-layout/pricing/">
        {__("Get Cards Layout Pro", "cards-layout")}
      </ExternalLink>
    </Notice>
  );
};

export default ProLayoutNotice;
