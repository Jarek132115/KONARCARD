import React, { useRef } from "react";
import Sidebar from "../../components/Sidebar";
import ProfileCardImage from "../../assets/images/background-hero.png";
import UserAvatar from "../../assets/images/People.png";
import useBusinessCardStore from "../../store/businessCardStore";
import { EditBio } from "../../components/EditBio";
import { MyWork } from "../../components/MyWork";
import { MyService } from "../../components/MyService";
import {
  useCreateBusinessCard,
  buildBusinessCardFormData,
} from "../../hooks/useCreateBiz";

export default function MyProfile() {
  const { state, updateState } = useBusinessCardStore();
  const fileInputRef = useRef(null);
  const createBusinessCard = useCreateBusinessCard();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const blobUrl = URL.createObjectURL(file);
      updateState({ coverPhoto: blobUrl, coverPhotoFile: file });
    }
  };

  const handleSubmit = async () => {
    const formData = buildBusinessCardFormData({
      business_card_name: state.businessName,
      page_theme: state.pageTheme,
      style: state.font,
      main_heading: state.mainHeading,
      sub_heading: state.subHeading,
      cover_photo: state.coverPhotoFile,
      user: "current_user_id",
    });

    try {
      await createBusinessCard.mutateAsync(formData);
    } catch (error) {
      console.error("Error creating business card:", error);
    }
  };

  const themeStyles = {
    backgroundColor: state.pageTheme === "dark" ? "#1F1F1F" : "#FFFFFF",
    color: state.pageTheme === "dark" ? "#FFFFFF" : "#000000",
  };

  return (
    <div className="myprofile-layout">
      <Sidebar />
      <main className="myprofile-main">
        <h1 className="myprofile-greeting">Good Afternoon Jarek!</h1>

        <div className="myprofile-content">
          {/* Phone Preview */}
          <div className="myprofile-preview">
            <div
              className="mock-phone"
              style={{ fontFamily: state.font, ...themeStyles }}
            >
              <img
                src={state.coverPhoto || ProfileCardImage}
                alt="Cover"
                className="mock-cover"
                style={{
                  boxShadow:
                    state.pageTheme === "dark"
                      ? "0 4px 10px rgba(255, 255, 255, 0.25)"
                      : "0 4px 10px rgba(0, 0, 0, 0.25)",
                }}
              />
              <h2 className="mock-title">{state.mainHeading}</h2>
              <p
                style={{
                  color: state.pageTheme === "dark" ? "#fff" : "#000",
                }}
                className="mock-subtitle"
              >
                {state.subHeading}
              </p>
              <button
                type="button"
                style={{
                  backgroundColor:
                    state.pageTheme === "dark" ? "white" : "black",
                  color: state.pageTheme !== "dark" ? "white" : "black",
                }}
                className="mock-button"
              >
                Exchange Contact
              </button>

              <p
                className="text-about-me"
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                  fontWeight: 600,
                  color: themeStyles.color,
                }}
              >
                About me
              </p>
              <div
                style={{
                  boxShadow:
                    state.pageTheme === "dark"
                      ? "0 4px 10px rgba(255, 255, 255, 0.25)"
                      : "0 4px 10px rgba(0, 0, 0, 0.25)",
                }}
                className="mock-about"
              >
                <img src={UserAvatar} alt="Avatar" className="mock-avatar" />
                <div>
                  <p className="mock-name">{state.businessName}</p>
                  <p className="mock-role">Web Designer</p>
                  <p className="mock-bio">
                    I am a young talented web design based out in London who
                    loves what he does and is one of the best at
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Control Panel */}
          <div className="myprofile-editor">
            <h2 className="editor-title">Create Your Digital Business Card</h2>

            {/* <div className="input-block">
              <label htmlFor="businessName">Business Card Name</label>
              <input
                id="businessName"
                type="text"
                placeholder="My Business Card"
                value={state.businessName}
                onChange={(e) => updateState({ businessName: e.target.value })}
              />
            </div> */}

            <div className="input-block">
              <label>Page Theme</label>
              <div className="option-row">
                <button
                  type="button"
                  className="theme-button"
                  onClick={() => updateState({ pageTheme: "light" })}
                  style={{
                    backgroundColor:
                      state.pageTheme === "light" ? "#F6F6F6" : "transparent",
                  }}
                >
                  Light Mode
                </button>
                <button
                  type="button"
                  className="theme-button"
                  onClick={() => updateState({ pageTheme: "dark" })}
                  style={{
                    backgroundColor:
                      state.pageTheme === "dark" ? "#F6F6F6" : "transparent",
                  }}
                >
                  Dark Mode
                </button>
              </div>
            </div>

            <div className="input-block">
              <label>Font</label>
              <div className="option-row">
                <button
                  type="button"
                  className="font-button"
                  onClick={() => updateState({ font: "Inter" })}
                  style={{
                    backgroundColor:
                      state.font === "Inter" ? "#F6F6F6" : "transparent",
                    fontFamily: "Inter",
                  }}
                >
                  Inter
                </button>
                <button
                  type="button"
                  className="font-button"
                  onClick={() => updateState({ font: "Montserrat" })}
                  style={{
                    backgroundColor:
                      state.font === "Montserrat" ? "#F6F6F6" : "transparent",
                    fontFamily: "Montserrat",
                  }}
                >
                  Montserrat
                </button>
                <button
                  type="button"
                  className="font-button"
                  onClick={() => updateState({ font: "Poppins" })}
                  style={{
                    backgroundColor:
                      state.font === "Poppins" ? "#F6F6F6" : "transparent",
                    fontFamily: "Poppins",
                  }}
                >
                  Poppins
                </button>
              </div>
            </div>

            <hr className="divider" />

            <h3 className="editor-subtitle">Hero Section</h3>

            <div className="input-block">
              <label htmlFor="coverPhoto">Cover Photo</label>
              <input
                ref={fileInputRef}
                id="coverPhoto"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <div
                className="cover-preview-container"
                onClick={() => fileInputRef.current?.click()}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={state.coverPhoto || ProfileCardImage}
                  alt="Cover"
                  className="cover-preview"
                />
              </div>
            </div>

            <div className="input-block">
              <label htmlFor="mainHeading">Main Heading</label>
              <input
                id="mainHeading"
                type="text"
                placeholder="Best Bathroom Renovator In The World Always"
                value={state.mainHeading}
                onChange={(e) => updateState({ mainHeading: e.target.value })}
              />
            </div>

            <div className="input-block">
              <label htmlFor="subHeading">Subheading</label>
              <input
                id="subHeading"
                type="text"
                placeholder="Best Bathroom Renovator in The World Always"
                value={state.subHeading}
                onChange={(e) => updateState({ subHeading: e.target.value })}
              />
            </div>

            <EditBio />
            <MyWork />
            <MyService />
            <button
              onClick={handleSubmit}
              className="submit-button"
              style={{
                backgroundColor: state.pageTheme === "dark" ? "white" : "black",
                color: state.pageTheme !== "dark" ? "white" : "black",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                marginTop: "20px",
                width: "100%",
              }}
            >
              Save Business Card
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
