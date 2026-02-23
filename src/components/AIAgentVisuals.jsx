import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    FiDatabase, FiSearch, FiFileText, FiCpu, 
    FiServer, FiZap, FiActivity, FiShield,
    FiMessageSquare, FiUser, FiSettings, FiGlobe,
    FiLayers, FiCloud
} from 'react-icons/fi';
import { Beam, CircleIcon } from './AnimatedBeam';
import { OrbitingCircles } from './OrbitingCircles';

export const RAGVisual = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);

    return (
        <div ref={containerRef} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'absolute', left: '10%' }}>
                <CircleIcon ref={div1Ref} icon={<FiDatabase />} color="#60a5fa" />
                <CircleIcon ref={div2Ref} icon={<FiFileText />} color="#60a5fa" />
                <CircleIcon ref={div3Ref} icon={<FiCloud />} color="#60a5fa" />
            </div>
            
            <CircleIcon ref={div4Ref} icon={<FiSearch />} color="#a855f7" />

            {/* Orbiting elements around the search icon */}
            <OrbitingCircles radius={80} duration={20}>
                <div style={{ color: '#60a5fa', background: 'rgba(10,10,15,0.8)', padding: '5px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <FiLayers style={{ fontSize: '0.8rem' }} />
                </div>
            </OrbitingCircles>
            <OrbitingCircles radius={80} duration={20} delay={10}>
                <div style={{ color: '#a855f7', background: 'rgba(10,10,15,0.8)', padding: '5px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <FiCpu style={{ fontSize: '0.8rem' }} />
                </div>
            </OrbitingCircles>

            <Beam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} />
            <Beam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} delay={0.5} />
            <Beam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} delay={1} />
        </div>
    );
};

export const InferenceVisual = () => {
    return (
        <div style={{ 
            position: 'relative', 
            width: '100%', 
            height: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <CircleIcon icon={<FiServer />} color="#a78bfa" />
            
            {/* Inner circle icons */}
            <OrbitingCircles radius={60} duration={15} reverse>
                <FiZap style={{ color: '#f59e0b', fontSize: '1.2rem' }} />
            </OrbitingCircles>
            
            {/* Outer circle icons */}
            <OrbitingCircles radius={120} duration={25}>
                <FiActivity style={{ color: '#10b981', fontSize: '1.2rem' }} />
            </OrbitingCircles>
            <OrbitingCircles radius={120} duration={25} delay={8}>
                <FiShield style={{ color: '#60a5fa', fontSize: '1.2rem' }} />
            </OrbitingCircles>
            <OrbitingCircles radius={120} duration={25} delay={16}>
                <FiSettings style={{ color: '#a78bfa', fontSize: '1.2rem' }} />
            </OrbitingCircles>
        </div>
    );
};

export const ChatbotVisual = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);

    return (
        <div ref={containerRef} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '400px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'absolute', left: '15%' }}>
                <CircleIcon ref={div1Ref} icon={<FiUser />} color="#fff" />
            </div>
            
            <CircleIcon ref={div2Ref} icon={<FiMessageSquare />} color="#34d399" />

            <div style={{ position: 'absolute', right: '15%' }}>
                <CircleIcon ref={div3Ref} icon={<FiSettings />} color="#a855f7" />
            </div>

            <OrbitingCircles radius={100} duration={30}>
                <FiGlobe style={{ color: '#60a5fa', opacity: 0.5 }} />
            </OrbitingCircles>

            <Beam containerRef={containerRef} fromRef={div1Ref} toRef={div2Ref} duration={3} />
            <Beam containerRef={containerRef} fromRef={div2Ref} toRef={div3Ref} delay={1.5} duration={3} />
        </div>
    );
};
