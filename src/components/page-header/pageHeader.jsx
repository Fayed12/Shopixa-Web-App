import style from "./pageHeader.module.css"

function PageHeader({title, type}) {
    return (
      <>
        <div className={style.pageHeader}>
          <span className={style.type}>{type}</span>
          <h1 className={style.title}>{title}</h1>
        </div>
      </>
    );
}

export default PageHeader;