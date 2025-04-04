import { useRef } from 'react';

export default function AddColorForm({ onNewColor = (f) => f }) {
  const textTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    console.log(color, title);
    onNewColor(title, color);
    textTitle.current.value = '';
    hexColor.current.value = '';
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={textTitle}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={hexColor} type="color" required />
      <button>Add</button>
    </form>
  );
}
