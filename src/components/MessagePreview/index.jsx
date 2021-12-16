import { formatDistance } from "date-fns";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import styles from "./MessagePreview.module.scss";

const MessagePreview = (props) => {
  const data = props.data || {
    text: "lorem ipsum",
    date: new Date(),
    sender: "User",
  };

  return (
    <div className={styles.message}>
      <h5>{data.sender}</h5>
      <p>
        <small>
          {formatDistance(new Date(data.date), new Date(), {
            addSuffix: true,
            locale: it,
          })}
        </small>
        <small>
        {format(new Date(data.date), ' kk:mm')}
        </small>
      </p>
      <p>{data.text}</p>
    </div>
  );
};

export { MessagePreview };
