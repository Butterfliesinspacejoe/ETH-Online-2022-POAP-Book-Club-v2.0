const sdk=require("api")('@alchemy-docs/v1.0#ab5lji4jl6coae2b');
sdk.ethGetlogsPolygon({
    id:1,
    jsonrpc:"2.0",
    method:"eth_getLogs",
    params:[{
        fromBlock:"latest",
        toBlock:"latest"
    }]
},{apiKey:"demo"})
.then(res=>console.log(res))
.catch(err=>console.error(err));

