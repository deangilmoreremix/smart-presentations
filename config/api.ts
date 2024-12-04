export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'https://api.slidespeak.co/api/v1',
  API_KEY: process.env.API_KEY || 'b3f2d766-c88b-4a24-adcd-41128b2380c6',
  MAX_TEXT_LENGTH: 2500,
  MIN_TEXT_LENGTH: 50,
  MAX_RETRIES: 5,
  POLL_INTERVAL: 2000,
};