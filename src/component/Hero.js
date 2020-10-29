import React from 'react';

export default function Hero() {
  return (
    <div className="jumbotron text-center">
      <div className="container cont-img">
        <h1 className="display-4">Welcome to Transit-gh</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="/" role="button">Learn more</a>
      </div>
    </div>
  );
}