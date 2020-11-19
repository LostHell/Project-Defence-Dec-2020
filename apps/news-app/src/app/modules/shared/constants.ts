import { environment } from '../../../environments/environment';

const API_URL = `https://api.backendless.com/${environment.BACKENDLESS_APP_ID}/${environment.BACKENDLESS_API_KEY}`;
export const NEWSLETTER_URL = `${API_URL}/data/newsletter`;
export const LOGIN_URL = `${API_URL}/users/login`;
export const REGISTER_URL = `${API_URL}/users/register`;
