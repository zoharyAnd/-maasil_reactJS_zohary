import React from 'react';

type ListItemProps = {
  data: any;
};

const ListItem = (props: ListItemProps) => {
  return (
    <li>
      <p>{props.data.title}</p>
      <p className="date-info">{props.data.strDate}</p>
    </li>
  );
};

export default ListItem;
