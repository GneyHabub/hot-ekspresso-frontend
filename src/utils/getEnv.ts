const getEnv = (name: string) => {
  return (import.meta.env[`VITE_${name}`] || "").toString();
}

export default getEnv;