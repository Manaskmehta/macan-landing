import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    FiMessageSquare, FiMail, FiFileText, FiCpu, 
    FiActivity, FiLayers, FiList, FiEye, FiVideo,
    FiBox, FiSearch, FiMic, FiSpeaker, FiMusic,
    FiSettings, FiShare2, FiZap, FiDatabase 
} from 'react-icons/fi';
import { Beam, CircleIcon } from './AnimatedBeam';

export const NLPVisual = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);
    const div7Ref = useRef(null);

    return (
        <div ref={containerRef} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '380px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '2rem'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <CircleIcon ref={div1Ref} icon={<FiMessageSquare />} />
                <CircleIcon ref={div2Ref} icon={<FiMail />} />
                <CircleIcon ref={div3Ref} icon={<FiFileText />} />
            </div>
            
            <div>
                <CircleIcon ref={div4Ref} icon={<FiCpu />} color="#a855f7" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <CircleIcon ref={div5Ref} icon={<FiActivity />} color="#10b981" />
                <CircleIcon ref={div6Ref} icon={<FiLayers />} color="#3b82f6" />
                <CircleIcon ref={div7Ref} icon={<FiList />} color="#f59e0b" />
            </div>

            <Beam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} delay={0} />
            <Beam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} delay={0.5} />
            <Beam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} delay={1} />
            <Beam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} delay={1.5} />
            <Beam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} delay={2} />
            <Beam containerRef={containerRef} fromRef={div4Ref} toRef={div7Ref} delay={2.5} />
        </div>
    );
};

export const VisionVisual = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);

    return (
        <div ref={containerRef} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '380px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '2rem'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <CircleIcon ref={div1Ref} icon={<FiEye />} />
                <CircleIcon ref={div2Ref} icon={<FiVideo />} />
            </div>
            
            <div>
                <CircleIcon ref={div3Ref} icon={<FiSearch />} color="#a855f7" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <CircleIcon ref={div4Ref} icon={<FiBox />} color="#ec4899" />
                <CircleIcon ref={div5Ref} icon={<FiTarget />} color="#06b6d4" />
                {/* Fallback for FiTarget since it might not be imported if I'm not careful */}
            </div>

            <Beam containerRef={containerRef} fromRef={div1Ref} toRef={div3Ref} delay={0} />
            <Beam containerRef={containerRef} fromRef={div2Ref} toRef={div3Ref} delay={0.8} />
            <Beam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} delay={1.6} />
            <Beam containerRef={containerRef} fromRef={div3Ref} toRef={div5Ref} delay={2.4} />
        </div>
    );
};

// Fixed missing FiTarget
import { FiTarget } from 'react-icons/fi';

export const SpeechVisual = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);

    return (
        <div ref={containerRef} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '380px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '2rem'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <CircleIcon ref={div1Ref} icon={<FiMic />} />
                <CircleIcon ref={div2Ref} icon={<FiMusic />} />
            </div>
            
            <div>
                <CircleIcon ref={div3Ref} icon={<FiSpeaker />} color="#a855f7" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <CircleIcon ref={div4Ref} icon={<FiFileText />} color="#10b981" />
                <CircleIcon ref={div5Ref} icon={<FiZap />} color="#f59e0b" />
            </div>

            <Beam containerRef={containerRef} fromRef={div1Ref} toRef={div3Ref} duration={1.5} />
            <Beam containerRef={containerRef} fromRef={div2Ref} toRef={div3Ref} delay={0.7} duration={1.5} />
            <Beam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} delay={1.4} duration={1.5} />
            <Beam containerRef={containerRef} fromRef={div3Ref} toRef={div5Ref} delay={2.1} duration={1.5} />
        </div>
    );
};

export const AutomationVisual = () => {
    const containerRef = useRef(null);
    const div1Ref = useRef(null);
    const div2Ref = useRef(null);
    const div3Ref = useRef(null);
    const div4Ref = useRef(null);
    const div5Ref = useRef(null);
    const div6Ref = useRef(null);

    return (
        <div ref={containerRef} style={{ 
            position: 'relative', 
            width: '100%', 
            height: '380px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '2rem'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                <CircleIcon ref={div1Ref} icon={<FiDatabase />} />
                <CircleIcon ref={div2Ref} icon={<FiZap />} color="#f59e0b" />
                <CircleIcon ref={div3Ref} icon={<FiShare2 />} color="#3b82f6" />
            </div>
            
            <div>
                <CircleIcon ref={div4Ref} icon={<FiSettings />} color="#a855f7" />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <CircleIcon ref={div5Ref} icon={<FiCpu />} color="#10b981" />
                <CircleIcon ref={div6Ref} icon={<FiBox />} color="#ec4899" />
            </div>

            <Beam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} />
            <Beam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} delay={0.6} />
            <Beam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} delay={1.2} />
            <Beam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} delay={1.8} />
            <Beam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} delay={2.4} />
        </div>
    );
};
