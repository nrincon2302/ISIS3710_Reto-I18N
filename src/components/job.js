import React from "react";
import {FormattedDate, FormattedNumber} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary}  
        {navigator.language.startsWith('es') ? (props.offer.salary === 1 ? ' millón' : ' millones') : ' million'}
      </td>
      <td>{props.offer.city}</td>
      {/* Se edita la celda con la fecha para mostrar el formateo en inglés */}
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      {/* Se edita la celda con las vistas para que aparezca el separador de miles */}
      <td>
        <FormattedNumber
          value={props.offer.views}
          thousandSeparator={true}
        />
      </td>
    </tr>
  );
};

export default Job;
