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



const Settings = ({
  attributes,
  setAttributes,
  activeIndex,
  setActiveIndex,
}) => {


  // const siteLocation = `${siteUrl}/wp-admin/edit.php?post_type=cards-layout&page=demo_page#/pricing`;



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
                  <Style {...{ attributes, setAttributes, updateObject }} />
                </>
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>
      <BlockControl {...{ attributes, setAttributes }} />

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
