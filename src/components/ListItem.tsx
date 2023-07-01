interface Props {
  text: string;
  onDelete: () => void;
}

export default function ListItem(props: Props) {
  return (
    <li className='flex justify-between items-center gap-5 border rounded p-1 border-neutral-400 mb-2'>
      <p className='grow pl-3 rounded'>{props.text}</p>
      <button onClick={props.onDelete} className='bg-red-600 w-8 h-8 rounded'>
        x
      </button>
    </li>
  );
}
