import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    FiSettings, FiCloud, FiCpu, FiServer, 
    FiShield, FiZap, FiActivity, FiLayers,
    FiDatabase, FiHardDrive, FiCheckCircle,
    FiMaximize, FiMinimize, FiRefreshCw, FiGitMerge,
    FiLock
} from 'react-icons/fi';
import { CircleIcon } from './AnimatedBeam';
import { OrbitingCircles } from './OrbitingCircles';

export const MLOpsVisual = () => {
    const div3Ref = useRef(null);

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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'absolute', left: '10%', opacity: 0.6 }}>
                <CircleIcon icon={<FiDatabase />} color="#10b981" />
                <CircleIcon icon={<FiSettings />} color="#10b981" />
            </div>
            
            <CircleIcon ref={div3Ref} icon={<FiCpu />} color="#8b5cf6" />

            <div style={{ position: 'absolute', right: '10%', opacity: 0.6 }}>
                <CircleIcon icon={<FiActivity />} color="#3b82f6" />
            </div>

            {/* Pulsing connections meta-balls or just clear space */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.05) 0%, transparent 60%)',
                zIndex: 0
            }}></div>

            <OrbitingCircles radius={60} duration={15}>
                <FiRefreshCw style={{ color: '#10b981', fontSize: '1rem' }} />
            </OrbitingCircles>
        </div>
    );
};

export const DevOpsConsultingVisual = () => {
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
            <CircleIcon icon={<FiLayers />} color="#3b82f6" />
            
            {/* CI/CD & Kubernetes Orbits */}
            <OrbitingCircles radius={80} duration={20}>
                <div style={{ color: '#fff', background: 'rgba(59, 130, 246, 0.4)', padding: '5px', borderRadius: '50%' }}>
                    <FiGitMerge style={{ fontSize: '0.8rem' }} />
                </div>
            </OrbitingCircles>
            
            <OrbitingCircles radius={140} duration={35} reverse>
                <div style={{ color: '#fff', background: 'rgba(139, 92, 246, 0.4)', padding: '8px', borderRadius: '50%' }}>
                    <FiServer style={{ fontSize: '1rem' }} />
                </div>
            </OrbitingCircles>
            <OrbitingCircles radius={140} duration={35} delay={17.5} reverse>
                 <div style={{ color: '#fff', background: 'rgba(16, 185, 129, 0.4)', padding: '8px', borderRadius: '50%' }}>
                    <FiMaximize style={{ fontSize: '1rem' }} />
                </div>
            </OrbitingCircles>
        </div>
    );
};

export const CloudSolutionsVisual = () => {
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
            <CircleIcon icon={<FiCloud />} color="#0ea5e9" />
            
            <OrbitingCircles radius={100} duration={25}>
                <FiShield style={{ color: '#10b981', fontSize: '1.2rem' }} />
            </OrbitingCircles>
            <OrbitingCircles radius={100} duration={25} delay={8}>
                <FiZap style={{ color: '#f59e0b', fontSize: '1.2rem' }} />
            </OrbitingCircles>
            <OrbitingCircles radius={100} duration={25} delay={16}>
                <FiLock style={{ color: '#ef4444', fontSize: '1.2rem' }} />
            </OrbitingCircles>
        </div>
    );
};

export const DevOpsHeroVisual = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);

    return (
        <div ref={containerRef} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '500px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Central Node */}
             <div style={{
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                borderRadius: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '3.5rem',
                boxShadow: '0 0 60px rgba(59, 130, 246, 0.4)',
                zIndex: 10,
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transform: 'rotate(10deg)'
            }}>
                <FiHardDrive />
            </div>

            <OrbitingCircles radius={200} duration={40}>
                <CircleIcon ref={div1Ref} icon={<FiCloud />} color="#3b82f6" />
            </OrbitingCircles>
            <OrbitingCircles radius={200} duration={40} delay={13.3}>
                <CircleIcon ref={div2Ref} icon={<FiCpu />} color="#10b981" />
            </OrbitingCircles>
             <OrbitingCircles radius={200} duration={40} delay={26.6}>
                <CircleIcon ref={div3Ref} icon={<FiSettings />} color="#8b5cf6" />
            </OrbitingCircles>

            {/* Background Mesh Glow */}
            <div style={{
                position: 'absolute',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 1
            }}></div>
        </div>
    );
};
