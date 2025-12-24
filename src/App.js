import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import React from "react";
import BusinessOpportunity from "./BusinessOpportunityComponents/BusinessOpportunity";
import Investment from "./BusinessOpportunityComponents/Investment";
import Technology from "./BusinessOpportunityComponents/ Technology";
import Catalogue from "./BusinessOpportunityComponents/Catalogue";
import HowDoWeWork from "./BusinessOpportunityComponents/HowDoWeWork";
import DownloadMaterial from "./BusinessOpportunityComponents/DownloadMaterial";
import LoginTable from "./BusinessOpportunityComponents/LoginTable";
import IndustrialSector from "./BusinessOpportunityComponents/IndustrialSector";
import Agriculture from "./BusinessOpportunityComponents/Agriculture";
import WasteSector from "./BusinessOpportunityComponents/WasteSector";
import Construction3D from "./BusinessOpportunityComponents/Construction3D";
import IGDStories from "./BusinessOpportunityComponents/IGDStories";
import IGDStoriesPart2 from "./BusinessOpportunityComponents/IGDStoriesPart2";
import AnandKrantiSection from "./BusinessOpportunityComponents/AnandKrantiSection";
import GDBiogasSection from "./BusinessOpportunityComponents/GDBiogasSection";
import TechnologyCollaboration from "./BusinessOpportunityComponents/TechnologyCollaboration";
import MeetOurTeam from "./BusinessOpportunityComponents/MeetOurTeam";
import FinanceTeam from "./BusinessOpportunityComponents/ FinanceTeam";
import ProjectTeam from "./BusinessOpportunityComponents/ProjectTeam";
import ITCoreTeam from "./BusinessOpportunityComponents/ITCoreTeam";
import HealthCare from "./BusinessOpportunityComponents/HealthCare";
import IGDStoriesPart3 from "./BusinessOpportunityComponents/IGDStoriesPart3";
import FarmersSection from "./BusinessOpportunityComponents/ FarmersSection";
import Herosmall from "./Components/Herosmall";
import WhyGdBiogas from "./BusinessOpportunityComponents/WhyGdBiogas";
import ProudlyIndianSection from "./BusinessOpportunityComponents/ ProudlyIndianSection";
import GDMart from "./BusinessOpportunityComponents/GDMart";
import GDImpax from "./BusinessOpportunityComponents/ GDImpax";
import PmoHero from "./BusinessOpportunityComponents/PmoHero";
import LetterToPM from "./BusinessOpportunityComponents/ LetterToPM";
import ProjectDetails from "./BusinessOpportunityComponents/ProjectDetails";
import Banner from "./BusinessOpportunityComponents/Banner";
import Benefits from "./BusinessOpportunityComponents/Benefits";
import EconomicProjection from "./BusinessOpportunityComponents/EconomicProjection";
import RoadMap from "./BusinessOpportunityComponents/RoadMap";
import RoadMapVision from "./BusinessOpportunityComponents/ RoadMapVision";
import ProposalSection from "./BusinessOpportunityComponents/ProposalSection";
import VendorRegistration from "./BusinessOpportunityComponents/VendorRegistration";
import PartnerRegistration from "./BusinessOpportunityComponents/PartnerRegistration";
import QuoteSection from "./BusinessOpportunityComponents/QuoteSection";
import BusinessRolesSection from "./BusinessOpportunityComponents/BusinessRolesSection";
import ContactForm from "./BusinessOpportunityComponents/ContactForm";
import InfoBox from "./BusinessOpportunityComponents/ InfoBox";
import ContactInfo from "./BusinessOpportunityComponents/ ContactInfo";
import ContactUs from "./BusinessOpportunityComponents/ContactUsHero";
import ContactUsHeader from "./BusinessOpportunityComponents/ ContactUsHeader";
import ContactLayout from "./BusinessOpportunityComponents/ContactLayout";
import ConsentNote from "./BusinessOpportunityComponents/ConsentNote";
import GdOffices from "./BusinessOpportunityComponents/GdOffices";
import CoOwnerHero from "./BusinessOpportunityComponents/CoOwner";
import LandRegistration from "./BusinessOpportunityComponents/LandRegistration";
import LandOwnerSection from "./BusinessOpportunityComponents/LandOwnerSection";
import LandBusinessRolesSection from "./BusinessOpportunityComponents/LandBusinessRolesSection";
import ContactFormLand from "./BusinessOpportunityComponents/ContactFormLand";
import RentOnHero from "./BusinessOpportunityComponents/RentOnHero";
import LongLeaseRegistration from "./BusinessOpportunityComponents/LongLeaseRegistration";
import LongLeaseBusinessRolesSection from "./BusinessOpportunityComponents/LongLeaseBusinessRolesSection";
import ContactFormLongLease from "./BusinessOpportunityComponents/ContactFormLongLease";
import WorldMapSection from "./BusinessOpportunityComponents/ WorldMapSection";
import CareersHero from "./BusinessOpportunityComponents/ CareersHero";
import CareersRegistration from "./BusinessOpportunityComponents/CareersRegistration";
import WhyShouldYouJoinUs from "./BusinessOpportunityComponents/WhyShouldYouJoinUs";
import CareergdSection from "./BusinessOpportunityComponents/CareergdSection";
import OpenPositionsSection from "./BusinessOpportunityComponents/OpenPositionsSection";
import GDPositionIntro from "./BusinessOpportunityComponents/GDPositionIntro";
import RoleVideosSection from "./BusinessOpportunityComponents/RoleVideosSection";
import CareerForm from "./BusinessOpportunityComponents/CareerForm";
import SiteVisitHero from "./BusinessOpportunityComponents/SiteVisitHero";
import SitevisitRegistration from "./BusinessOpportunityComponents/SitevisitRegistration";
import ScheduleSiteVisit from "./BusinessOpportunityComponents/ScheduleSiteVisit";
import BiogasSectionsitevisit from "./BusinessOpportunityComponents/BiogasSectionsitevisit";
import CustomerServiceHero from "./BusinessOpportunityComponents/CustomerServiceHero";
import CustomerserviceRegistration from "./BusinessOpportunityComponents/CustomerserviceRegistration";
import FaqCategories from "./BusinessOpportunityComponents/FaqCategories";
import SupportTable from "./BusinessOpportunityComponents/ SupportTable";
import ContactHeadOffice from "./BusinessOpportunityComponents/ ContactHeadOffice";
import HeroSection from "./BusinessOpportunityComponents/HeroSection";
import AboutHero from "./Components/Home";
import BioGasHero from "./BioGasComponentes/BioGasHero";
import CardsSection from "./BioGasComponentes/Cards";
import BioEnergySection from "./BioGasComponentes/Index1";
import HighEnergy from "./BioGasComponentes/Index2";
import SilagePreparation from "./BioGasComponentes/Index3";
import HLRSection from "./BioGasComponentes/Index4";
import HLRSectionTwo from "./BioGasComponentes/Index5";
import RawMaterial from "./BioGasComponentes/index6";
import BiogasPlant from "./BioGasComponentes/Index7";
import BiogasPlantTwo from "./BioGasComponentes/Index8";
import Technological from "./BioGasComponentes/Index9";
import MainEquipment from "./BioGasComponentes/Index10";
import ReceivingTank from "./BioGasComponentes/Index10two";
import SubmersibleAgitator from "./BioGasComponentes/Index10three";
import ReactorSection from "./BioGasComponentes/Index10Four";
import ReactorAgitator from "./BioGasComponentes/Index10Five";
import WindowSpotlight from "./BioGasComponentes/Index10Six";
import PumpEquipment from "./BioGasComponentes/Index10Seven";
import Separator from "./BioGasComponentes/Index10Eight";
import Gasholder from "./BioGasComponentes/Index10Nine";
import BiogasDryer from "./BioGasComponentes/Index10Ten";
import BiogasCompressor from "./BioGasComponentes/Index10Elevan";
import Desulphurization from "./BioGasComponentes/Index10Twel";
import FlareSystem from "./BioGasComponentes/Index10Thirteen";
import WaterSupplySewerage from "./BioGasComponentes/Index10Fourteen";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
            </>
          }
        />
        <Route
          path="/biogas"
          element={
            <>
              <BioGasHero />
              <CardsSection />
              <section id="index1">
                <BioEnergySection />
              </section>
              <section id="index2">
                <HighEnergy />
              </section>
              <section id="index3">
                <SilagePreparation />
              </section>
              <section id="index4">
                <HLRSection />
              </section>
              <section id="index5">
                <HLRSectionTwo />
              </section>
              <section id="index6">
                <RawMaterial />
              </section>
              <section id="index7">
                <BiogasPlant />
              </section>
              <section id="index8">
                <BiogasPlantTwo />
              </section>
              <section id="index9">
                <Technological />
              </section>
              <section id="index10">
                <MainEquipment />
              </section>
              <ReceivingTank />
              <SubmersibleAgitator />
              <ReactorSection />
              <ReactorAgitator />
              <WindowSpotlight />
              <PumpEquipment />
              <Separator />
              <Gasholder />
              <BiogasDryer />
              <BiogasCompressor />

              <Desulphurization />
              <FlareSystem />
              <WaterSupplySewerage />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <AboutHero />

              <section id="igd-stories">
                <IGDStories />
              </section>

              <section id="igd-stories-part2">
                <IGDStoriesPart2 />
              </section>

              <section id="farmers-section">
                <FarmersSection />
              </section>

              <section id="igd-stories-part3">
                <IGDStoriesPart3 />
              </section>

              <section id="anand-kranti">
                <AnandKrantiSection />
              </section>

              <section id="gd-biogas">
                <GDBiogasSection />
              </section>

              <section id="meet-our-team">
                <MeetOurTeam />
              </section>

              <section id="finance-team">
                <FinanceTeam />
              </section>

              <section id="project-team">
                <ProjectTeam />
              </section>

              <section id="it-core-team">
                <ITCoreTeam />
              </section>

              <section id="tech-collab">
                <TechnologyCollaboration />
              </section>

              <section id="why-gd-biogas">
                <WhyGdBiogas />
              </section>

              <ProudlyIndianSection />

              <Footer />
            </>
          }
        />
        {/* Address to PMO */}
        <Route
          path="/address-pmo"
          element={
            <>
              <PmoHero />
              <LetterToPM />
              <ProjectDetails />
              <Banner />
              <Benefits />
              <EconomicProjection />
              <RoadMap />
              <RoadMapVision />
              <ProposalSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/VendorRegistration"
          element={
            <>
              <VendorRegistration />
              <PartnerRegistration />
              <QuoteSection />
              <BusinessRolesSection />
              <ContactForm />
              <InfoBox />
              <ContactInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/ContactUS"
          element={
            <>
              <ContactUs />
              <ContactUsHeader />
              <ContactLayout />
              <ConsentNote />
              <GdOffices />
              <WorldMapSection />
              <InfoBox />
              <ContactInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/LandProposals"
          element={
            <>
              <CoOwnerHero />
              <LandRegistration />
              <LandOwnerSection />
              <LandBusinessRolesSection />
              <ContactFormLand />
              <InfoBox />
              <ContactInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/RentOn"
          element={
            <>
              <RentOnHero />
              <LongLeaseRegistration />
              <LandOwnerSection />
              <LongLeaseBusinessRolesSection />
              <ContactFormLongLease />
              <InfoBox />
              <ContactInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/Careers"
          element={
            <>
              <CareersHero />
              <CareersRegistration />
              <WhyShouldYouJoinUs />
              <CareergdSection />
              <OpenPositionsSection />
              <GDPositionIntro />
              <RoleVideosSection />
              <CareerForm />
              <InfoBox />
              <ContactInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/SiteVisit"
          element={
            <>
              <SiteVisitHero />
              <SitevisitRegistration />
              <ScheduleSiteVisit />
              <BiogasSectionsitevisit />
              <InfoBox />
              <ContactInfo />
              <Footer />
            </>
          }
        />
        <Route
          path="/CustomerServiceCentre"
          element={
            <>
              <CustomerServiceHero />
              <CustomerserviceRegistration />
              <FaqCategories />
              <SupportTable />
              <ContactHeadOffice />
              <InfoBox />
              <ContactInfo />
              <Footer />
            </>
          }
        />
        /CustomerServiceCentre
        <Route
          path="/business"
          element={
            <>
              <Herosmall />
              <BusinessOpportunity />
            </>
          }
        />
        <Route
          path="/investors"
          element={
            <>
              <Herosmall />
              <Investment />
            </>
          }
        />
        <Route
          path="/technology"
          element={
            <>
              <Herosmall />
              <Technology />
            </>
          }
        />
        <Route
          path="/catalogue"
          element={
            <>
              <Herosmall />
              <Catalogue />
            </>
          }
        />
        <Route
          path="/how-we-work"
          element={
            <>
              <Herosmall />
              <HowDoWeWork />
            </>
          }
        />
        <Route
          path="/download"
          element={
            <>
              <Herosmall />
              <DownloadMaterial />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Herosmall />
              <LoginTable />
            </>
          }
        />
        <Route
          path="/industrial"
          element={
            <>
              <Herosmall />
              <IndustrialSector />
            </>
          }
        />
        <Route
          path="/agriculture"
          element={
            <>
              <Herosmall />
              <Agriculture />
            </>
          }
        />
        <Route
          path="/waste"
          element={
            <>
              <Herosmall />
              <WasteSector />
            </>
          }
        />
        <Route
          path="/3d-concrete"
          element={
            <>
              <Herosmall />
              <Construction3D />
            </>
          }
        />
        <Route
          path="/healthcare"
          element={
            <>
              <Herosmall />
              <HealthCare />
            </>
          }
        />
        <Route
          path="/mart"
          element={
            <>
              <Herosmall />
              <GDMart />
            </>
          }
        />
        <Route
          path="/imbaw"
          element={
            <>
              <Herosmall />
              <GDImpax />
            </>
          }
        />
        {/* Contact Us Page */}
        <Route
          path="/contact"
          element={
            <>
              <ContactSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
