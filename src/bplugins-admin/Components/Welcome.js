import Overview from "../../../../bpl-tools/Admin/Overview";
import Changelog from "../../../../bpl-tools/Admin/Changelog";
import ProAds from "../../../../bpl-tools/Admin/ProAds";
// import Card from '../../../../bpl-tools/Admin/Blocks/Card';
// import blocks from '../utils/blocks';

const Welcome = (props) => {


  return (
    <Overview {...props}>
      {/* <Card {...props} allBlocks={blocks} /> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(480px, 100%), 1fr))",
          gap: "32px",
        }}
      >
        <Changelog {...props} />

        {<ProAds {...props} />}
      </div>
    </Overview>
  );
};
export default Welcome;
