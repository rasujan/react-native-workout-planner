import * as moment from "moment";

const formatSec = (seconds: number | string) => {
  const duration = moment.duration(seconds, "seconds").format("hh:mm:ss");
  return duration;
};

export { formatSec };
