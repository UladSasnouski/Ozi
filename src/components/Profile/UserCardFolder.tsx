import React from 'react';
import s from './UserCard.module.css';
import DefaultAvatar from './DefaultAvatar';

interface propType {
  user: string,
  id: string,
  email: string
}
const UserCardFolder: React.FC<propType> = ({ user, id, email }) => {
  return (
    <div className={s.userCard__container}>
      <div className={s.userCard__avatarContainer}>
        <DefaultAvatar />
      </div>
      <div className={s.userCard__profile}>
        <p>Name: {user}</p>
        <p>Position: {id}</p>
        <p className={s.userCard__underlineColor}>E-mail: {email}</p>
      </div>
      <div className={s.userCard__imageWrapper}>
      </div>
    </div>
  )
}

export default UserCardFolder;