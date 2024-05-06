import infoStyle from './info.module.scss';

interface IInfoProps {
  user: TUserData;
}

export default function Info({user}: IInfoProps) {
  const total = (): number => {
    return user.debt + user.paid;
  }
  return (
    <div className={infoStyle['info']}>
      <p className={infoStyle['info__name']}>
        {user.displayName}
      </p>
      <p className={infoStyle['info__debt']}>
        {user.paid >= user.debt? 0 : '-'+user.debt}
      </p>
      <p className={infoStyle['info__paid']}>
        {user.paid}
      </p>
      <p className={infoStyle['info__total']}>
        = {total()}
      </p>
    </div>
  )
}
