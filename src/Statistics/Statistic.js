import css from './Statistic.module.css'

const Statistic = ({title, stats}) => {
    return (
        
   <section className="statistics">
   {title && <h2 className={css.title}>{title}</h2>}
     { 
     stats.map(({id, label, percentage}) => {
        return (
            <ul className="stat-list" key={id}>
            <li className="item" >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          </ul>
        )

      })
}
</section>

    )
}

export default Statistic