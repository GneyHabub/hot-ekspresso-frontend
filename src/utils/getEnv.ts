const getEnv = (name: string) => {
  return import.meta.env[name] || "";
}

export default getEnv;