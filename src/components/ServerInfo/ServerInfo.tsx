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
        <div>
            <h3>
                La hora del servidor es {data.serverTime}
            </h3>
        </div>
    );
}