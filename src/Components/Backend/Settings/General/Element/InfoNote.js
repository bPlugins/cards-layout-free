import { Notice } from "@wordpress/components";
import { useState } from "react";

const InfoNote = ({ children, status = "info", isDismissible = false }) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Notice
      className="offcanvas-block-info-note"
      status={status}
      isDismissible={isDismissible}
      onDismiss={() => setShow(false)}
    >
      {children}
    </Notice>
  );
};

export default InfoNote;
