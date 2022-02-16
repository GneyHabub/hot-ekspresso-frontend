const getEnv = (name: string) => {
  return import.meta.env[`VITE_${name}`] || "";
}

export default getEnv;