import { parseISO } from 'date-fns'; 
import { format } from 'date-fns-tz';

const totalCases = {
    id: 'Total de casos',
    color: "hsl(348, 70%, 50%)"
}

const onlyUnique = (valueComparable) => {
    return (item) => { 
        if (item.total_cases !== valueComparable) {
            valueComparable = item.total_cases;
            return item;
        }
   };
}

const total = (chartInformation) => {
    let initialValue = '0.00';
    return chartInformation.filter(onlyUnique(initialValue)).reverse();
};

const totalCasesResult = (cases) => total(cases).map((item) => {
        const parsedDate = parseISO(item.record_date);
        const formatDate = format(parsedDate, 'yyyy-MM-dd HH:mm');
        return {
            x: formatDate,
            y: item.total_cases.replace(',','').replace(' ','')

        }
    });

const BuildTotalInformation = (chartInformation) => {
    totalCases.data = totalCasesResult(chartInformation);
    return [totalCases];
}

export { BuildTotalInformation };