import Reac from 'react';

import patternMobile from '../../assets/images/pattern-divider-mobile.svg';
import patternDesktop from '../../assets/images/pattern-divider-desktop.svg';

const CardBody = ({ advice }) => {
  return (
    <div className="card-body">
      <p className="advice">
        <q>{advice}</q>
      </p>
      <div className="divider">
        <picture>
          <source media="(min-width: 769px)" srcSet={patternDesktop} />
          <source media="(max-width: 768px)" srcSet={patternMobile} />
          <img src={patternMobile} alt="" aria-hidden="true" />
        </picture>
      </div>
    </div>
  );
};

export default CardBody;
