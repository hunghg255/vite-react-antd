import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker, {
  PickerProps,
  RangePickerDateProps,
  RangePickerTimeProps,
} from 'antd/lib/date-picker/generatePicker';

export const DatePickerDayjs = generatePicker<Dayjs>(dayjsGenerateConfig);

const DatePicker = (props: PickerProps<Dayjs>) => {
  return <DatePickerDayjs {...props} />;
};

export const RangePicker = (props: RangePickerDateProps<Dayjs> | RangePickerTimeProps<Dayjs>) => {
  return <DatePickerDayjs.RangePicker {...props} />;
};

RangePicker.displayName = 'DatePicker';

DatePicker.displayName = 'DatePicker';

export default DatePicker;
