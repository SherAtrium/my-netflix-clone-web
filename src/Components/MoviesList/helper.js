import moment from 'moment';

const convertDateToObj = string => {
  const splitted = string.split('-');
  return {
    year: splitted[0],
    month: splitted[1] - 1,
    date: splitted[2],
  };
};

export const sortByReleaseDate = data => {
  return [...data].sort((first, second) => {
    const firstDateObj = convertDateToObj(first.release_date);
    const secondDateObj = convertDateToObj(second.release_date);

    const firstDateTimeStamp = moment().set(firstDateObj).unix();
    const secondDateTimeStamp = moment().set(secondDateObj).unix();

    return secondDateTimeStamp - firstDateTimeStamp;
  });
};

export const sortByName = data => {

  return data;
};