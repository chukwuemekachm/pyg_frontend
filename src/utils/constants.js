import {
  YELLOW_GREEN, MEDIUM_VIOLET_RED, GOLDEN_ROD, BLUE_VIOLET,
} from 'Styles/colors.styles';

export const storageKeys = Object.freeze({
  __USER_TOKEN__: '__USER_TOKEN__',
});

export const userRoles = Object.freeze({
  USER: 'USER',
  ADMIN: 'ADMIN',
});

export const storyTypeColors = Object.freeze({
  ENHANCEMENT: YELLOW_GREEN,
  BUGFIX: MEDIUM_VIOLET_RED,
  DEVELOPMENT: GOLDEN_ROD,
  QA: BLUE_VIOLET,
});

export const storyStatus = Object.freeze({
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED',
});

export const storyComplexity = Object.freeze({
  SMALL: 'SMALL',
  MEDIUM: 'MEDIUM',
  LARGE: 'LARGE',

});

export const storyType = Object.freeze({
  ENHANCEMENT: 'ENHANCEMENT',
  BUGFIX: 'BUGFIX',
  DEVELOPMENT: 'DEVELOPMENT',
  QA: 'QA',
});

export const modalIDs = Object.freeze({
  STORY_FORM: 'STORY_FORM',
});

export const storyFormAction = Object.freeze({
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
});
