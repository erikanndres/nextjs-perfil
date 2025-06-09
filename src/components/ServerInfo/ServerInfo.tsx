async function getServerInfo() {
    const timestamp = new Date().toISOString();
    return {
        serverTime: timestamp,
        message: 'Hola desde el servidor'
    }
}

export default async function ServerInfo() {
    const data = await getServerInfo();
    return (
        <>
            <h3 className="font-bold text-s md:text-[1.8rem]">Hora del Servidor:</h3>
            <h3 className="text-xs md:text-[1.5rem]">
                {data.serverTime}
            </h3>
        </>
    );
}