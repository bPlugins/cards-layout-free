import { InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { withSelect } from "@wordpress/data";

// Settings Components
import { tabController } from "../../../../../bpl-tools/utils/functions";
import { generalStyleTabs } from "../../../utils/options";
import General from "./General/General";
import Style from "./Style/Style";
import { BBlocksAds } from "../../../../../bpl-tools/Components";
import BlockControl from "./General/Element/BlockControl";
import { compose } from "@wordpress/compose";

// "About Pro" modal opened by locked controls: Pro build only (the free build has no locks).
const ProModal = PHCLB_PRO ? require("../../../pro/editor").ProModal : null;


const Settings = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
  isPremium,
  isProModalOpen,
  setIsProModalOpen,
  siteUrl,
}) => {

  const premiumProps = { isPremium, setIsProModalOpen };
  const siteLocation = `${siteUrl}/wp-admin/edit.php?post_type=cards-layout&page=demo_page#/pricing`;



  // update object
  const updateObject = (attr, key, val) => {
    const newAttr = { ...attributes[attr] };
    newAttr[key] = val;
    setAttributes({ [attr]: newAttr });
  };

  const generalProps = {
    attributes,
    setAttributes,
    updateObject,
    activeIndex,
    setActiveIndex,
    premiumProps,
  };

  return (
    <>
      <InspectorControls>
        <div className="bPlInspectorInfo">
          <BBlocksAds />
        </div>

        <TabPanel
          className="bPlTabPanel"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <>
                  <General {...generalProps} />
                </>
              )}

              {"style" === tab.name && (
                <>
                  <Style {...{ attributes, setAttributes, updateObject, premiumProps }} />
                </>
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>
      <BlockControl {...{ attributes, setAttributes, isPro: isPremium }} />
      {PHCLB_PRO && (
        <ProModal
          isProModalOpen={isProModalOpen}
          setIsProModalOpen={setIsProModalOpen}
          siteLocation={siteLocation}
        />
      )}
    </>
  );
};
export default compose(
  withSelect((select) => {
    return {
      siteUrl: select("core").getSite()?.url,
    };
  }),
)(Settings);
