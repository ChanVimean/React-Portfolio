import { useEffect, useState } from "react";

const useSkeleton = () => {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading
}

export default useSkeleton