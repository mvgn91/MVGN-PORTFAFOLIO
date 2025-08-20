import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '../lib/utils';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  value, 
  suffix = '+', 
  label, 
  className 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = value / (duration / 16);
      let currentCount = 0;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl font-fraunces font-bold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/80 font-medium">{label}</div>
    </div>
  );
};

export default StatCounter;
