import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const initDayjs = () => {
    dayjs.extend(utc);
    dayjs.extend(timezone);
    dayjs.tz.setDefault('Asia/Seoul');
    dayjs.locale('ko');
};

export default initDayjs;
