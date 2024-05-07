import { getRandomHslColor } from '@/utils';
import infoStyle from './info.module.scss';

interface IInfoProps {
  user: TUserData;
}

export default function Info({user}: IInfoProps) {
  const total = (): number => {
    return user.debt + user.paid;
  }
  return (
    <div className={infoStyle['info']} style={{backgroundColor: getRandomHslColor()}}>
      <div className={infoStyle['info__name']}>
        {user.displayName}
      </div>
      <div className={infoStyle['info__debt']}>
        <span>Đang nợ:</span>
        <p>
          {user.paid >= user.debt? 0 : '-'+user.debt}
        </p>
      </div>
      <div className={infoStyle['info__paid']}>
        <span>Đã trả:</span>
        <p>{user.paid}</p>
      </div>
      <p className={infoStyle['info__total']}>
        = {total()}
      </p>
    </div>
  )
}
