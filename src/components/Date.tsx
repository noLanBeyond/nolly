import { format, formatISO } from "date-fns";

type Props = {
  date: Date;
};
export default function Date({ date }: Props) {
  return (
    <time dateTime={formatISO(date)}>
      <span className="date">{format(date, "LLLL d, yyyy")}</span>
      <style jsx>
        {`
          span {
            background-color: #667eea;
            color: #fff;
            border-radius: 3px;
            transition: background-color 0.3s ease;
            padding: 0.15em 0.25em;
          }
        `}
      </style>
    </time>
  );
}
