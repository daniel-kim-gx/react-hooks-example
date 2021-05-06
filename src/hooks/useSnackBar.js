import { useSnackBarContext } from "../contexts/SnackBarContext";

export function useSnackBar() {
  const toast = useSnackBarContext();
  return toast;
}
