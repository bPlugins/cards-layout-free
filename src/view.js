import { createRoot } from "react-dom/client";
import "./style.scss";

import Style from "./Components/Common/Style";
import Layout from "./Components/Common/Layout";
import { resolveLayout } from "./Components/Common/Layouts";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-phclb-cards-layout",
  );

  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    const isPremium = blockNameEl.dataset.isPremium === "true";

    // A Pro layout that isn't available is shown with the Default layout, never locked.
    const { attributes: renderAttributes } = resolveLayout(attributes, { isPremium });

    createRoot(blockNameEl).render(
      <>
        <Style attributes={renderAttributes} id={blockNameEl.id} />
        <Layout
          attributes={renderAttributes}
          isEditor={false}
          onClick={() => {
            return true;
          }}
        />
      </>,
    );

    blockNameEl?.removeAttribute("data-attributes");
    blockNameEl?.removeAttribute("data-is-premium");
  });
});
