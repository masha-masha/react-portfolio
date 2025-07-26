

const PortfolioItem = ({ item }) => {
  return (
     <div className="portfolio-img-card">
      <div className="img-card">
       <div className="overlay"></div>
       <div className="info">
        <h3>UI/UX Design</h3>
        <span>Youtube</span>
       </div>
       <img src={item.imgSrc} alt="portfolio" />
      </div>
     </div>
  )
}

export default PortfolioItem