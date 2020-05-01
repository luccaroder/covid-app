import moment from 'moment-timezone';

const activeCases = {
    id: 'Ativos',
    color: 'hsl(270, 70%, 50%)',
};

const criticalCases = {
    id: 'Críticos',
    color: "hsl(1, 70%, 50%)"
}

const recoveredCases = {
    id: 'Recuperados',
    color: "hsl(348, 70%, 50%)"
}

const activeCasesResult = (chartInformation) => chartInformation.map((item) => {
        return {
            x: moment.parseZone(item.time).format('YYYY-MM-DD HH:mm'),
            y: item.cases.active
        }
    });


const criticalCasesResult = (chartInformation) => chartInformation.map((item) => {
        return {
            x: moment.parseZone(item.time).format('YYYY-MM-DD HH:mm'),
            y: item.cases.critical
        }
    });

const recoveredCasesResult = (chartInformation) => chartInformation.map((item) => {
    return {
        x: moment.parseZone(item.time).format('YYYY-MM-DD HH:mm'),
        y: item.cases.recovered
    }
});

const buildCovidInformation = (chartInformation) => {
    activeCases.data = activeCasesResult(chartInformation);
    criticalCases.data = criticalCasesResult(chartInformation);
    recoveredCases.data = recoveredCasesResult(chartInformation);
    return [activeCases, criticalCases, recoveredCases];
}

export { buildCovidInformation };