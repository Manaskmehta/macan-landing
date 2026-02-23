import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JewelleryERP from './pages/JewelleryERP';
import AIAgentDevelopment from './pages/AIAgentDevelopment';
import CorporateERP from './pages/CorporateERP';
import ShopfloorManagement from './pages/ShopfloorManagement';
import MEC from './pages/MEC';
import InventoryControl from './pages/InventoryControl';
import VendorPortal from './pages/VendorPortal';
import CRM from './pages/CRM';
import POSSystem from './pages/POSSystem';
import InvoiceUtility from './pages/InvoiceUtility';
import Analytics from './pages/Analytics';
import ArtificialIntelligence from './pages/ArtificialIntelligence';
import DevOps from './pages/DevOps';
import WebAppServices from './pages/WebAppServices';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Delay to allow component to mount and layout to settle
            const timer = setTimeout(() => {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 100);
            return () => clearTimeout(timer);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

function App() {
  return (
    <Router>
        <ScrollToTop />
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jewellery-erp" element={<JewelleryERP />} />
                <Route path="/ai-agent-development" element={<AIAgentDevelopment />} />
                <Route path="/corporate-erp" element={<CorporateERP />} />
                <Route path="/shopfloor-management" element={<ShopfloorManagement />} />
                <Route path="/mec" element={<MEC />} />
                <Route path="/inventory-control" element={<InventoryControl />} />
                <Route path="/vendor-portal" element={<VendorPortal />} />
                <Route path="/crm" element={<CRM />} />
                <Route path="/pos-system" element={<POSSystem />} />
                <Route path="/invoice-utility" element={<InvoiceUtility />} />
                <Route path="/analytics" element={<Analytics />} />
                
                {/* Unified AI page with hash-based navigation */}
                <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
                <Route path="/ai-consulting" element={<ArtificialIntelligence />} />
                <Route path="/nlp" element={<ArtificialIntelligence />} />
                <Route path="/computer-vision" element={<ArtificialIntelligence />} />
                <Route path="/speech-text-services" element={<ArtificialIntelligence />} />
                <Route path="/business-automation" element={<ArtificialIntelligence />} />
                
                <Route path="/devops" element={<DevOps />} />
                <Route path="/web-app-services" element={<WebAppServices />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/about" element={<AboutUs />} />
                {/* Add more routes as needed */}
            </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
