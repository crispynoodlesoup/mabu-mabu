import shopStyle from "./shop.module.css";
import ContentBubble from "../contentBubble/ContentBubble.jsx";
import PageHeader from "../pageHeader/PageHeader.jsx";

function Shop() {
  return (
    <>
      <PageHeader text={"THE SHOP"} />
      <main className={shopStyle.gridWrapper}>
        <ContentBubble>
            <h2>Explore Our Selection!</h2>
            <p>
            Check out our awesome dessert selection below, and order as many as you want!
            </p>
        </ContentBubble>
      </main>
    </>
  );
}

export default Shop;
