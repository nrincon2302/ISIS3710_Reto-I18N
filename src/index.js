import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

ReactDOM.render(
    (navigator.language.startsWith("es") ? 
        <IntlProvider locale="es" messages= {localeEsMessages}>
            <JobsList/>
        </IntlProvider>
    :
        <IntlProvider locale="en" messages= {localeEnMessages}>
            <JobsList/>
        </IntlProvider>
    ), document.getElementById("root")
);