import { useMutation } from "@tanstack/react-query";
import { api } from "../services/api";

type CreateServicePayload = {
  service_name: string;
  service_details: string;
  user: string;
};

type ServiceResponse = {
  id: string;
  service_name: string;
  service_details: string;
  user: string;
  created_at: string;
};

export const useCreateService = () => {
  return useMutation({
    mutationFn: (payload: CreateServicePayload) =>
      api<ServiceResponse>("/create_service", {
        method: "POST",
        body: JSON.stringify(payload),
      }),
  });
};
