import React from "react";
import { PolicyDetailPage } from "./PolicyDetailPage";

export function HealthInsurancePage() {
  return (
    <PolicyDetailPage
      policyName="Health Insurance"
      intro="Your health is your greatest wealth. At Shoonya, we help you protect it with comprehensive health insurance that covers hospitalization, surgeries, preventive care, and more. Designed with empathy and backed by 75 years of trust."
      whyYouNeedIt="Medical costs are rising rapidly, and a single hospitalization can drain your savings. Health insurance ensures that you and your family receive quality medical care without financial stress, covering everything from routine check-ups to major surgeries and critical illnesses."
      whatItCovers="It includes hospitalization expenses, pre and post-hospitalization costs, daycare procedures, ambulance charges, room rent, ICU charges, surgical expenses, diagnostic tests, preventive health check-ups, and coverage for critical illnesses and pre-existing conditions after waiting periods."
      whyShoonya="We don't just offer policies, we listen to your health concerns, family medical history, and lifestyle to recommend coverage that truly fits. Our experts help you compare plans, understand exclusions, and choose the right sum insured for long-term peace of mind."
      peaceOfMind="With Shoonya by your side, you can focus on recovery while we handle the claims process. Your health is in safe hands with a broker who has been caring for families like yours for over seven decades."
    />
  );
}