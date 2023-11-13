var classNames = require('classnames');

export default function Toolbar (props) {

  const { filters, selected, onSelectFilter } = props;

  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        {filters.map((filter, index) => {
          const anClass = classNames({
            'nav-link': true,
            active: filter === selected,
          });

          return (
            <li className='nav-item'>
              <a href="#0" className={anClass} onClick={() => onSelectFilter(filter)}>
                {filter}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}