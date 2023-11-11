import contentBubbleStyle from "./contentBubble.module.css";

// eslint-disable-next-line
function ContentBubble({ children }) {
  return (
    <div className={contentBubbleStyle.shadow}>
      <div className={contentBubbleStyle.bubble}>
        <div className={contentBubbleStyle.contentWrapper}>
            {children}
        </div>
      </div>
    </div>
  );
}

export default ContentBubble;
