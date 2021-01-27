import s from './style.module.css'


const Layout = ({title, id, descr, urlBg, colorBg}) => {
    const bg = `url(${urlBg})`;
    return (
        <section className={s.root} id={id} style={{background: bg}}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className="desc full">
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;