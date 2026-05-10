import { createRoot } from "react-dom/client";
import "./style.scss";

import Style from "./Components/Common/Style";
import Layout from "./Components/Common/Layout";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-phclb-cards-layout",
  );

  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);


    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />
        <Layout
          attributes={attributes}
          isEditor={false}
          onClick={() => {
            return true;
          }}
        />
      </>,
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
