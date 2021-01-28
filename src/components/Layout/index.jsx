import s from './style.module.css'


const Layout = ({title, id, descr, urlBg, colorBg}) => {
    return (
        <section 
            className={s.root} 
            id={id} 
            style={{
                background: `url(${urlBg})`, 
                backgroundColor: colorBg, 
                backgroundSize: 'cover'
            }}
        >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc + ' ' + s.full}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;