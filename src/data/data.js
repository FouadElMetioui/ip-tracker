export const getApiData = async (ipAddress) => {
    try {
        const response = await fetch(`https://api.ip2location.io/?key=DD1FCC4438BCD9A98077C356D06CBC0E&ip=${ipAddress}`);

        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};
