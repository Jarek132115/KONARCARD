import { useMutation } from "@tanstack/react-query";
import { api } from "../services/api";

type BusinessCardData = {
  business_card_name: string;
  page_theme: string;
  style: string;
  main_heading: string;
  sub_heading: string;
  cover_photo: File;
  user: string;
};

export const buildBusinessCardFormData = (data: BusinessCardData): FormData => {
  const formData = new FormData();

  formData.append("business_card_name", data.business_card_name);
  formData.append("page_theme", data.page_theme);
  formData.append("style", data.style);
  formData.append("main_heading", data.main_heading);
  formData.append("sub_heading", data.sub_heading);
  formData.append("user", data.user);
  formData.append("cover_photo", data.cover_photo);

  return formData;
};

export const useCreateBusinessCard = () => {
  return useMutation({
    mutationFn: (formData: FormData) => {
      return api("/create_business_card", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });
};
