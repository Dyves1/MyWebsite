const MapComponent = () => {
  const zoomLevel = 4; 

  return (
    <div className="google-map-code" style={{ width: '100%', height: '400px' }}>
      <iframe
        title="Google Maps Location"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7935.300769411708!2d30.058895192141!3d-1.953563255716712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d9f307959bc0bf%3A0x14bdef4b232f3b7!2sMakuza%20Peace%20Plaza!5e0!3m2!1sen!2sus!4v1633838205533!5m2!1sen!2sus&z=${zoomLevel}`}
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
       
        aria-hidden="false"
        
      ></iframe>
    </div>
  );
};
  
  export default MapComponent;