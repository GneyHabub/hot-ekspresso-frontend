const getEnv = (name: string) => (import.meta.env[`VITE_${name}`] || '').toString();

export default getEnv;
