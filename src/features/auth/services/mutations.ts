import { useMutation, useQueryClient } from "@tanstack/react-query";
import authServices from "../services/api";
import type { SignUpResponse, SignUpPayload } from "../types";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      authServices.login(data),

    onSuccess: async () => {
      try {
        // ✅ Immediately fetch the logged-in user profile
        const profile = await authServices.getMe();

        // ✅ Prime React Query cache so useIsLoggedIn updates instantly
        queryClient.setQueryData(["auth", "profile"], profile);
      } catch (error) {
        console.error("❌ Failed to prefetch profile after login:", error);
      }
    },
  });
};

export const useSignUpMutation = () => {
  return useMutation<SignUpResponse, Error, SignUpPayload>({
    mutationFn: (data) => authServices.signUp(data),
  });
};
