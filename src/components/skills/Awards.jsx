import awards from '../../data/awards';

const Awards = () => {
 return (
  <ul className='education-list'>
   {awards.map(({ year, title, institution }, index) => (
    <li className='item' key={index}>
     <span className='year'>{year}</span>
     <p><span>{title}</span> - {institution}</p>
    </li>
   ))}
  </ul>
 );
};

export default Awards;
