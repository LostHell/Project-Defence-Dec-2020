import { environment } from '../../../environments/environment';

const API_URL = `https://api.backendless.com/${environment.BACKENDLESS_APP_ID}/${environment.BACKENDLESS_API_KEY}`;
export const NEWSLETTER_URL = `${API_URL}/data/newsletter`;
