import diabetesPng from "../../Images/Logos/Diabetes-results/diabetesPng.png";
import medicationPng from "../../Images/Logos/Diabetes-results/medicationPng.png";
import insulinPng from "../../Images/Logos/Diabetes-results/insulinPng.png";
import sugarLevelPng from "../../Images/Logos/Diabetes-results/sugarLevelPng.png";
import weightPng from "../../Images/Logos/Diabetes-results/weightPng.png";

export const DiabetesResults = [
  {
    imgUrl: diabetesPng,
    heading: "1.9%",
    subHeading: "Average HbA1c drop",
  },
  {
    imgUrl: medicationPng,
    heading: "90%",
    subHeading: "Have reduced or eliminated medication",
  },
  {
    imgUrl: insulinPng,
    heading: "92%",
    subHeading: "Have reduced or eliminated insulin",
  },
  {
    imgUrl: sugarLevelPng,
    heading: "90%",
    subHeading: "Have seen reduction in sugar levels",
  },
  {
    imgUrl: weightPng,
    heading: "3+ Kg",
    subHeading: "Average weight-loss sustained within months",
  },
];

export const languageOptions = [
  {
    value: "select",
    label: "Select",
  },
  {
    value: "telugu",
    label: "Telugu",
  },
  {
    value: "hindi",
    label: "Hindi",
  },
  {
    value: "english",
    label: "English",
  },
];

export const timeSlotOption = [
  {
    value: "select",
    label: "Select",
  },
  {
    value: "10am",
    label: "10 AM - 1 PM",
  },
  {
    value: "1pm",
    label: "1 PM - 5 PM",
  },
];

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
