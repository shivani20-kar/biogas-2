import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Css/Header.css";
import logo from "./IMAGES/Logo.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenMenu, setMobileOpenMenu] = useState(null);
  const [mobileOpenSubMenu, setMobileOpenSubMenu] = useState(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null);
        setOpenSubMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    if (openSubMenu) {
      setOpenSubMenu(null);
    }
  };

  const toggleMobileMenu = (menu) => {
    setMobileOpenMenu(mobileOpenMenu === menu ? null : menu);
    if (mobileOpenSubMenu) {
      setMobileOpenSubMenu(null);
    }
  };

  const handleMenuItemClick = (menuType) => {
    if (menuType === "link") {
      setOpenMenu(null);
      setOpenSubMenu(null);
      setIsMobileMenuOpen(false);
      setMobileOpenMenu(null);
      setMobileOpenSubMenu(null);
    } else if (menuType === "submenu") {
      setOpenMenu(null);
    }
  };

  const handleNavigation = (to) => {
    navigate(to);
    setOpenMenu(null);
    setOpenSubMenu(null);
    setIsMobileMenuOpen(false);
    setMobileOpenMenu(null);
    setMobileOpenSubMenu(null);
  };

  const toggleHamburgerMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (openMenu || mobileOpenMenu) {
      setOpenMenu(null);
      setOpenSubMenu(null);
      setMobileOpenMenu(null);
      setMobileOpenSubMenu(null);
    }
  };

  const renderMobileMenu = () => (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-content">
        <div className="mobile-menu-items">
          <div className="mobile-menu-item gd-biogas-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("gd-biogas")}>
              GD Biogas for
              <span className={`mobile-arrow ${mobileOpenMenu === "gd-biogas" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "gd-biogas" && (
              <div className="mobile-submenu open">
                <Link to="/business" onClick={() => handleMenuItemClick("link")}>Business opportunity</Link>
                <Link to="/investors" onClick={() => handleMenuItemClick("link")}>Investors</Link>
                <Link to="/technology" onClick={() => handleMenuItemClick("link")}>Technology</Link>
                <Link to="/catalogue" onClick={() => handleMenuItemClick("link")}>Catalogue</Link>
                <Link to="/how-we-work" onClick={() => handleMenuItemClick("link")}>How Do We Work</Link>
                <Link to="/download" onClick={() => handleMenuItemClick("link")}>Download Material</Link>
                <Link to="/login" onClick={() => handleMenuItemClick("link")}>Log-in</Link>
              </div>
            )}
          </div>

          {/* === ADDED: GD Planet for Section === */}
         <div className="mobile-menu-item gd-planet-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("gd-planet")}>
              GD Planet for
              <span className={`mobile-arrow ${mobileOpenMenu === "gd-planet" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "gd-planet" && (
              <div className="mobile-submenu open">
                <Link to="/industrial" onClick={() => handleMenuItemClick("link")}>Industrial Sector</Link>
                <Link to="/agriculture" onClick={() => handleMenuItemClick("link")}>Agriculture</Link>
                <Link to="/waste" onClick={() => handleMenuItemClick("link")}>Waste</Link>
                <Link to="/3d-concrete" onClick={() => handleMenuItemClick("link")}>3D ConcreteHome</Link>
                <Link to="/healthcare" onClick={() => handleMenuItemClick("link")}>Health Care</Link>
                <Link to="/mart" onClick={() => handleMenuItemClick("link")}>GD Mart</Link>
                <Link to="/imbaw" onClick={() => handleMenuItemClick("link")}>GD ImBaw</Link>
                <Link to="/tourism" onClick={() => handleMenuItemClick("link")}>GD Tourism</Link>
              </div>
            )}
          </div>

          {/* Existing menu items continue below */}
          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("solutions")}>
              Solutions
              <span className={`mobile-arrow ${mobileOpenMenu === "solutions" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "solutions" && (
              <div className="mobile-submenu open">
                <Link to="/biogas" onClick={() => handleMenuItemClick("link")}>Biogas</Link>
                <Link to="/biogas-cogeneration" onClick={() => handleMenuItemClick("link")}>Biogas Co-generation</Link>
                <Link to="/liquefication-biomethane" onClick={() => handleMenuItemClick("link")}>Liquefication of Biomethane</Link>
                <Link to="/co2-liquefication" onClick={() => handleMenuItemClick("link")}>Co2 Liquefication</Link>
                <Link to="/waste-hydrochar" onClick={() => handleMenuItemClick("link")}>Waste to Hydrochar</Link>
                <Link to="/green-hydrogen" onClick={() => handleMenuItemClick("link")}>Green Hydrogen</Link>
                <Link to="/grass-silage" onClick={() => handleMenuItemClick("link")}>Grass to Silage</Link>
                <Link to="/grass-pellet" onClick={() => handleMenuItemClick("link")}>Grass to Pellet</Link>
                <Link to="/dehydration" onClick={() => handleMenuItemClick("link")}>Dehydration</Link>
                <Link to="/vertical-farm" onClick={() => handleMenuItemClick("link")}>Farm to Vertical Farm</Link>
                <Link to="/animal-farming" onClick={() => handleMenuItemClick("link")}>Advance Animal Farming</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("products")}>
              Products
              <span className={`mobile-arrow ${mobileOpenMenu === "products" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "products" && (
              <div className="mobile-submenu open">
                <Link to="/GD Bio Energy Refinery" onClick={() => handleMenuItemClick("link")}>GD Bio Energy Refinery</Link>
                <Link to="/GD Advanced Bio Fuel Refinery" onClick={() => handleMenuItemClick("link")}>GD Advanced Bio Fuel Refinery</Link>
                <Link to="/CO2" onClick={() => handleMenuItemClick("link")}>CO2</Link>
                <Link to="/Animal Feeds" onClick={() => handleMenuItemClick("link")}>Animal Feeds</Link>
                <Link to="/Organic Fertilizers" onClick={() => handleMenuItemClick("link")}>Organic Fertilizers</Link>
                <Link to="/Bio Chemicals" onClick={() => handleMenuItemClick("link")}>Bio Chemicals</Link>
                <Link to="/Organic A2 Milk Plant" onClick={() => handleMenuItemClick("link")}>Organic A2 Milk Plant</Link>
                <Link to="/Eco-Wood Composites" onClick={() => handleMenuItemClick("link")}>Eco-Wood Composites</Link>
                <Link to="/Carbon-Sunk Cement Substitutes" onClick={() => handleMenuItemClick("link")}>Carbon-Sunk Cement Substitutes</Link>
                <Link to="/Carbon Graphite" onClick={() => handleMenuItemClick("link")}>Carbon Graphite</Link>
                <Link to="/Turnkey Smart Village Project" onClick={() => handleMenuItemClick("link")}>Turnkey Smart Village Project</Link>
                <Link to="/GD Tourism" onClick={() => handleMenuItemClick("link")}>GD Tourism</Link>
                <Link to="/Carbon Credit" onClick={() => handleMenuItemClick("link")}>Carbon Credit</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("sustainability")}>
              Sustainability
              <span className={`mobile-arrow ${mobileOpenMenu === "sustainability" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "sustainability" && (
              <div className="mobile-submenu open">
                <Link to="/waste-management" onClick={() => handleMenuItemClick("link")}>Waste Management</Link>
                <Link to="/energy-saving" onClick={() => handleMenuItemClick("link")}>Energy Saving</Link>
                <Link to="/green-projects" onClick={() => handleMenuItemClick("link")}>Green Projects</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("hr")}>
              Human Resources
              <span className={`mobile-arrow ${mobileOpenMenu === "hr" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "hr" && (
              <div className="mobile-submenu open">
                <Link to="/Working at GD Biogas" onClick={() => handleMenuItemClick("link")}>Working at GD Biogas</Link>
                <Link to="/Working at GD Planet" onClick={() => handleMenuItemClick("link")}>Working at GD Planet</Link>
                <Link to="/Working at ImPax" onClick={() => handleMenuItemClick("link")}>Working at ImPax</Link>
                <Link to="/Professional Opportunity" onClick={() => handleMenuItemClick("link")}>Professional Opportunity</Link>
                <Link to="/Business Opportunity" onClick={() => handleMenuItemClick("link")}>Business Opportunity</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("finance")}>
              Finance & Insurance
              <span className={`mobile-arrow ${mobileOpenMenu === "finance" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "finance" && (
              <div className="mobile-submenu open">
                <Link to="/Carbon Finance" onClick={() => handleMenuItemClick("link")}>Carbon Finance</Link>
                <Link to="/Green Bonds" onClick={() => handleMenuItemClick("link")}>Green Bonds</Link>
                <Link to="/Private Equity" onClick={() => handleMenuItemClick("link")}>Private Equity</Link>
                <Link to="/CSR Co-Funding" onClick={() => handleMenuItemClick("link")}>CSR Co-Funding</Link>
                <Link to="/International Grants/ Soft Loans" onClick={() => handleMenuItemClick("link")}>International Grants/ Soft Loans</Link>
                <Link to="/Export & Climatic Finance" onClick={() => handleMenuItemClick("link")}>Export & Climatic Finance</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("corporate")}>
              Corporate
              <span className={`mobile-arrow ${mobileOpenMenu === "corporate" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "corporate" && (
              <div className="mobile-submenu open">
                <Link to="/GD Group" onClick={() => handleMenuItemClick("link")}>GD Group</Link>
                <Link to="/Ethics" onClick={() => handleMenuItemClick("link")}>Ethics</Link>
                <Link to="/Financial Results" onClick={() => handleMenuItemClick("link")}>Financial Results</Link>
                <Link to="/Partnership" onClick={() => handleMenuItemClick("link")}>Partnership</Link>
                <Link to="/Certifications" onClick={() => handleMenuItemClick("link")}>Certifications</Link>
                <Link to="/Privacy Notice to Customers" onClick={() => handleMenuItemClick("link")}>Privacy Notice to Customers</Link>
                <Link to="/Suppliers" onClick={() => handleMenuItemClick("link")}>Suppliers</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("news")}>
              News & Media
              <span className={`mobile-arrow ${mobileOpenMenu === "news" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "news" && (
              <div className="mobile-submenu open">
                <Link to="/News" onClick={() => handleMenuItemClick("link")}>News</Link>
                <Link to="/Blogs" onClick={() => handleMenuItemClick("link")}>Blogs</Link>
                <Link to="/Event & Fairs" onClick={() => handleMenuItemClick("link")}>Event & Fairs</Link>
                <Link to="/Press Releases" onClick={() => handleMenuItemClick("link")}>Press Releases</Link>
                <Link to="/Webinars" onClick={() => handleMenuItemClick("link")}>Webinars</Link>
                <Link to="/Press Contact" onClick={() => handleMenuItemClick("link")}>Press Contact</Link>
                <Link to="/News Letters" onClick={() => handleMenuItemClick("link")}>News Letters</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("stories")}>
              GD Stories
              <span className={`mobile-arrow ${mobileOpenMenu === "stories" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "stories" && (
              <div className="mobile-submenu open">
                <div className="mobile-submenu-header" onClick={() => setMobileOpenSubMenu(mobileOpenSubMenu === "about" ? null : "about")}>
                  <span>About Us</span>
                  <span className={`mobile-arrow ${mobileOpenSubMenu === "about" ? 'open' : ''}`}>▼</span>
                </div>
                <Link to="/address-pmo" onClick={() => handleMenuItemClick("link")}>Address to PMO</Link>
                <Link to="/one-district-trillion-economy" onClick={() => handleMenuItemClick("link")}>One District One-Trillion Dollar Economy Model</Link>     
                <div className={`mobile-sub-submenu ${mobileOpenSubMenu === "about" ? 'open' : ''}`}>
                  <Link to="/aboutus#about-gd-stories" onClick={() => handleMenuItemClick("link")}>About GD Stories</Link>
                  <Link to="/aboutus#gd-biogas" onClick={() => handleMenuItemClick("link")}>About GD Biogas</Link>
                  <Link to="/aboutus#meet-our-team" onClick={() => handleMenuItemClick("link")}>Meet Our Team</Link>
                  <Link to="/aboutus#why-gd-biogas" onClick={() => handleMenuItemClick("link")}>Why GD Biogas</Link>
                </div>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("contact")}>
              Contact
              <span className={`mobile-arrow ${mobileOpenMenu === "contact" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "contact" && (
              <div className="mobile-submenu open">
                <Link to="/VendorRegistration" onClick={() => handleMenuItemClick("link")}>Vendor Registration</Link>
                <Link to="/LandProposals" onClick={() => handleMenuItemClick("link")}>Land Proposals</Link>
                <Link to="/RentOn" onClick={() => handleMenuItemClick("link")}>Rent On</Link>
                <Link to="/Careers" onClick={() => handleMenuItemClick("link")}>Careers</Link>
                <Link to="/SiteVisit" onClick={() => handleMenuItemClick("link")}>Site Visit</Link>
                <Link to="/ContactUS" onClick={() => handleMenuItemClick("link")}>Contact US</Link>
                <Link to="/CustomerServiceCentre" onClick={() => handleMenuItemClick("link")}>Customer Service Centre</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("search")}>
              Search
              <span className={`mobile-arrow ${mobileOpenMenu === "search" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "search" && (
              <div className="mobile-submenu open">
                <Link to="/search-product" onClick={() => handleMenuItemClick("link")}>Search Product</Link>
                <Link to="/search-page" onClick={() => handleMenuItemClick("link")}>Search Page</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <div className="mobile-menu-header-item" onClick={() => toggleMobileMenu("en")}>
              Language (EN)
              <span className={`mobile-arrow ${mobileOpenMenu === "en" ? 'open' : ''}`}>▼</span>
            </div>
            {mobileOpenMenu === "en" && (
              <div className="mobile-submenu open">
                <Link to="/en" onClick={() => handleMenuItemClick("link")}>English</Link>
                <Link to="/es" onClick={() => handleMenuItemClick("link")}>Spanish</Link>
                <Link to="/fr" onClick={() => handleMenuItemClick("link")}>French</Link>
                <Link to="/de" onClick={() => handleMenuItemClick("link")}>German</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={headerRef}>
      <header className="header">
        {/* Logo Section - Hidden on Desktop, shown on Mobile */}
        <div className="logo-container-header">
          <Link to="/" className="logo-link-header">
            <img 
              src={logo}
              alt="Company Logo" 
              className="logo-header"
            />
          </Link>
        </div>

        {/* Desktop Navigation Menu - Hidden on Mobile */}
        <nav className="nav-links desktop-menu">
          <span onClick={() => toggleMenu("solutions")}>Solutions</span>
          <span onClick={() => toggleMenu("products")}>Products</span>
          <span onClick={() => toggleMenu("sustainability")}>Sustainability</span>
          <span onClick={() => toggleMenu("hr")}>Human Resources</span>
          <span onClick={() => toggleMenu("finance")}>Finance & Insurance</span>
          <span onClick={() => toggleMenu("corporate")}>Corporate</span>
          <span onClick={() => toggleMenu("news")}>News & Media</span>
          <span onClick={() => toggleMenu("stories")}>GD Stories</span>
          <span onClick={() => toggleMenu("contact")}>Contact</span>
          <span onClick={() => toggleMenu("search")}>Search</span>
          <span onClick={() => toggleMenu("en")}>EN</span>
        </nav>

        {/* Mobile Hamburger Menu - Hidden on Desktop */}
        <div className="hamburger-container">
          <div className="hamburger-menu" onClick={toggleHamburgerMenu}>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
          </div>
        </div>
      </header>

      {/* Desktop dropdowns - ALL INCLUDED */}
      {openMenu === "solutions" && (
        <div className="dropdown-box left-align-1">
          <Link to="/biogas" onClick={() => handleMenuItemClick("link")}>Biogas</Link>
          <hr className="dropdown-divider" />
          <Link to="/biogas-cogeneration" onClick={() => handleMenuItemClick("link")}>Biogas Co-generation</Link>
          <hr className="dropdown-divider" />
          <Link to="/liquefication-biomethane" onClick={() => handleMenuItemClick("link")}>Liquefication of Biomethane</Link>
          <hr className="dropdown-divider" />
          <Link to="/co2-liquefication" onClick={() => handleMenuItemClick("link")}>Co2 Liquefication</Link>
          <hr className="dropdown-divider" />
          <Link to="/waste-hydrochar" onClick={() => handleMenuItemClick("link")}>Waste to Hydrochar</Link>
          <hr className="dropdown-divider" />
          <Link to="/green-hydrogen" onClick={() => handleMenuItemClick("link")}>Green Hydrogen</Link>
          <hr className="dropdown-divider" />
          <Link to="/grass-silage" onClick={() => handleMenuItemClick("link")}>Grass to Silage</Link>
          <hr className="dropdown-divider" />
          <Link to="/grass-pellet" onClick={() => handleMenuItemClick("link")}>Grass to Pellet</Link>
          <hr className="dropdown-divider" />
          <Link to="/dehydration" onClick={() => handleMenuItemClick("link")}>Dehydration</Link>
          <hr className="dropdown-divider" />
          <Link to="/vertical-farm" onClick={() => handleMenuItemClick("link")}>Farm to Vertical Farm</Link>
          <hr className="dropdown-divider" />
          <Link to="/animal-farming" onClick={() => handleMenuItemClick("link")}>Advance Animal Farming</Link>
        </div>
      )}

      {openMenu === "products" && (
        <div className="dropdown-box left-align-2">
          <Link to="/GD Bio Energy Refinery" onClick={() => handleMenuItemClick("link")}>GD Bio Energy Refinery</Link>
          <hr className="dropdown-divider" />
          <Link to="/GD Advanced Bio Fuel Refinery" onClick={() => handleMenuItemClick("link")}>GD Advanced Bio Fuel Refinery</Link>
          <hr className="dropdown-divider" />
          <Link to="/CO2" onClick={() => handleMenuItemClick("link")}>CO2</Link>
          <hr className="dropdown-divider" />
          <Link to="/Animal Feeds" onClick={() => handleMenuItemClick("link")}>Animal Feeds</Link>
          <hr className="dropdown-divider" />
          <Link to="/Organic Fertilizers" onClick={() => handleMenuItemClick("link")}>Organic Fertilizers</Link>
          <hr className="dropdown-divider" />
          <Link to="/Bio Chemicals" onClick={() => handleMenuItemClick("link")}>Bio Chemicals</Link>
          <hr className="dropdown-divider" />
          <Link to="/Organic A2 Milk Plant" onClick={() => handleMenuItemClick("link")}>Organic A2 Milk Plant</Link>
          <hr className="dropdown-divider" />
          <Link to="/Eco-Wood Composites" onClick={() => handleMenuItemClick("link")}>Eco-Wood Composites</Link>
          <hr className="dropdown-divider" />
          <Link to="/Carbon-Sunk Cement Substitutes" onClick={() => handleMenuItemClick("link")}>Carbon-Sunk Cement Substitutes</Link>
          <hr className="dropdown-divider" />
          <Link to="/Carbon Graphite" onClick={() => handleMenuItemClick("link")}>Carbon Graphite</Link>
          <hr className="dropdown-divider" />
          <Link to="/Turnkey Smart Village Project" onClick={() => handleMenuItemClick("link")}>Turnkey Smart Village Project</Link>
          <hr className="dropdown-divider" />
          <Link to="/GD Tourism" onClick={() => handleMenuItemClick("link")}>GD Tourism</Link>
          <hr className="dropdown-divider" />
          <Link to="/Carbon Credit" onClick={() => handleMenuItemClick("link")}>Carbon Credit</Link>
        </div>
      )}

      {openMenu === "sustainability" && (
        <div className="dropdown-box left-align-3">
          <Link to="/waste-management" onClick={() => handleMenuItemClick("link")}>Waste Management</Link>
          <hr className="dropdown-divider" />
          <Link to="/energy-saving" onClick={() => handleMenuItemClick("link")}>Energy Saving</Link>
          <hr className="dropdown-divider" />
          <Link to="/green-projects" onClick={() => handleMenuItemClick("link")}>Green Projects</Link>
        </div>
      )}

      {openMenu === "hr" && (
        <div className="dropdown-box left-align-4">
          <Link to="/Working at GD Biogas" onClick={() => handleMenuItemClick("link")}>Working at GD Biogas</Link>
          <hr className="dropdown-divider" />
          <Link to="/Working at GD Planet" onClick={() => handleMenuItemClick("link")}>Working at GD Planet</Link>
          <hr className="dropdown-divider" />
          <Link to="/Working at ImPax" onClick={() => handleMenuItemClick("link")}>Working at ImPax</Link>
          <hr className="dropdown-divider" />
          <Link to="/Professional Opportunity" onClick={() => handleMenuItemClick("link")}>Professional Opportunity</Link>
          <hr className="dropdown-divider" />
          <Link to="/Business Opportunity" onClick={() => handleMenuItemClick("link")}>Business Opportunity</Link>
        </div>
      )}

      {openMenu === "finance" && (
        <div className="dropdown-box left-align-5">
          <Link to="/Carbon Finance" onClick={() => handleMenuItemClick("link")}>Carbon Finance</Link>
          <hr className="dropdown-divider" />
          <Link to="/Green Bonds" onClick={() => handleMenuItemClick("link")}>Green Bonds</Link>
          <hr className="dropdown-divider" />
          <Link to="/Private Equity" onClick={() => handleMenuItemClick("link")}>Private Equity</Link>
          <hr className="dropdown-divider" />
          <Link to="/CSR Co-Funding" onClick={() => handleMenuItemClick("link")}>CSR Co-Funding</Link>
          <hr className="dropdown-divider" />
          <Link to="/International Grants/ Soft Loans" onClick={() => handleMenuItemClick("link")}>International Grants/ Soft Loans</Link>
          <hr className="dropdown-divider" />
          <Link to="/Export & Climatic Finance" onClick={() => handleMenuItemClick("link")}>Export & Climatic Finance</Link>
        </div>
      )}

      {openMenu === "corporate" && (
        <div className="dropdown-box left-align-6">
          <Link to="/GD Group" onClick={() => handleMenuItemClick("link")}>GD Group</Link>
          <hr className="dropdown-divider" />
          <Link to="/Ethics" onClick={() => handleMenuItemClick("link")}>Ethics</Link>
          <hr className="dropdown-divider" />
          <Link to="/Financial Results" onClick={() => handleMenuItemClick("link")}>Financial Results</Link>
          <hr className="dropdown-divider" />
          <Link to="/Partnership" onClick={() => handleMenuItemClick("link")}>Partnership</Link>
          <hr className="dropdown-divider" />
          <Link to="/Certifications" onClick={() => handleMenuItemClick("link")}>Certifications</Link>
          <hr className="dropdown-divider" />
          <Link to="/Privacy Notice to Customers" onClick={() => handleMenuItemClick("link")}>Privacy Notice to Customers</Link>
          <hr className="dropdown-divider" />
          <Link to="/Suppliers" onClick={() => handleMenuItemClick("link")}>Suppliers</Link>
        </div>
      )}

      {openMenu === "news" && (
        <div className="dropdown-box left-align-7">
          <Link to="/News" onClick={() => handleMenuItemClick("link")}>News</Link>
          <hr className="dropdown-divider" />
          <Link to="/Blogs" onClick={() => handleMenuItemClick("link")}>Blogs</Link>
          <hr className="dropdown-divider" />
          <Link to="/Event & Fairs" onClick={() => handleMenuItemClick("link")}>Event & Fairs</Link>
          <hr className="dropdown-divider" />
          <Link to="/Press Releases" onClick={() => handleMenuItemClick("link")}>Press Releases</Link>
          <hr className="dropdown-divider" />
          <Link to="/Webinars" onClick={() => handleMenuItemClick("link")}>Webinars</Link>
          <hr className="dropdown-divider" />
          <Link to="/Press Contact" onClick={() => handleMenuItemClick("link")}>Press Contact</Link>
          <hr className="dropdown-divider" />
          <Link to="/News Letters" onClick={() => handleMenuItemClick("link")}>News Letters</Link>
        </div>
      )}

      {openMenu === "stories" && (
        <div className="mega-dropdown">
          <div className="mega-col">
            <Link
              to="/aboutus"
              className="mega-link"
              onClick={() => {
                setOpenSubMenu(openSubMenu === "about" ? null : "about");
              }}
            >
              About Us
            </Link>
            <hr className="dropdown-divider" />

            <Link 
              to="/address-pmo" 
              className="mega-link"
              onClick={() => handleMenuItemClick("link")}
            >
              Address to PMO
            </Link>
            <hr className="dropdown-divider" />

            <Link 
              to="/one-district-trillion-economy" 
              className="mega-link"
              onClick={() => handleMenuItemClick("link")}
            >
              One District One-Trillion Dollar Economy Model (ODOE)
            </Link>
          </div>

          {openSubMenu === "about" && (
            <div className="mega-col right-col">
              <Link 
                to="/aboutus#about-gd-stories" 
                className="mega-link"
                onClick={() => handleMenuItemClick("link")}
              >
                About GD Stories
              </Link>
              <hr className="dropdown-divider" />

              <Link 
                to="/aboutus#gd-biogas" 
                className="mega-link"
                onClick={() => handleMenuItemClick("link")}
              >
                About GD Biogas
              </Link>
              <hr className="dropdown-divider" />

              <Link 
                to="/aboutus#meet-our-team" 
                className="mega-link"
                onClick={() => handleMenuItemClick("link")}
              >
                Meet Our Team
              </Link>
              <hr className="dropdown-divider" />

              <Link 
                to="/aboutus#why-gd-biogas" 
                className="mega-link"
                onClick={() => handleMenuItemClick("link")}
              >
                Why GD Biogas
              </Link>
            </div>
          )}
        </div>
      )}

      {openMenu === "contact" && (
        <div className="dropdown-box left-align-9">
          <Link to="/VendorRegistration" onClick={() => handleMenuItemClick("link")}>Vendor Registration</Link>
          <hr className="dropdown-divider" />
          <Link to="/LandProposals" onClick={() => handleMenuItemClick("link")}>Land Proposals</Link>
          <hr className="dropdown-divider" />
          <Link to="/RentOn" onClick={() => handleMenuItemClick("link")}>Rent On</Link>
          <hr className="dropdown-divider" />
          <Link to="/Careers" onClick={() => handleMenuItemClick("link")}>Careers</Link>
          <hr className="dropdown-divider" />
          <Link to="/SiteVisit" onClick={() => handleMenuItemClick("link")}>Site Visit</Link>
          <hr className="dropdown-divider" />
          <Link to="/ContactUS" onClick={() => handleMenuItemClick("link")}>Contact US</Link>
          <hr className="dropdown-divider" />
          <Link to="/CustomerServiceCentre" onClick={() => handleMenuItemClick("link")}>Customer Service Centre</Link>
        </div>
      )}

      {openMenu === "search" && (
        <div className="dropdown-box left-align-10">
          <Link to="/search-product" onClick={() => handleMenuItemClick("link")}>Search Product</Link>
          <hr className="dropdown-divider" />
          <Link to="/search-page" onClick={() => handleMenuItemClick("link")}>Search Page</Link>
        </div>
      )}

      {openMenu === "en" && (
        <div className="dropdown-box left-align-11">
          <Link to="/en" onClick={() => handleMenuItemClick("link")}>English</Link>
          <hr className="dropdown-divider" />
          <Link to="/es" onClick={() => handleMenuItemClick("link")}>Spanish</Link>
          <hr className="dropdown-divider" />
          <Link to="/fr" onClick={() => handleMenuItemClick("link")}>French</Link>
          <hr className="dropdown-divider" />
          <Link to="/de" onClick={() => handleMenuItemClick("link")}>German</Link>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && renderMobileMenu()}
    </div>
  );
};

export default Header;