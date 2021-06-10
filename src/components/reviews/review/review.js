import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { reviewsLoadedSelector, reviewsLoadingSelector, reviewWitUserSelector } from '../../../redux/selectors';
import { loadUsers } from '../../../redux/actions';
import { useEffect } from 'react';

const Review = ({ user, text, rating, loading, loaded }) => {
  return <div className={styles.review} data-id='review'>
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id='review-user'>
          {user}
        </h4>
        <p className={styles.comment} data-id='review-text'>
          {text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={rating} />
      </div>
    </div>
  </div>;

};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired
};

Review.defaultProps = {
  user: 'Anonymous'
};


const mapStateToProps = reviewWitUserSelector;

export default connect(mapStateToProps)(Review);
