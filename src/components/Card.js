export default function Card(props) {
  console.log(props.item);
  return (
    <>
      <div className='card'>
        <img className='card-img' src={props.item.imageUrl} alt='' />
        <div className='card-body'>
          <div className='card-heading'>
            <span className='locator-tag'>
              <i className='fa fa-map-marker' aria-hidden='true'></i>
            </span>
            <span className='location'>
              {props.item.location.toUpperCase()}
            </span>
            <a
              className='map-link'
              href={props.item.googleMapsUrl}
              target='_blank'
              rel='noreferrer noopener'
            >
              View on Google Maps
            </a>
          </div>
          <h2 className='card-title'>{props.item.title}</h2>
          <p className='card-date'>
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className='card-description'>{props.item.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
