import css from './FriendListItem.module.css';

export function FriendListItem({ isOnline, avatar, name }) {
  return (
    <>
      <span
        className={
          isOnline
            ? `${css.status} ${css.online}`
            : `${css.status} ${css.ofline}`
        }
      >
        {isOnline}
      </span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </>
  );
};