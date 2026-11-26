import { useState, useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { produce } from "immer";
import { tabController } from "../../../../bpl-tools/utils/functions";
import "../../editor.scss";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Layout from "../Common/Layout";
import { resolveLayout } from "../Common/Layouts";
import ProLayoutNotice from "./ProLayoutNotice";
import ClipBoard from '../../shortcode/clipBoard';
import { withSelect } from "@wordpress/data";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, postType, postId, isSelected } = props;
  const { items } = attributes;
  const { isPremium } = window?.phclbPremiumProps || {};

  // What this block looks like: a Pro layout that isn't part of this build shows as Default.
  // An unlicensed Pro layout is still previewed here; the notice explains what visitors see.
  const {
    attributes: renderAttributes,
    style: savedStyle,
    isFallback,
    isLocked,
  } = resolveLayout(attributes, { isPremium, isEditor: true });

  const [isProModalOpen, setIsProModalOpen] = useState(false);
  useEffect(() => tabController(), [isSelected]);

  const [activeIndex, setActiveIndex] = useState(0);

  const updateItem = (type, val, childType = false) => {
    const newItems = produce(items, (draft) => {
      if (childType) {
        draft[activeIndex][type][childType] = val;
      } else {
        draft[activeIndex][type] = val;
      }
    });
    setAttributes({ items: newItems });
  };

  return (
    <>
      <Settings
        {...{
          attributes,
          setAttributes,
          updateItem,
          activeIndex,
          setActiveIndex,
          isPremium,
          isProModalOpen,
          setIsProModalOpen,
        }}
      />

      {postType == "cards-layout" && (
        <ClipBoard shortcode={`[${postType} id=${postId}]`} />
      )}

      <div {...useBlockProps()} id={`phclbCardsBlocks-${clientId}`}>
        {(isFallback || isLocked) && <ProLayoutNotice style={savedStyle} isFallback={isFallback} />}
        <Style attributes={renderAttributes} id={`phclbCardsBlocks-${clientId}`} />
        <Layout
          attributes={renderAttributes}
          isEditor={true}
          activeIndex={activeIndex}
          onClick={(index) => setActiveIndex(index)}
        />
      </div>
    </>
  );
};
export default withSelect((select) => {
  const { getDeviceType, getCurrentPostId, getCurrentPostType } =
    select("core/editor");
  return {
    device: getDeviceType()?.toLowerCase(),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
  };
})(Edit);