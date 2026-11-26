import { TextareaControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { renderControl } from '../../../../../utils/functions';

const Content = ({ isContent, img, title, desc, updateCard, premiumProps, isProTheme }) => {

  const controlBase = { premiumProps, isProTheme };
  return (
    <>
      {
        renderControl({
          Component: TextControl,
          props: {
            label: __("Title", "cards-layout"),
            labelPosition: __("top", "cards-layout"),
            value: isContent ? img?.title : title,
            placeholder: __("Enter Title", "cards-layout"),
            onChange: (val) => updateCard("title", val),
          },
          ...controlBase,
        })
      }

      {
        renderControl({
          Component: TextareaControl,
          props: {
            label: __("Description", "cards-layout"),
            labelPosition: __("top", "cards-layout"),
            value: isContent ? img?.caption : desc,
            placeholder: __("Enter desc", "cards-layout"),
            onChange: (val) => updateCard("desc", val),
          },
          ...controlBase,
        })
      }
    </>
  );
};

export default Content;
