"use client"

const { useEffect } = require("react")

function BootstrapClient() {
    useEffect(()=>{
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    })
    return null;
}
export default  BootstrapClient;