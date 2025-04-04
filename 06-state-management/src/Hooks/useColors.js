import { createContext, useState, useContext } from 'react';
import colorData from '../color-data.json';
import { v4 } from 'uuid';

const ColorContext = createContext();

export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  const addColor = ({ title, color }) => {
    setColors((prevColors) => [
      ...prevColors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id, rating) => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === id ? { ...color, rating } : color
      )
    );
  };

  const removeColor = (id) => {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  );
}
