export default ({ $config }) => {
    window.initGoogleMaps = initGoogleMaps
    addScript()
    function addScript() {
        const script = document.createElement('script')
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDbhW47-rsI__rt0Q1lSXg4AMvkqkCDhtg&libraries=places&callback=initGoogleMaps"
        script.async = true
        document.head.appendChild(script)
    }
}