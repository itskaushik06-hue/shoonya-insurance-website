import { useState, useEffect } from "react";

import { HomePage } from "./components/HomePage";
import { ClaimsPage } from "./components/ClaimsPage";
import { SolutionsPage } from "./components/SolutionsPage";
import { RiskPage } from "./components/RiskPage";
import { InsurancePage } from "./components/InsurancePage";

/* ================= INSURANCE PAGES ================= */

import { CyberInsurancePage } from "./components/CyberInsurancePage";
import { HealthInsurancePage } from "./components/HealthInsurancePage";
import { GroupHealthInsurancePage } from "./components/GroupHealthInsurancePage";
import { MotorInsurancePage } from "./components/MotorInsurancePage";
import { PersonalAccidentInsurancePage } from "./components/PersonalAccidentInsurancePage";
import { TravelInsurancePage } from "./components/TravelInsurancePage";
import { HomeInsurancePage } from "./components/HomeInsurancePage";
import { OfficePackagePolicyPage } from "./components/OfficePackagePolicyPage";
import { PropertyInsurancePage } from "./components/PropertyInsurancePage";
import { ShopkeeperInsurancePage } from "./components/ShopkeeperInsurancePage";
import { LiabilityInsurancePage } from "./components/LiabilityInsurancePage";
import { ProfessionalIndemnityInsurancePage } from "./components/ProfessionalIndemnityInsurancePage";
import { EmployeeFidelityInsurancePage } from "./components/EmployeeFidelityInsurancePage";
import { WorkmenCompensationInsurancePage } from "./components/WorkmenCompensationInsurancePage";
import { BurglaryInsurancePage } from "./components/BurglaryInsurancePage";
import { FireInsurancePage } from "./components/FireInsurancePage";
import { ContractorsAllRiskInsurancePage } from "./components/ContractorsAllRiskInsurancePage";
import { ContractorsPlantMachineryInsurancePage } from "./components/ContractorsPlantMachineryInsurancePage";
import { CreditInsurancePage } from "./components/CreditInsurancePage";
import { IndustrialAllRiskInsurancePage } from "./components/IndustrialAllRiskInsurancePage";
import { MachineryBreakdownInsurancePage } from "./components/MachineryBreakdownInsurancePage";
import { EngineeringInsurancePage } from "./components/EngineeringInsurancePage";
import { MoneyInsurancePage } from "./components/MoneyInsurancePage";
import { MarineCargoInsurancePage } from "./components/MarineCargoInsurancePage";



export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentPage(hash || "home");
      window.scrollTo(0, 0);
    };

    handleNavigation();
    window.addEventListener("hashchange", handleNavigation);

    <div className="min-h-screen bg-white overflow-x-hidden"></div>

    return () => window.removeEventListener("hashchange", handleNavigation);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      /* ================= CORE ================= */
      case "home":
        return <HomePage />;

      case "claims":
        return <ClaimsPage />;

      case "solutions":
        return <SolutionsPage />;

      case "solutions/risk":
        return <RiskPage />;

      case "solutions/insurance":
        return <InsurancePage />;

      /* ================= INSURANCE DETAILS ================= */

      case "cyber-insurance":
        return <CyberInsurancePage />;

      case "health-insurance":
        return <HealthInsurancePage />;

      case "group-health-insurance":
        return <GroupHealthInsurancePage />;

      case "motor-insurance":
        return <MotorInsurancePage />;

      case "personal-accident-insurance":
        return <PersonalAccidentInsurancePage />;

      case "travel-insurance":
        return <TravelInsurancePage />;

      case "home-insurance":
        return <HomeInsurancePage />;

      case "office-package-policy":
        return <OfficePackagePolicyPage />;

      case "property-insurance":
        return <PropertyInsurancePage />;

      case "shopkeeper-insurance":
        return <ShopkeeperInsurancePage />;

      case "liability-insurance":
        return <LiabilityInsurancePage />;

      case "professional-indemnity-insurance":
        return <ProfessionalIndemnityInsurancePage />;

      case "employee-fidelity-insurance":
        return <EmployeeFidelityInsurancePage />;

      case "workmen-compensation-insurance":
        return <WorkmenCompensationInsurancePage />;

      case "burglary-insurance":
        return <BurglaryInsurancePage />;

      case "fire-insurance":
        return <FireInsurancePage />;

      case "contractors-all-risk-insurance":
        return <ContractorsAllRiskInsurancePage />;

      case "contractors-plant-machinery-insurance":
        return <ContractorsPlantMachineryInsurancePage />;

      case "credit-insurance":
        return <CreditInsurancePage />;

      case "industrial-all-risk-insurance":
        return <IndustrialAllRiskInsurancePage />;

      case "machinery-breakdown-insurance":
        return <MachineryBreakdownInsurancePage />;

      case "engineering-insurance":
        return <EngineeringInsurancePage />;

      case "money-insurance":
        return <MoneyInsurancePage />;

      case "marine-cargo-insurance":
        return <MarineCargoInsurancePage />;

      /* ================= FALLBACK ================= */
      default:
        return <HomePage />;
    }
  };

  return renderPage();
}
