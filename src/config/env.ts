const ENV = {
    dev: {
      API_URL: 'http://localhost:3000',
      ENABLE_LOGGING: true,
    },
    prod: {
      API_URL: 'https://api.myapp.com',
      ENABLE_LOGGING: false,
    },
  };
  
  const getEnvVars = () => {
    const env = process.env.EXPO_PUBLIC_ENV;
    return env === 'prod' ? ENV.prod : ENV.dev;
  };
  
  export default getEnvVars();
  