// Plain React (not @wordpress/element): this hook runs on the front end, where loading
// wp-element would add an extra script to every page with a card block.
import { useEffect, useRef } from "react";
import { getCardLayout } from "./Layouts";

/**
 * Runs the active layout's imperative enhancer, if it registered one.
 *
 * Layouts whose motion depends on the whole card list (rather than a single card) declare
 * an `enhance` in the layout registry; this hook is the single place that mounts them, so
 * no layout needs a special case in the render tree. Layouts without an enhancer - which
 * is all of the original ones - are a no-op.
 *
 * @param {Object} attributes Block attributes.
 * @return {Object} Ref to attach to the cards container.
 */
const useLayoutBehavior = (attributes) => {
  const containerRef = useRef(null);
  const { cardsLayout = {} } = attributes || {};
  const { style = "default" } = cardsLayout || {};

  const { enhance, signature } = getCardLayout(style);
  // Re-mounts the enhancer when something it caches (card count, motion settings) changes,
  // without churning on every unrelated attribute edit in the editor.
  const revision = enhance ? (signature?.(attributes) ?? "") : "";

  const attributesRef = useRef(attributes);
  attributesRef.current = attributes;

  useEffect(() => {
    if (!enhance || !containerRef.current) {
      return undefined;
    }

    return enhance(containerRef.current, attributesRef.current);
  }, [enhance, revision]);

  return containerRef;
};

export default useLayoutBehavior;
