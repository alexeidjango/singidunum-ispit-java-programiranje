import * as moment from "moment/moment";

export const shortDateTime = (date: string): string => {
  return moment.utc(date).format("DD.MM.YYYY. HH:mm z");
};
