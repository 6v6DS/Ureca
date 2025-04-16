export const handleApi = async <T>(fn: () => Promise<T>) => {
  try {
    const data = await fn();
    6;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
