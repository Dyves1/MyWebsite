import Button from "../Components/Button";
import MapComponent from "../Components/MapComponent";
import "../Styles/contact.scss";
function ContactContainer() {
  return (
    <div>
      <h1 className="">Contact us</h1>
      <div className="contact">
        <form>
          <div className="contactId">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500 focus:outline-none focus:ring-0 focus:border-600 peer"
                placeholder=" Name"
              />
<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-blue-900 px-2 peer-focus:px-2 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" 
style={{ backgroundColor: '#040b12' }}>
  Name
</label>


            </div>
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500 focus:outline-none focus:ring-0 focus:border-600 peer"
                placeholder=" Email"
              />
<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-blue-900 px-2 peer-focus:px-2 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" 
style={{ backgroundColor: '#040b12' }}>
  Email
</label>
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500 focus:outline-none focus:ring-0 focus:border-600 peer"
              placeholder=" Subject"
            />
<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-blue-900 px-2 peer-focus:px-2 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" 
style={{ backgroundColor: '#040b12' }}>
 Subject
</label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="floating_outlined"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-500 focus:outline-none focus:ring-0 focus:border-600 peer"
              placeholder=" Message"
            />
<label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-blue-900 px-2 peer-focus:px-2 peer-focus:text-600 peer-focus:dark:text-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1" 
style={{ backgroundColor: '#040b12' }}>
  Message
</label>
          </div>

          <Button title="Send Message" color="#243b55" onclick={() => {}} />
        </form>
        <div id="map">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
