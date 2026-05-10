import { getBoxValue } from "../../../../bpl-tools/utils/functions";
import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getColorsCSS,
  getMultiShadowCSS,
  getTypoCSS,
  isValidCSS,
} from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const {
    columnGap,
    rowGap,
    title,
    desc,
    btn = {},
    cardStyle,
    img,
    baseCard = {},
    iconWrap = {},
    cardTag = {},
    heroFeatureCardEle = {},
    achievement = {},
  } = attributes;

  const { options = {}, styles = {} } = heroFeatureCardEle || {};
  const mainSl = `#${id}`;
  const singleCard = `${mainSl} .phclbCardsLayoutBlock .cardMainArea .singleCard`;
  const baseCardSl = `${singleCard} .phclb-card`;
  const iconWrapSl = `${baseCardSl} .card-icon-wrap`;
  const heroFeatureCardSl = `${baseCardSl}.hero-feature-card`;
  const achievementCardSl = `${baseCardSl}.achievement-card`;
  const cardTagSl = `${baseCardSl} .card-tag`;


  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
  
        ${getTypoCSS("", title?.typo)?.googleFontLink}
        ${getTypoCSS("", desc?.typo)?.googleFontLink}
        ${getTypoCSS("", btn?.typo)?.googleFontLink}
        ${getTypoCSS("", cardTag?.typo)?.googleFontLink}
        ${getTypoCSS("", styles?.badge?.typo)?.googleFontLink}
        ${getTypoCSS("", achievement?.achValue?.typo)?.googleFontLink}
        ${getTypoCSS(`${singleCard} .title h2, ${singleCard} .title h3`, title?.typo)?.styles}
        ${getTypoCSS(cardTagSl, cardTag?.typo)?.styles}
        ${getTypoCSS(`${singleCard} .desc p`, desc?.typo)?.styles}
        ${getTypoCSS(`${singleCard} .btnArea a`, btn?.typo)?.styles}
        ${getTypoCSS(
          `${heroFeatureCardSl} .hero-img .badge-float`,
          styles?.badge?.typo,
        )?.styles
          }
        ${getTypoCSS(
            `${heroFeatureCardSl} .hero-img .stat-float .num`,
            styles?.stat?.num?.typo,
          )?.styles
          }
        ${getTypoCSS(
            `${heroFeatureCardSl} .hero-img .stat-float .lbl`,
            styles?.stat?.lbl?.typo,
          )?.styles
          }
       
        ${getTypoCSS(
            `${achievementCardSl} .ach-value`,
            achievement?.achValue?.typo,
          )?.styles
          }
        ${achievementCardSl} .ach-value {
            ${getBackgroundCSS(achievement?.achValue?.bg)}
            ${achievement?.achValue?.bg?.color || achievement?.achValue?.bg?.gradient || achievement?.achValue?.bg?.type === 'gradient' ? `
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
            ` : ""}
        }


         
        ${mainSl} .phclbCardsLayoutBlock .cardMainArea{
            grid-gap: ${rowGap} ${columnGap};
        }
    
        ${singleCard} {
          ${isValidCSS("padding", getBoxCSS(cardStyle?.padding))}
            ${getBorderCSS(cardStyle?.borders)};
            border-radius:${cardStyle?.radius}px;
        }
  
        ${singleCard} .content{
            text-align:${cardStyle?.align};
        }
  
        ${singleCard} .img{
            border-radius:${img?.radius}px;
        }
  
        ${singleCard} .title h2, ${singleCard} .title h3 {
            color: ${title?.color};
        }

  
        ${singleCard} .desc p {
            color: ${desc?.color};
        }

        ${singleCard} .btnArea a {
            ${getColorsCSS(btn?.colors)};
            padding:${getBoxValue(btn?.padding)};
            ${getBorderCSS(btn?.borders)};
            border-radius:${btn?.radius}px;
        }
		
		 ${baseCardSl} {
       ${getBackgroundCSS(baseCard?.bg)}
		   padding:${getBoxCSS(baseCard?.padding)};
		   ${getBorderCSS(baseCard?.borders)};
		   border-radius:${baseCard?.radius}px;
       box-shadow:${getMultiShadowCSS(baseCard?.shadows?.normal)};
        }
		
		${baseCardSl}:hover{
			box-shadow:${getMultiShadowCSS(baseCard?.shadows?.hover)};
		}

    ${cardTagSl} {
    color: ${cardTag?.color};
    }
	
		${iconWrapSl} {
			${getBackgroundCSS(iconWrap?.bg)}
			border-radius:${iconWrap?.radius}%;
			${getBorderCSS(iconWrap?.borders)};
			width:${iconWrap?.size}px;
			height:${iconWrap?.size}px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		${iconWrapSl} svg, ${iconWrapSl} img {
			width:${iconWrap?.size}px;
			height:${iconWrap?.size}px;
			color:${iconWrap?.color};
		}
   
    ${options?.isShowOverlay
            ? `${heroFeatureCardSl} .hero-img .img-overlay {
      background: linear-gradient(
        135deg,
        rgba(99, 102, 241, 0.4) 0%,
        rgba(6, 182, 212, 0.3) 100%
      );
    }`
            : ""
          }


    ${options?.isShowPattern
            ? `   ${heroFeatureCardSl} .hero-img .img-pattern {
      background-image: radial-gradient(
        circle at 20% 50%,
        rgba(99, 102, 241, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(6, 182, 212, 0.3) 0%,
        transparent 50%
      );
    }`
            : ""
          }
  
 
    ${heroFeatureCardSl} .hero-img .badge-float {
      ${getColorsCSS(styles?.badge?.colors)};
      ${isValidCSS("padding", getBoxCSS(styles?.badge?.padding))}
      ${getBorderCSS(styles?.badge?.borders)};
      border-radius: ${styles?.badge?.radius}px;
    }

    ${heroFeatureCardSl} .hero-img .stat-float {
      ${getBackgroundCSS(styles?.stat?.bg)}
      ${isValidCSS("padding", getBoxCSS(styles?.stat?.padding))}
      ${getBorderCSS(styles?.stat?.border)}
      border-radius: ${styles?.stat?.radius}px;
    }

    ${heroFeatureCardSl} .hero-img .stat-float .num {
      color: ${styles?.stat?.num?.color};
    }
    ${heroFeatureCardSl} .hero-img .stat-float .lbl {
      color: ${styles?.stat?.lbl?.color};
    }
    

    ${achievementCardSl} .ach-badge {
        ${getBackgroundCSS(achievement?.badge?.bg)}
        ${achievement?.badge?.size ? `width: ${achievement?.badge?.size} !important; height: ${achievement?.badge?.size} !important;` : ''}
        ${achievement?.badge?.shadow ? `box-shadow: ${getMultiShadowCSS(achievement?.badge?.shadow)} !important;` : ''}
      
    }

    ${achievementCardSl} .ach-badge::after{
        ${getBorderCSS(achievement?.badge?.borders)}
        ${achievement?.isAnimation === false ? `animation: none !important;` : ''}
        ${achievement?.animSpeed ? `animation-duration: ${achievement.animSpeed}s !important;` : ''}
    }
    
    `.trim(),

      }}
    />
  );
};

export default Style;
