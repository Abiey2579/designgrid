export interface tocLockProps {
  [key: string]: {
    locked: boolean;
  };
}
export const tocLock: tocLockProps = {
  // COURSE INTRODUCTION
  "1-Course Introduction": {
    locked: false,
  },
  // MODULE 1
  "2-Introduction to HTML": {
    locked: true,
  },
  "3-Introduction to CSS": {
    locked: true,
  },
  // MODULE 2
  "4-Getting Into Bootstrap": {
    locked: true,
  },
  // MODULE 3
  "5-Introduction to JavaScript": {
    locked: true,
  },
  // MODULE 4
  "6-Introduction to jQuery": {
    locked: true,
  },
  //MODULE 5
  "7-Final Projects": {
    locked: true,
  },
  // CERTIFICATE
  "8-Course Certificate": {
    locked: true,
  },
};
