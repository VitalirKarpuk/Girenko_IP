import { createClient } from 'contentful';
require('dotenv').config();

const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN } = process.env;
export default createClient({
  space: CONTENTFUL_SPACE_ID || '',
  accessToken: CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN || '',
});
