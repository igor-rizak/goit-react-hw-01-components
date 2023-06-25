import css from "./FriendList.module.css"
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <li className={css.item} key={id}>
            <FriendListItem
              key={id}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
            />
          </li>
        );
      })}
    </ul>
  );
};