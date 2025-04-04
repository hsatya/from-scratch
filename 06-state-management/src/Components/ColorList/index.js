import Color from './Color';
import { useColors } from '../../Hooks/useColors';

export default function ColorList() {
  const { colors } = useColors();
  if (!colors.length) return <div>No Color Listed.</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
