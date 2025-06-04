const {
  NEXT_PUBLIC_APP_NAME_COMPANY_FIRST,
  NEXT_PUBLIC_APP_NAME_COMPANY_SECOND,
} = process.env;

export const APP_NAME_FIRST = NEXT_PUBLIC_APP_NAME_COMPANY_FIRST || "Company";
export const APP_NAME_SECOND = NEXT_PUBLIC_APP_NAME_COMPANY_SECOND || "Name";

export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Shop description";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
