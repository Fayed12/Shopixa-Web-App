import Countdown from "../../components/countDown";
import MainBtn from "../../components/main-button/mainBtn";
import PageHeader from "../../components/page-header/pageHeader";
import MySlider from "../../components/swiper/swiper";
import style from "./landing.module.css";

function Home() {
  function message() {
    alert("hello");
  }
  return (
    <>
      <div className={style.home}>
        <div className={style.overview}>
          <MySlider />
        </div>
        <div className={style.flashSales}>
          <div className="flex justify-between items-center">
            <PageHeader title={"Flash Sales"} type={"Today's"} />
            <Countdown />
          </div>
          <div className="products"></div>
          <div className="flex justify-center items-center">
            <MainBtn
              btnType={"button"}
              name={"View All Products"}
              actionFunction={message}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
