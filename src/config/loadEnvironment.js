import dotenv from 'dotenv';

const environments = ['staging', 'preprod', 'prod'];

export function loadEnvironment() {
  const name = process.env.NODE_ENV || 'staging';

  if (!environments.includes(name)) {
    throw new Error(
      `Unsupported environment "${name}". Use staging, preprod, or prod.`
    );
  }

  dotenv.config({ path: `.env.${name}`, quiet: true });

  return {
    name,
    mongoUri:
      process.env.MONGODB_URI ||
      `mongodb://127.0.0.1:27017/software_integration_${name}`
  };
}
