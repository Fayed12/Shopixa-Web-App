// local
import style from "./footer.module.css"

function Footer() {
    return (
      <>
        <div className={style.footer}>
          <div className="container flex justify-center items-center">
            <p>
              &copy; All right reserved shopixa 2025 , by{" "}
              <span>Mohamed Fayed</span>
            </p>
          </div>
        </div>
      </>
    );
}

export default Footer;