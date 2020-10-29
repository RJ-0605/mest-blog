import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ArticleCard( { left, post } ) {
  

  return (
    <div className="card mt-5 border-0">
      <div className="card-body p-0">

      {left &&
        <div className="row">
          <div className="col">
            <img src={ post.img }  className="card-img-top" alt="..." />
          </div>
          <div className="col d-flex flex-column">
            <h1 className="card-title">Specialn, 19 fintech, ecommerce, startup.</h1>
            <p className="card-text">Vidra is a platform that offers the possibility to small and large companies to access the world of digital commerce, making available to the seller tools that allow to manage sales channels (site, apps, marketplaces such as amazon, ebay, handrail and many others and social) through a single access point, and to coordinate in completeness the sale from payment to shipping optimizing profits and improving the quality of work.</p>
            <Link className="btn btn-primary read-more align-self-end" to={ { pathname:  "/readmore", state: { id: post.id } } }  >Read more</Link>
            
            {/* <button className="btn btn-primary read-more align-self-end" onClick={readmore}>Read more</button> */}
          </div>    
        </div>
      }

      {!left &&
        <div className="row">
          <div className="col d-flex flex-column">
            <h1 className="card-title">How to Make Money Online</h1>
            <p className="card-text">Vidra is a platform that offers the possibility to small and large companies to access the world of digital commerce, making available to the seller tools that allow to manage sales channels (site, apps, marketplaces such as amazon, ebay, handrail and many others and social) through a single access point, and to coordinate in completeness the sale from payment to shipping optimizing profits and improving the quality of work.</p>
            <Link className="btn btn-primary read-more align-self-end" to={{ pathname:  "/readmore", state: { id: post.id }  }} >Read more</Link>
          </div>    
          <div className="col">
            <img src={ post.img } className="card-img-top" alt="..." />
          </div>
        </div>
      }

      </div>
    </div>
  );
}