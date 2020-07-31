export const convertObjectToQuerystring = (obj) => {
  return Object.keys(obj)
    .map((key) => key + "=" + obj[key])
    .join("&");
};

export const filterYears = [
  { id: 0, value: 2000 },
  { id: 1, value: 2001 },
  { id: 2, value: 2002 },
  { id: 3, value: 2003 },
  { id: 4, value: 2004 },
  { id: 5, value: 2005 },
  { id: 6, value: 2006 },
  { id: 7, value: 2007 },
  { id: 8, value: 2008 },
  { id: 9, value: 2009 },
  { id: 10, value: 2010 },
  { id: 11, value: 2011 },
  { id: 12, value: 2012 },
  { id: 13, value: 2013 },
  { id: 14, value: 2014 },
  { id: 15, value: 2015 },
  { id: 16, value: 2016 },
  { id: 17, value: 2017 },
  { id: 18, value: 2018 },
  { id: 19, value: 2019 },
  { id: 20, value: 2020 },
];
