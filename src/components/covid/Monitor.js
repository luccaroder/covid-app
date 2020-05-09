import moment from 'moment-timezone';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import httpClient from 'rapidApi'
import CommonDate from 'components/common/CommonDate'
import LineChart from 'components/covid/LineChart'
import { monitorStyles } from 'styles/monitor';
import { BuildTotalInformation } from 'builders/monitor';

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
        const date = moment(selectedDate).format('YYYY-MM-DD');
        httpClient.get('/history_by_particular_country_by_date.php', { params: { country: 'Brazil', date }})
            .then(({data:{stat_by_country}}) => stat_by_country ?
                handlechartInformation(BuildTotalInformation(stat_by_country)) : [])
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <>
        <h1>Gráficos mostrando a evolução do Covid-19 no Brasil</h1>
        <h2>Informe um dia para ver os detalhes dos casos</h2>
        <div className={styles.root}>
            <CommonDate
                handleDateChange={handleDateChange}
                selectedDate={selectedDate}/>
            <Button variant="contained" color="primary" onClick={getCovidCasesData}>
                Pesquisar
            </Button>
            <h2>Quantidade x Horas</h2>
            <LineChart chartInformation={chartInformation}/>
        </div>
        </>
    );
}