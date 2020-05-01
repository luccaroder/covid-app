import moment from 'moment-timezone';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import httpClient from 'httpClient'
import DatePickerStartMonitor from 'components/covid/common/DatePickerStartMonitor'
import LineChart from 'components/covid/chart/LineChart'
import { monitorStyles } from 'styles/monitor';
import { buildCovidInformation } from 'builders/monitor';

export default function Monitor() {
    const styles = monitorStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [chartInformation, setChartInformation] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handlechartInformation = (covidInformation) => {
        setChartInformation(covidInformation);
    };

    const getCovidCasesData = () => {
        const day = moment(selectedDate).format('YYYY-MM-DD');
        httpClient.get('/history', { params: { country: 'BRAZIL', day }})
            .then(({ data: { response } }) => {
                console.log(response);
                handlechartInformation(buildCovidInformation(response));
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <>
        <h1>Gráficos mostrando a evolução do Covid-19 no Brasil</h1>
        <h2>Informe um dia para ver os detalhes dos casos</h2>
        <div className={styles.root}>
            <DatePickerStartMonitor
                handleDateChange={handleDateChange}
                selectedDate={selectedDate}/>
            <Button variant="contained" color="primary" onClick={getCovidCasesData}>
                Pesquisar
            </Button>
            <LineChart chartInformation={chartInformation}/>
        </div>
        </>
    );
}