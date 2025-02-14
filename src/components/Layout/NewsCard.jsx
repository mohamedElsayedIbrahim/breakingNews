import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faPen } from '@fortawesome/free-solid-svg-icons';

export default function NewsCard(props) {
  const {title,author,urlToImage,source,description} = props.article;
  return (
    <div className="card-news">
      <div style={{maxHeight:"140px"}} className='position-relative overflow-hidden'>
        <img src={urlToImage} alt={title}  className='w-100'/>
        <h2 className='fs-6 py-2 position-absolute start-0 bottom-0 bg-body-secondary w-100 text-truncate mb-0 px-2 bg-opacity-75'>{title}</h2>
      </div>
      <p className='px-2'>
        {description?.slice(0,40)??'N/A'}
      </p>
      <div className='info'>
        <ul className='list-unstyled d-flex gap-2'>
          <li className='text-truncate'>
            <FontAwesomeIcon icon={faPen} /> {author??'N/A'}
          </li>
          <li className='text-truncate'>
            <FontAwesomeIcon icon={faGlobeAfrica} /> {source.name}
          </li>
        </ul>
      </div>
    </div>
  )
}
