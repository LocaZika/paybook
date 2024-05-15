import { getRandomHslColor, toCurrency } from '@/utils';
import infoStyle from './info.module.scss';

interface IInfoProps {
  user: TUserData;
}

export default function Info({user}: IInfoProps) {
  return (
    <div className={infoStyle['info']} style={{backgroundColor: getRandomHslColor()}}>
      <div className={infoStyle['info__name']}>
        {user.displayName}
      </div>
      <div className={infoStyle['info__debt']}>
        <span>Đã chi:</span>
        <p>
          {toCurrency(user.paied)} &#8363;
        </p>
      </div>
    </div>
  )
}
