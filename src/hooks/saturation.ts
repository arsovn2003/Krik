import { useState, useEffect } from 'react';

export const Saturation = (): [number, (saturation: number) => void] => {
  const [saturation, setSaturation] = useState(1);

  useEffect(() => {
    if (saturation) {
      document.documentElement.style.filter = `saturate(${saturation})`;
    } else {
      document.documentElement.style.filter = 'none';
    }
  }, [saturation]);

  const adjustSaturation = (newSaturation: number) => {
    setSaturation(newSaturation);
  };

  return [saturation, adjustSaturation];
};