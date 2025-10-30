import style from "./mainBtn.module.css"

function MainBtn({ btnType, name, actionFunction }) {
  return (
    <>
      <div className={style.btn}>
        <button type={btnType} onClick={() => actionFunction()}>
          {name}
        </button>
      </div>
    </>
  );
}

export default MainBtn;