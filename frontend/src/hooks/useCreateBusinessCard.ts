import { useMutation } from "@tanstack/react-query";
import { api } from "../services/api";

type CreateBusinessCardPayload = {
  business_card_name: string;
  page_theme: string;
  style: string;
  main_heading: string;
  sub_heading: string;
  cover_photo: File;
  user: string;
};

type BusinessCardResponse = {
  id: string;
  business_card_name: string;
  page_theme: string;
  style: string;
  main_heading: string;
  sub_heading: string;
  cover_photo_url: string;
  user: string;
  created_at: string;
};

export const useCreateBusinessCard = () => {
  return useMutation({
    mutationFn: (payload: CreateBusinessCardPayload) => {
      const formData = new FormData();
      formData.append("business_card_name", payload.business_card_name);
      formData.append("page_theme", payload.page_theme);
      formData.append("style", payload.style);
      formData.append("main_heading", payload.main_heading);
      formData.append("sub_heading", payload.sub_heading);
      formData.append("cover_photo", payload.cover_photo);
      formData.append("user", payload.user);

      return api<BusinessCardResponse>("/create_business_card", {
        method: "POST",
        body: formData,
      });
    },
  });
};
