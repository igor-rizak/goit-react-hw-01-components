// import PropTypes from 'prop-types'; 
import css from './Profile.module.css'

export function Profile({ username, tag, location, avatar, stats }) {
    
  return <div className={css.profile} >
  
    <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.user}>{tag}</p>
    <p className={css.user}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.items}>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li className={css.items}>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li className={css.items}>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
}

// Profile.PropTypes = {
//   username: PropTypes.string,
//   tag: PropTypes.string,
//   location: PropTypes.string,
//   avatar:PropTypes.string,
//  stats: PropTypes.number,
// }

