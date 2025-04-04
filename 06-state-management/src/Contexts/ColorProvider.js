import { createContext, useState } from 'react';
import colorData from '../color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext();

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColors = ({ title, color }) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = ({ id, rating }) => {
    const newColors = colors.map((color) =>
      color.id === id ? { ...color, rating } : color
    );
    setColors(newColors);
  };

  const removeColor = (id) => {
    const newColors = colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  return (
    <ColorContext.Provider
      value={{ colors, addColors, rateColor, removeColor }}
    >
      {children}
    </ColorContext.Provider>
  );
}

// return (
//     <ColorContext.Provider value={{ colors, setColors }}>
//       {children}
//     </ColorContext.Provider>
//   );
