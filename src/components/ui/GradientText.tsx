import React from 'react';

interface GradientTextProps {
    children: React.ReactNode;
    gradient?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, 
    gradient="gradient-primary"
}) => {
    return (
        <div className={`bg-gradient-to-r text-transparent bg-clip-text ${gradient}`}>
            {children}
        </div>
    );
};

export default GradientText;