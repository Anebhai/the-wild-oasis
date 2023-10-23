import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    // ^Query key should be an array, the array can be complex or simple
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
