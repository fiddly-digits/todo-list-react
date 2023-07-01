interface Props {
  text: string;
  onDelete: () => void;
}

export default function ListItem(props: Props) {
  return (
    <li className='flex justify-between gap-5'>
      <p className='border-2 border-neutral-400 grow pl-3 rounded'>
        {props.text}
      </p>
      <button onClick={props.onDelete} className='bg-red-600 w-8 h-8 rounded'>
        x
      </button>
    </li>
  );
}
